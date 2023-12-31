import { Box, Flex, Center, Text } from "@chakra-ui/react";
import { CityContextProvider } from "components/Context/CityContext"
import Main from "components/Main";

function App() {
  return (
    <CityContextProvider>
        <Center w="100vw" flexDirection="column">
          <Flex as="header" w="100vw" h={{ base: "64px", md: "72px" }}
                align="center" color="#FFFFFF" bgColor="#262E49">
            <Text w="100%" maxW="1344px" mx="auto" pl={{ base: "24px", md: "47px" }}
                  fontSize={{ base: "24px", md: "28px" }} pt="3px">
              2024 開票地圖
            </Text>
          </Flex>
          <Box w="100%" maxW="1344px" mx="auto">
            <Main />
          </Box>
        </Center>
    </CityContextProvider>
  )
}

export default App;
