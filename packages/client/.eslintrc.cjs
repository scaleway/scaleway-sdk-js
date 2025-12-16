const { join } = require('node:path')

module.exports = {
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      { packageDir: [__dirname, join(__dirname, '../../')] },
    ],
  },
}
