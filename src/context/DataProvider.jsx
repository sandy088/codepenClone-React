import { createContext, useState } from "react";

export const DataContext = createContext()

const DataProvider = ({children}) => {
    const [html, setHtml] = useState('')
    const [css, setCss] = useState('')
    const [js, setJs] = useState('')


    const value = {
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}


export default DataProvider