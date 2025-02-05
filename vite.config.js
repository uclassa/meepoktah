import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ['babel-plugin-styled-components']
      }
    }),
    vike()
  ],
  ssr: {
    noExternal: [
      "react-icons"
    ]
  }
})