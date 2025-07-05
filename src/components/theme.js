import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: "tomato",
        },
      },
    },
  },
})

export const system = createSystem(defaultBaseConfig, customConfig)