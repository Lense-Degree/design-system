module.exports = {
  source: [`tokens/**/*.json`],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [{
        format: 'css/variables',
        destination: 'tokens.css'
      }],
    },
    scss: {
      transformGroup: 'scss',
      buildPath: 'dist/scss/',
      files: [{
        format: 'scss/variables',
        destination: 'tokens.scss'
      }],
    },
    assets: {
      buildPath: 'dist/',
      "actions": ["copy_assets"]
    }
  }
}