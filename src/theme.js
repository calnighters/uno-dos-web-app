import { extendTheme } from '@chakra-ui/react'

const config = {
    bgGradient: "linear(to-bl, red.500, blue.500)"
}

const theme = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          bgGradient: "linear(to-r, red.500, green.500, yellow.500, blue.500)"
        }
      })
    },
  })

export default theme;