import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  FontFace: [{
    fontFamily: "NotoSansTC Regular",
    fontStyle: "normal",
    src: `url(/fonts/NotoSansTC-Regular.ttf)`
  }, {
    fontFamily: "NotoSansTC SemiBold",
    fontStyle: "bold",
    src: `url(/fonts/NotoSansTC-SemiBold.ttf)`
  }],
  fonts: {
    heading: `"NotoSansTC Regular", "NotoSansTC SemiBold", sans-serif`,
    body: `"NotoSansTC Regular", "NotoSansTC SemiBold", sans-serif`,
    // heading: "思源黑體, sans-serif",
    // body: "思源黑體, sans-serif"
  },
  styles: {
    global: {
      body: {
        bg: "#F5F5F5",
        overflowX: "hidden"
      }
    }
  }
})


export default function Chakra ({ children }) {
  return (
    <ChakraProvider theme={theme}>
      { children }
    </ChakraProvider>
  )
}