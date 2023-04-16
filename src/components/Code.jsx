import { Box, styled } from "@mui/material"
import { Editor } from "./Editor"
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const CodeSection = styled(Box)`
   display: flex;
   justify-content: space-between;
   background-color: #060606
` 

export const Code = () => {

    const { html,
        setHtml,
        css,
        setCss,
        js,
        setJs } = useContext(DataContext)
    return (
        <CodeSection>
          <Editor heading= "HTML" icon="/" color="red" value={html} onChange= {setHtml}/>
          <Editor heading = "CSS" icon="*" color= "blue" value={css} onChange= {setCss}/>
          <Editor heading= "Javascript" icon="()" color = "yellow" value={js} onChange= {setJs}/>
        </CodeSection>
    )
}