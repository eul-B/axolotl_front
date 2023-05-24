import React from "react";
import moment from 'moment';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function SearchDates(){

    const dateNow = new Date();
const today = dateNow.toISOString().slice(0, 10);
const [startDate, setStartDate] = useState(today);
const [startTime, setStartTime] = useState(today);
// var s_date = new Date(dataAll.startDate + " " + dataAll.startTime);
var start_date = moment().format('YYYY-MM-DD HH:mm:ss');
const [start, setStart] = useState(today);

    return(
        <div>
            <Box sx={{ '& button': { m: 1 } }}>
    <TextField
        id="date"
        label="검색 시작일"
        type="date"
        defaultValue={today}
        onChange={(e) => setStartDate(e.target.value)}
        inputProps={{ max: today }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="검색 시작 시간"
        type="time"
        defaultValue={today}
        onChange={(e) => setStartTime(e.target.value)}
        inputProps={{ max: today }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      
      <Button variant="contained" size="large" onClick={()=>setStart(startDate+" "+startTime)}>
          Search
        </Button>
        </Box>
      </div>
    );
}
// let timestring = `${time.year}/${time.month}/
// ${time.date} ${time.hours}:${time.minutes}`;

export default SearchDates