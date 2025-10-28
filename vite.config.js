import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 4173,      // 固定 port
    strictPort: true, // 如果 port 被占用就報錯，不自動換
    historyApiFallback: true
  },
  test: {
    include: ["**/*.{test,spec}.{js,ts,jsx,tsx}"],
    environment: 'jsdom',
    globals: true,
  },
})
