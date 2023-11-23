import { Box, Flex, Center, Text, Select, Icon } from "@chakra-ui/react"
import styled from "styled-components"
import { Rotate } from "assets/icons"

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

export default function Main () {

    const CityList = [
        { value: 'taipei', label: '台北市' },
        { value: 'newtaipei', label: '新北市' },
        { value: 'taichung', label: '台中市' },
        { value: 'kaohsiung', label: '高雄市' },
        { value: 'keelung', label: '基隆市' },
        { value: 'taoyuan', label: '桃園市' },
        { value: 'hsinchu', label: '新竹市' },
        { value: 'hsinchucounty', label: '新竹縣' },
        { value: 'miaoli', label: '苗栗縣' },
        { value: 'changhua', label: '彰化縣' },
        { value: 'nantou', label: '南投縣' },
        { value: 'yunlin', label: '雲林縣' },
        { value: 'chiayi', label: '嘉義市' },
        { value: 'chiayicounty', label: '嘉義縣' },
        { value: 'pingtung', label: '屏東縣' },
        { value: 'yilan', label: '宜蘭縣' },
        { value: 'hualien', label: '花蓮縣' },
        { value: 'taitung', label: '台東縣' },
        { value: 'penghu', label: '澎湖縣' },
        { value: 'kinmen', label: '金門縣' },
        { value: 'lienchiang', label: '連江縣' }
    ]


    return (
        <Flex direction="column" gap="20px" w="96vw" mx="auto" mt="3vh"
              align={{ base: "center", md: "flex-start" }}>
            {/* 選舉 */}
            <Flex gap="20px">
                <StyledTab className="active">
                    <Text>第15任 總統副總統大選</Text>
                </StyledTab>
                <StyledTab>
                    <Text>第10任 立法委員選舉</Text>
                </StyledTab>
            </Flex>
            {/* 地區選項 */}
            <Flex w={{ base: "345px", md: "616px" }} justify="space-between">
                <Flex w={{ base: "calc(100% - 44px)", md: "calc(100% - 108px)" }}
                      gap={{ base: "12px 8px", md: "20px" }}
                      wrap="wrap" justify="space-between">
                    <Box>
                        <Select variant='outline'
                                w={{ base: "300px", md: "156px" }} h="36px"
                                placeholder='請選擇'>
                            {CityList.map(city => <option key={city.value}>{city.label}</option>)}
                        </Select>
                    </Box>
                    <Box w={{ base: "calc((100% - 8px) / 2)", md: "calc((100% - 40px) / 3)" }}>
                        <Select h="36px">
                            <option>地區</option>
                        </Select>
                    </Box>
                    <Box w={{ base: "calc((100% - 8px) / 2)", md: "calc((100% - 40px) / 3)" }} >
                        <Select h="36px">
                            <option>鄰里</option>
                        </Select>
                    </Box>
                </Flex>
                <Center as="button" w={{ base: "36px", md: "88px" }} borderRadius="8px"
                        color="#FFFFFF" bgColor="#262E49"
                        _hover={{ bgColor: "#525982" }}>
                    <Icon as={Rotate} w="24px" h="24px"/>
                </Center>
            </Flex>
            <Flex direction={{ base: "column", md: "row" }} gap={{ base: "20px", md: "0" }}
                  w={{ base: "345px", md: "100%" }}
                  wrap="wrap" justify={{ md: "space-between" }}>
                {/* 投票概況 */}
                <Box w={{ base: "345px", md: "270px" }} bgColor="pink">
                    投票概況
                </Box>
                {/* 地圖 */}
                <Box w={{ base: "100%", md: "calc(100% - 270px)", xl: "510px" }} bgColor="grey"
                     aspectRatio="510 / 700">
                    地圖
                </Box>
                {/* 提示 */}
                <Box w={{ md: "540px", xl: "260px" }} bgColor="lightblue">
                    提示
                </Box>
            </Flex>
            
        </Flex>
    )
}