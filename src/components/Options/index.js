"use client"
import { useState, useContext } from "react"
import { Box, Flex, Center, Text, Select, Icon } from "@chakra-ui/react"
import styled from "styled-components"
import { Rotate } from "assets/icons"
import { CityContext } from "components/Context/CityContext"

const StyledTab = styled(Box)`
    color: #BFBFBF;
    padding-bottom: 10px;
    border-bottom: 4px solid transparent;
    cursor: pointer;
    &:hover {
        color: #757575;
        border-color: #BDBDBD;
    }
    &.active {
        color: #262E49;
        border-color: #262E49;
    }
`

export default function Options () {

    const { cityList, citySelect, setCitySelect } = useContext (CityContext)
    const [ElectionType, setElectionType] = useState("president")

    return (
        <>
            {/* 選舉 */}
            <Flex gap="20px">
                <StyledTab onClick={() => setElectionType("president")}
                           className={ElectionType === "president" && "active"}>
                    <Text>第15任 總統副總統大選</Text>
                </StyledTab>
                <StyledTab onClick={() => setElectionType("parliament")}
                           className={ElectionType === "parliament" && "active"}>
                    <Text>第10任 立法委員選舉</Text>
                </StyledTab>
            </Flex>
            {/* 地區選項 */}
            <Flex w={{ base: "345px", md: "616px" }} justify="space-between">
                <Flex w={{ base: "calc(100% - 44px)", md: "calc(100% - 108px)" }}
                      gap={{ base: "12px 8px", md: "20px" }}
                      wrap="wrap" justify="space-between">
                    <Box>
                        <Select variant='outline' bgColor="#FFF"
                                w={{ base: "300px", md: "156px" }} h="36px"
                                placeholder='請選擇'
                                cursor="pointer"
                                _focusVisible={{ border: "1px solid #222" }}
                                value={citySelect}
                                onChange={(e) => setCitySelect(e.target.value)}>
                            {cityList.map(city => {
                                if (city.isCity) return (
                                    <option key={city.Id}
                                            value={city.Value}>
                                        {city.Value}
                                    </option>
                            )})}
                        </Select>
                    </Box>
                    <Box w={{ base: "calc((100% - 8px) / 2)", md: "calc((100% - 40px) / 3)" }}>
                        <Select h="36px" bgColor="#FFF"
                                cursor="pointer"
                                _focusVisible={{ border: "1px solid #222" }}>
                            <option>地區</option>
                        </Select>
                    </Box>
                    <Box w={{ base: "calc((100% - 8px) / 2)", md: "calc((100% - 40px) / 3)" }} >
                        <Select h="36px" bgColor="#FFF"
                                cursor="pointer"
                                _focusVisible={{ border: "1px solid #222" }}>
                            <option>鄰里</option>
                        </Select>
                    </Box>
                </Flex>
                <Center as="button" w={{ base: "36px", md: "88px" }}
                        borderRadius="8px" gap="8px"
                        color="#FFFFFF" bgColor="#262E49"
                        _hover={{ bgColor: "#525982" }}
                        onClick={() => setCitySelect("")}>
                    <Text hideBelow="md">清除</Text>
                    <Icon as={Rotate} w="24px" h="24px"/>
                </Center>
            </Flex>
        </>
    )
}