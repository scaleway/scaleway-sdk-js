import { Theme } from "../../theme.js";
import type { Renderer } from "../../renderer.js";
import { ReflectionKind, ProjectReflection, type ContainerReflection, DeclarationReflection, type Reflection, type DocumentReflection } from "../../../models/index.js";
import { type RenderTemplate, UrlMapping } from "../../models/UrlMapping.js";
import type { PageEvent } from "../../events.js";
import type { MarkedPlugin } from "../../plugins/index.js";
import { DefaultThemeRenderContext } from "./DefaultThemeRenderContext.js";
import { JSX } from "../../../utils/index.js";
export interface NavigationElement {
    text: string;
    path?: string;
    kind?: ReflectionKind;
    class?: string;
    children?: NavigationElement[];
}
export declare class DefaultTheme extends Theme {
    usedFileNames: Set<string>;
    private accessor sluggerConfiguration;
    /** @internal */
    markedPlugin: MarkedPlugin;
    /**
     * The icons which will actually be rendered. The source of truth lives on the theme, and
     * the {@link DefaultThemeRenderContext.icons} member will produce references to these.
     *
     * These icons will be written twice. Once to an `icons.svg` file in the assets directory
     * which will be referenced by icons on the context, and once to an `icons.js` file so that
     * references to the icons can be dynamically embedded within the page for use by the search
     * dropdown and when loading the page on `file://` urls.
     *
     * Custom themes may overwrite this entire object or individual properties on it to customize
     * the icons used within the page, however TypeDoc currently assumes that all icons are svg
     * elements, so custom themes must also use svg elements.
     */
    icons: {
        search: () => JSX.Element;
        anchor: () => JSX.Element;
        1: () => JSX.Element;
        2: () => JSX.Element;
        4: () => JSX.Element;
        8: () => JSX.Element;
        16: () => JSX.Element;
        32: () => JSX.Element;
        64: () => JSX.Element;
        128: () => JSX.Element;
        256: () => JSX.Element;
        512: () => JSX.Element;
        1024: () => JSX.Element;
        2048: () => JSX.Element;
        4096: () => JSX.Element;
        8192: () => JSX.Element;
        16384: () => JSX.Element;
        32768: () => JSX.Element;
        65536: () => JSX.Element;
        131072: () => JSX.Element;
        262144: () => JSX.Element;
        524288: () => JSX.Element;
        1048576: () => JSX.Element;
        2097152: () => JSX.Element;
        4194304: () => JSX.Element;
        8388608: () => JSX.Element;
        checkbox: () => JSX.Element;
        chevronDown: () => JSX.Element;
        menu: () => JSX.Element;
        chevronSmall: () => JSX.Element;
        folder: () => JSX.Element;
        alertNote: () => JSX.Element;
        alertTip: () => JSX.Element;
        alertImportant: () => JSX.Element;
        alertWarning: () => JSX.Element;
        alertCaution: () => JSX.Element;
    };
    getRenderContext(pageEvent: PageEvent<Reflection>): DefaultThemeRenderContext;
    documentTemplate: (pageEvent: PageEvent<DocumentReflection>) => JSX.Element;
    reflectionTemplate: (pageEvent: PageEvent<ContainerReflection>) => JSX.Element;
    indexTemplate: (pageEvent: PageEvent<ProjectReflection>) => JSX.Element;
    hierarchyTemplate: (pageEvent: PageEvent<ProjectReflection>) => JSX.Element;
    defaultLayoutTemplate: (pageEvent: PageEvent<Reflection>, template: RenderTemplate<PageEvent<Reflection>>) => JSX.Element;
    getReflectionClasses(reflection: DeclarationReflection | DocumentReflection): string;
    /**
     * Mappings of reflections kinds to templates used by this theme.
     */
    private mappings;
    static URL_PREFIX: RegExp;
    /**
     * Create a new DefaultTheme instance.
     *
     * @param renderer  The renderer this theme is attached to.
     */
    constructor(renderer: Renderer);
    /**
     * Map the models of the given project to the desired output files.
     *
     * @param project  The project whose urls should be generated.
     * @returns        A list of {@link UrlMapping} instances defining which models
     *                 should be rendered to which files.
     */
    getUrls(project: ProjectReflection): UrlMapping[];
    /**
     * @param reflection  The reflection the url should be generated for.
     */
    getFileName(reflection: Reflection): string;
    /**
     * Return the template mapping for the given reflection.
     *
     * @param reflection  The reflection whose mapping should be resolved.
     * @returns           The found mapping or undefined if no mapping could be found.
     */
    private getMapping;
    /**
     * Build the url for the the given reflection and all of its children.
     *
     * @param reflection  The reflection the url should be created for.
     * @param urls        The array the url should be appended to.
     * @returns           The altered urls array.
     */
    buildUrls(reflection: DeclarationReflection | DocumentReflection, urls: UrlMapping[]): UrlMapping[];
    render(page: PageEvent<Reflection>, template: RenderTemplate<PageEvent<Reflection>>): string;
    private _navigationCache;
    /**
     * If implementing a custom theme, it is recommended to override {@link buildNavigation} instead.
     */
    getNavigation(project: ProjectReflection): NavigationElement[];
    buildNavigation(project: ProjectReflection): NavigationElement[];
    /**
     * Generate an anchor url for the given reflection and all of its children.
     *
     * @param reflection  The reflection an anchor url should be created for.
     * @param container   The nearest reflection having an own document.
     */
    applyAnchorUrl(reflection: Reflection, container: Reflection): void;
}
