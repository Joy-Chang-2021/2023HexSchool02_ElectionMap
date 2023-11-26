import { Box, Flex, Center, Text, Select, Icon } from "@chakra-ui/react"
import { Doughnut } from 'react-chartjs-2';

export default function PartyScale () {

    const chart = {
        labels: ["水豚黨", "羊駝黨", "海狸黨"],
        datasets: [{
            data: [8170231, 5522119, 608590],
            backgroundColor: ['#84CB98', '#8894D8', '#DFA175'],
            borderWidth: 0
        }],
    }

    return (
        <Flex wrap="wrap" w="100%" gap={{ base: "12px", md: "20px" }} align="center">
            <Box w={{ base: "72px", md: "120px" }} aspectRatio="1 / 1">
                <Doughnut data={chart}/>
            </Box>
            <Flex direction="column" gap="8px" fontSize="12px">
                <Flex align="center">
                    <Center w="24px" h="24px" color="#FFF" bgColor="#84CB98" borderRadius="50%">1</Center>
                    <Box w={{ base: "96px", md: "104px" }} m="0 20px 0 8px">
                        <Text fontSize={{ md: "16px" }} fontWeight="bold">水豚黨</Text>
                        <Text>大水豚 | 小水豚</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="bold">57.13%</Text>
                        <Text>8,170,231 票</Text>
                    </Box>
                </Flex>
                <Flex align="center">
                    <Center w="24px" h="24px" color="#FFF" bgColor="#8894D8" borderRadius="50%">2</Center>
                    <Box w={{ base: "96px", md: "104px" }} m="0 20px 0 8px">
                        <Text fontSize={{ md: "16px" }} fontWeight="bold">羊駝黨</Text>
                        <Text>長羊駝 | 短羊駝</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="bold">57.13%</Text>
                        <Text>8,170,231 票</Text>
                    </Box>
                </Flex>
                <Flex align="center">
                    <Center w="24px" h="24px" color="#FFF" bgColor="#DFA175" borderRadius="50%">3</Center>
                    <Box w={{ base: "96px", md: "104px" }} m="0 20px 0 8px">
                        <Text fontSize={{ md: "16px" }} fontWeight="bold">海狸黨</Text>
                        <Text>紅海狸 | 藍海狸</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="bold">57.13%</Text>
                        <Text>8,170,231 票</Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    )
}