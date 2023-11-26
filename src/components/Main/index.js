"use client"
import { Box, Flex } from "@chakra-ui/react"
import { Options, Summary, Map, Hint } from "components"

export default function Main () {

    return (
        <Flex direction="column" gap="20px" mx={{ base: "24px", md: "47px" }} my="3vh"
              align={{ base: "center", md: "flex-start" }}>
            <Options />
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: "20px", md: "10px" }}
                  w={{ base: "345px", md: "100%" }}
                  wrap="wrap" justify={{ md: "space-between" }}>
                {/* 投票概況 */}
                <Summary />
                {/* 地圖 */}
                <Box w={{ base: "100%", md: "calc(100% - 280px)" }} maxW="510px">
                    <Map />
                </Box>
                {/* 提示 */}
                <Hint />
            </Flex>
            
        </Flex>
    )
}