import { createContext, useState } from "react"
import { CityList } from "assets/datalist"

const CityContext = createContext()

const CityContextProvider = ({ children }) => {
    const [cityList, setCityList] = useState(CityList)
    const [citySelect, setCitySelect] = useState("")
    return (
        <CityContext.Provider value={{ cityList, setCityList, citySelect, setCitySelect }}>
            {children}
        </CityContext.Provider>
    )
}

export { CityContext, CityContextProvider }