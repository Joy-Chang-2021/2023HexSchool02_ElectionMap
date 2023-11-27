import { Tooltip } from "@chakra-ui/react"
import { useContext } from "react"
import styled from "styled-components"
import { CityContext } from "components/Context/CityContext"

const StyledPath = styled.path`
    cursor: pointer;
    stroke-width: 3px;
    stroke: ${({$color, $focus}) => ($focus && "#333") || $color || "#333"};
    fill: ${({$color}) => $color || "#333"};
    &:hover {
        fill-opacity: 0.7;
    }
`

// 原尺寸 viewBox="0 0 510 700"
export default function Map () {

    const { cityList, citySelect, setCitySelect } = useContext (CityContext)

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 520 710">
            {cityList.map(site => (
                <Tooltip label={site.Text} key={site.Id}>
                    <StyledPath 
                            $color={site.Color}
                            $focus={citySelect === site.Value}
                            onClick={() => setCitySelect(site.Value)}
                            xmlns="http://www.w3.org/2000/svg" d={site.Path}/>
                </Tooltip>
            ))}
        </svg>
    )
}