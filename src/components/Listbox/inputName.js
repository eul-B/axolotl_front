import React, { useState } from "react";
import './inputName.css'
import ControllableStates from "./IDorEMAIL";
import { Button, appBarClasses } from "@mui/material";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from "axios";
const options = ['Name', 'E-Mail'];

export default function InputValue() {
  const selected = JSON.parse(localStorage.getItem('value'));
  const [submitValue, setSubmitValue] = useState("");
  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  const postUser = async (name, email) => {
    axios({
      method: "post",
      url: "http://localhost:5000/insert_user",
      data: {
        id: selected.id,
        name: name,
        email: email
      },
      withCredentials: true,
    }).then((res) => {
      console.log(res);
      setSubmitValue(name); // 업데이트된 값으로 상태 업데이트
    });
  }

  const handleClick = () => {
    if (value === options[0]) {
      postUser(inputValue, selected.email);
    } else {
      postUser(selected.name, inputValue);
    }
  }

  return (
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
      <Box sx={{ '& button': { m: 1 } }}>
        <form>
          <TextField
            className="text"
            id="date"
            label="Enter the Value"
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button variant="contained" size="large" onClick={handleClick}>
            Submit
          </Button>
        </form>
      </Box>
    </div>
  );
}