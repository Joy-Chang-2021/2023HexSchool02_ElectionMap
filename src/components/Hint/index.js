import { useRef, useEffect } from "react"
import { Box, Flex, Center, Text, Select, Icon, Image } from "@chakra-ui/react"
import styled from "styled-components"
import { Info } from "assets/icons"

const HintContainer = styled(Flex)`
    width: 100%;
    min-height: 249px;
    gap: 20px;
    overflow-x: auto;
    &::-webkit-scrollbar {
        width: 0;
        height: 0
    }
    @media (min-width: 768px) {
        width: 540px;
    }
    @media (min-width: 1060px) {
        width: 260px;
        flex-direction: column;
    }
`

export default function Hint () {

    const HintElementRef = useRef(null)

    useEffect(() => {
        const HintElement = HintElementRef.current
        const handleWheel = (e) => {
            e.preventDefault();
            console.log("wheel")
            HintElement.scrollLeft += e.deltaY;
        }
        HintElement.addEventListener("wheel", handleWheel)
        return () => HintElement.removeEventListener("wheel", handleWheel)
    }, [])

    return (
        <HintContainer ref={HintElementRef}>
            <Box w="260px" minW="260px" h="249px" p="20px" borderRadius="8px" bgColor="#DEE0E4">
                <Box h="106px">
                    <Flex align="center" gap="8px">
                        <Icon as={Info} w="24px" h="24px"/>
                        <Text fontSize="20px" fontWeight="bold">小提示</Text>
                    </Flex>
                    <Text mt="8px" fontSize="16px">點擊選擇縣市、區、村里，可查看選舉結果</Text>
                </Box>
                <Image src="images/hint_select.png"/>
            </Box>
            <Box w="260px" minW="260px" h="249px" p="20px" borderRadius="8px" bgColor="#DEE0E4">
                <Box h="106px">
                    <Flex align="center" gap="8px">
                        <Icon as={Info} w="24px" h="24px"/>
                        <Text fontSize="20px" fontWeight="bold">小提示</Text>
                    </Flex>
                    <Text mt="8px" fontSize="16px">點擊地圖查看縣市的選舉結果</Text>
                </Box>
                <Image src="images/hint_click.png"/>
            </Box>
        </HintContainer>
    )
}