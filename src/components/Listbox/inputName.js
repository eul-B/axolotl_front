import React, { useState } from "react";
import './inputName.css'
import ControllableStates from "./IDorEMAIL";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const options = ['Name', 'E-Mail'];

export default function InputValue(){
    let [userName, setUserName] = useState("");
    let [submitValue, setSubmitValue] = useState("");
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
  
    return(
        <div className="inputName">
            <div className="auto">
            <Autocomplete 
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 150 }}
        renderInput={(params) => <TextField {...params} label="To Edit" />}
      />
      </div>
            {/* <ControllableStates/> */}
            <Box sx={{ '& button': { m: 1 } }}>
            <form>
            <TextField
            className="text"
        id="date"
        label="Enter the Value"
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