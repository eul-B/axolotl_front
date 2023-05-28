//maxInput.js

import React, { useState } from "react";
import './maxInput.css'
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { RadioGroup, Radio } from '@palmerhq/radio-group';
import '@palmerhq/radio-group/styles.css'; // use the default styles

const options = ['CPU', 'Memory', 'Network'];

export default function MaxInput(){
    let [userName, setUserName] = useState("");
    let [submitValue, setSubmitValue] = useState("");
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
  
    return(
        <div className="inputName">
            <div className="radio">
            <RadioGroup //설정할 성능정보 선택
                value={value}
                onChange={value => setValue(value)}
            >
                <Radio value="cpu">CPU</Radio>
                <Radio value="memory">Memory</Radio>
                <Radio value="network">Network</Radio>
            </RadioGroup>
            </div>
      
        <Box sx={{ '& button': { m: 1 } }}>
        <form>
        <TextField
            className="text"
            label="Enter the MAX Value"
            type="text"
            // defaultValue={}
            onChange={(e) => setUserName(e.target.value)}
            // inputProps={{ max: today }}
            InputLabelProps={{
            shrink: true,
            }}
        />
        <Button variant="contained" size="large" onClick={()=>setSubmitValue(userName)}>
          Submit
        </Button>
        </form>
        </Box>
        </div>
    );
}