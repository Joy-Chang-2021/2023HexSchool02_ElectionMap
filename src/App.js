import { Box, Flex, Center, Text } from "@chakra-ui/react";
import Main from "components/Main";

function App() {
  return (
    <Center w="100vw" h="100vh" flexDirection="column">
      <Flex as="header" w="100vw" h={{ base: "64px", md: "72px" }}
            align="center" color="#FFFFFF" bgColor="#262E49">
        <Text ml={{ base: "24px", md: "47px" }} fontSize={{ base: "24px", md: "28px" }} pt="3px">2024 開票地圖</Text>
      </Flex>
      <Box w="100vw" h={{ base: "calc(100vh - 64px)", md: "calc(100vh - 72px)" }}>
        <Main />
      </Box>
    </Center>
  );
}

export default App;
