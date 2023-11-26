"use client"
import { Box, Flex, Text } from "@chakra-ui/react"
import { Doughnut } from "react-chartjs-2"

export default function VoteRate () {

    const chart = {
        labels: ["有效票數", "無效票數"],
        datasets: [{
            data: [14300940, 1636310],
            backgroundColor: ['#262E49', '#CCCCCC'],
            borderWidth: 0
        }],
    }
    
    return (
        <Flex wrap="wrap" w="100%" gap={{ base: "12px", md: "20px" }}>
            <Box w={{ base: "72px", md: "120px" }} aspectRatio="1 / 1">
                <Doughnut data={chart} options={{ tooltips: { enabled: false } }}/>
            </Box>
            <Flex direction="column" w="max-content" justify="center">
                <Text fontWeight="bold">74.9%</Text>
                <Text>投票率</Text>
            </Flex>
            <Flex direction="column" w={{ md: "100%" }} gap="8px" justify="center">
                <Flex align="center" fontSize="12px" gap="8px">
                    <Text fontSize={{ md: "16px" }}>投票數</Text>
                    <Text fontWeight="bold">14,464,571 票</Text>
                </Flex>
                <Flex align="center" fontSize="12px" gap="8px">
                    <Text fontSize={{ md: "16px" }}>無效票數</Text>
                    <Text fontWeight="bold">1,636,310 票</Text>
                </Flex>
                <Flex align="center" fontSize="12px" gap="8px">
                    <Text fontSize={{ md: "16px" }}>有效票數</Text>
                    <Text fontWeight="bold">14,300,940 票</Text>
                </Flex>
            </Flex>
        </Flex>
    )
}