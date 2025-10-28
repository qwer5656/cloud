const { startDevServer } = require('@cypress/vite-dev-server')
const vue = require('@vitejs/plugin-vue')

module.exports = {
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    setupNodeEvents(on, config) {
      on('dev-server:start', (options) =>
        startDevServer({
          options,
          viteConfig: {
            plugins: [vue()],
          },
        })
      )
      return config
    },
    // baseUrl 可以刪掉或設定為本地已啟動的伺服器
    // baseUrl: 'http://localhost:5173',
  },
}
