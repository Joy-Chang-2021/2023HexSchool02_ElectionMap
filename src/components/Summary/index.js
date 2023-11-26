"use client"
import { useEffect, useState } from "react"
import { Box, Flex, Text, Icon, Collapse, useDisclosure } from "@chakra-ui/react"
import { VoteRate, PartyScale } from "components"
import { ArrowRight, ArrowDown } from "assets/icons"

export default function Summary () {

    const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
    const [isPC, setPC] = useState(false)

    const handleResize = () => {
        if (window.innerWidth >= 768) {
            setPC(true)
            onOpen()
        }
        else {
            setPC(false)
            onClose()
        }
    }

    useEffect(() => {
        handleResize ()
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <Box w={{ base: "100%", md: "270px" }} h="max-content"
             p={{ base: "12px 20px", md: "20px" }}  borderRadius="8px" bgColor="#FFF"
             onClick={isPC ? null : onToggle} cursor={isPC ? "default" : "pointer"}>
            <Flex justify="space-between"
                  borderRadius={isOpen ? "8px 8px 0 0" : "8px"}>
                <Text fontSize={{ base: "18px", md: "20px" }} fontWeight="bold">投票概況</Text>
                <Icon as={isOpen ? ArrowDown : ArrowRight} hideFrom="md" w="24px" h="24px"/>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Flex direction="column" mt="20px" gap={{ base: "20px", md: "40px" }}
                     borderRadius="0 0 8px 8px">
                    <VoteRate />
                    <PartyScale />
                </Flex>
            </Collapse>
        </Box>
    )
}