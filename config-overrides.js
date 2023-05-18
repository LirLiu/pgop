const { overrideDevServer } = require('customize-cra')

module.exports = {
  devServer: overrideDevServer((config) => {
    return {
      ...config,
      proxy: {
        '/api': {
          target: 'http://localhost:5000/',
          changeOrigin: true,
        },
      },
    }
  }),
}
