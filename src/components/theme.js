import { createSystem, defaultConfig, defineConfig, defineGlobalStyles } from "@chakra-ui/react"

const globalCss = defineGlobalStyles({
  body: {
    color: "text.base",
  },
})

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        background: {
            base: { value: "#1B1B1B" },
        },
        card: {
            base: { value: "#2B2B2C" },
            base_lighter: { value: "#3C3C3D" },
            border: { value: "#494949"},
        },
        text: {
            base: { value: "#FFFFFF" }
        }
      },
    },
  },
  globalCss,
})

export const system = createSystem(defaultConfig, customConfig)