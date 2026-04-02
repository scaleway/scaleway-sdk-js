/**
 * Lightweight template engine with {{var}}, {{#if}}/{{/if}}, {{#unless}}/{{/unless}}.
 *
 * Two-phase design: parse a template string once into an AST, then evaluate
 * the AST many times with different variable sets. This avoids re-parsing
 * the same template on every render call.
 */

// --- AST types ---
//
// A parsed template is an array of nodes forming a tree.
// Example: "Hello {{name}}{{#if loud}}!{{/if}}" parses to:
//   [ text("Hello "), var("name"), if("loud", [ text("!") ]) ]

type TemplateNode =
  | { type: 'text'; value: string } // Literal string between tags
  | { type: 'var'; key: string } // {{key}} — substituted from vars
  | { type: 'if'; key: string; body: TemplateNode[] } // {{#if key}}...{{/if}} — body included when truthy
  | { type: 'unless'; key: string; body: TemplateNode[] } // {{#unless key}}...{{/unless}} — body included when falsy

export type TemplateVars = Record<string, string | boolean>

export interface Template {
  readonly nodes: TemplateNode[]
}

// --- Parser (single-pass, stack-based) ---
//
// Uses a stack of frames to handle nesting, like parentheses matching:
//   {{#unless isInfinite}}   <- push frame (expects {{/unless}})
//     {{#if hasParams}}      <- push frame (expects {{/if}})
//       ...content...
//     {{/if}}                <- pop frame, wrap nodes into an "if" node
//   {{/unless}}              <- pop frame, wrap into an "unless" node

interface BlockFrame {
  nodes: TemplateNode[] // Nodes collected at this nesting level
  closeTag: string // Expected closing tag, e.g. "{{/if}}"
  key: string // Variable name for the condition
  isUnless: boolean // true = {{#unless}}, false = {{#if}}
}

/** Return the top frame of the stack (current nesting level). */
function top(stack: BlockFrame[]): BlockFrame {
  const frame = stack[stack.length - 1]
  if (!frame) throw new Error('Template parse error: unexpected empty stack')
  return frame
}

/**
 * Parse a template string into a reusable AST. Call once per template.
 *
 * Walks the source left-to-right in a single pass:
 * 1. Find next `{{` — everything before it becomes a text node
 * 2. Extract tag content between `{{` and `}}`
 * 3. Dispatch: `#if`/`#unless` push a frame, `/if`/`/unless` pop and wrap, else it's a var
 */
export function parse(source: string): Template {
  // Sentinel root frame — never popped, collects top-level nodes
  const sentinel: BlockFrame = {
    nodes: [],
    closeTag: '',
    key: '',
    isUnless: false,
  }
  const stack: BlockFrame[] = [sentinel]
  let i = 0

  while (i < source.length) {
    const tagStart = source.indexOf('{{', i)
    if (tagStart === -1) {
      top(stack).nodes.push({ type: 'text', value: source.slice(i) })
      break
    }

    if (tagStart > i) {
      top(stack).nodes.push({ type: 'text', value: source.slice(i, tagStart) })
    }

    const tagEnd = source.indexOf('}}', tagStart)
    const tag = source.slice(tagStart + 2, tagEnd)
    i = tagEnd + 2

    if (tag.startsWith('#if ') || tag.startsWith('#unless ')) {
      const isUnless = tag.startsWith('#unless ')
      const key = tag.slice(isUnless ? 8 : 4).trim()
      const closeTag = isUnless ? '{{/unless}}' : '{{/if}}'

      // Consume newline after opening block tag
      if (source[i] === '\n') i++

      stack.push({ nodes: [], closeTag, key, isUnless })
    } else if (tag === '/if' || tag === '/unless') {
      // Closing tag — pop frame, verify it matches, wrap collected nodes into a conditional node
      const current = top(stack)
      const actualCloseTag = `{{${tag}}}`

      if (current.closeTag !== actualCloseTag) {
        throw new Error(
          `Template error: expected ${current.closeTag} but found ${actualCloseTag}`,
        )
      }

      stack.pop()
      const node: TemplateNode = current.isUnless
        ? { type: 'unless', key: current.key, body: current.nodes }
        : { type: 'if', key: current.key, body: current.nodes }
      top(stack).nodes.push(node)

      // Consume newline after closing block tag
      if (source[i] === '\n') i++
    } else {
      top(stack).nodes.push({ type: 'var', key: tag })
    }
  }

  return { nodes: sentinel.nodes }
}

// --- Evaluator (tree-walk) ---
//
// Walks the AST and builds the output string. For conditional nodes,
// recurses into body only when the condition is met (truthy for if, falsy for unless).

function evaluateNodes(nodes: TemplateNode[], vars: TemplateVars): string {
  let result = ''

  for (const node of nodes) {
    switch (node.type) {
      case 'text':
        result += node.value
        break
      case 'var':
        if (vars[node.key] !== undefined) result += String(vars[node.key])
        break
      case 'if':
        if (vars[node.key]) result += evaluateNodes(node.body, vars)
        break
      case 'unless':
        if (!vars[node.key]) result += evaluateNodes(node.body, vars)
        break
    }
  }

  return result
}

/** Evaluate a parsed template with a set of variables. Call many times with different vars. */
export function evaluate(template: Template, vars: TemplateVars): string {
  // Collapse 3+ consecutive newlines to 2 (cleans up gaps from excluded conditional blocks)
  return evaluateNodes(template.nodes, vars).replace(/\n{3,}/g, '\n\n')
}
