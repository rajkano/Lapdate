module.exports = {
  'env': {
    'test': {
      'presets': ['@babel/preset-env', '@babel/preset-react'],
      'plugins': ['transform-export-extensions',
        [
          '@babel/plugin-proposal-class-properties',
          {
            'loose': true
          }
        ]
      ],
      'only': [
        './**/*.js',
        'node_modules/jest-runtime'
      ]
    }
  }
}
