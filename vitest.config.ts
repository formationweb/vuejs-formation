import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
