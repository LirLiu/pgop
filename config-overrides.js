const { overrideDevServer } = require('customize-cra')

module.exports = {
  devServer: overrideDevServer((config) => {
    return {
      ...config,
      port: 6666,
      proxy: {
        '/api': {
          target: 'http://localhost:5000/',
          changeOrigin: true,
        },
      },
    }
  }),
}
