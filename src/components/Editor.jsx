

import { Box, styled } from "@mui/material"
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

import '../App.css'
import { useState } from "react";



const BoxHeading = styled(Box)`
   background : #1d1e22;
   display : flex;
   padding : 9px 12px;
  
   
`

const BoxHeader = styled(Box)`
   background : #060606;
   color: #AAAEBC;
   display : flex;
   justify-content: space-between;
   font-weight: 700

`

const EditorContainer = styled(Box)`
   
   flex-grow: 1;
   flex-basic:0;
   display: flex;
   flex-direction: column;
   padding:0 8px 8px;
   

`



export const Editor = ({ heading, icon, color, value, onChange }) => {

    const [open, setOpen] = useState(true)
    function handleChange  (Editor,data, value){
        onChange(value)
    }
    
    const openCloseHandle = ()=>{
      setOpen( !open)
    }
    return (
        <EditorContainer style={open? null: {flexGrow:0} }>
            <BoxHeader>
                <BoxHeading>
                    <Box component="span"
                        style={{
                            background: `${color}`,
                            height: 20,
                            width: 20,
                            display: "flex",
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: "#000"
                        }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </BoxHeading>
                <CloseFullscreenIcon 
                 onClick = {openCloseHandle}
                />
            </BoxHeader>

            <ControlledEditor
                className='controlled-editor'
                value = {value}
                onBeforeChange={handleChange}
                
                options={{
                    theme: 'material',
                    lineNumbers: true,
                   
                    
                }}
            />


        </EditorContainer>
    )
}

