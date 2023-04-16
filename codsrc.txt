import { Box, styled } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/DataProvider"

export const Result = () => {

    const { html, css, js } = useContext(DataContext)
    const [src, setsrc] = useState('')



    const srcCode = `
      <html>
         <body>
           ${html}
         
         </body>
         <style> ${css} </style>
         <script> ${js}</script>
      </html>
    `
    useEffect(() => {
       const timeout=  setTimeout(() => {
            setsrc(srcCode)
        }, 2000)

        return () => clearTimeout(timeout)
    }, [html, css, js])


    const ResultContainer = styled(Box)`
      
      height:40vh
    
    `

    return (
        <ResultContainer>
            <iframe
                srcDoc={src}
                title="Output"
                sandbox="allow-scripts"
                width="100%"
                height="100%"
                frameBorder={0}
            />


        </ResultContainer>
    )
}