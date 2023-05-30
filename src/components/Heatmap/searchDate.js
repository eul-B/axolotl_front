import React, { useEffect, useState } from "react";
import moment from 'moment';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import name from './Namelist.json';
import data from './prev.json';

function SearchDates({ onStopFetching, setData, setCombinedData }) {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(today);
  const [startTime, setStartTime] = useState(today);
  const [start, setStart] = useState(today);

  const postData = async () => {
    const url = 'http://localhost:5000/get_perform';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: start
      })
    };

    try {
    } catch (error) {
      console.error(error);
    }
  };

  const dataSetting = async () => {
    try {
      const modifiedDataList = await Promise.all(
        name.map(async (item) => { 
          const response =  data[item.id];
          if (Array.isArray(response)) {
            const modifiedData = response.map((item) => ({
              date: item.date,
              cpu: item.cpu,
              mem: item.memory,
              net_in: item.net_in,
              net_out: item.net_out
            }));
            return modifiedData;
          } else {
            return [];
          }
        })
      );
    
      return modifiedDataList;

    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = async () => {
    const searchDateTime = moment(`${startDate} ${startTime}`).format('YYYY-MM-DD HH:mm:ss');
    setStart(searchDateTime);
  
    await postData();
    onStopFetching();
  
    const modifiedDataList = await dataSetting();
    setData(modifiedDataList);
    setCombinedData(name);
  };

  const handleClickBack = async () => {
    setStart(moment(start).subtract(1, 'minute').format('YYYY-MM-DD HH:mm:ss'));
  
    await postData();
    onStopFetching();
  
    const modifiedDataList = await dataSetting();
    setData(modifiedDataList);
    setCombinedData(name);
  };
  
  const handleClickLater = async () => {
    setStart(moment(start).add(1, 'minute').format('YYYY-MM-DD HH:mm:ss'));
  
    await postData();
    onStopFetching();
  
    const modifiedDataList = await dataSetting();
    setData(modifiedDataList);
    setCombinedData(name);
  };

  return (
    <div>
      <Box sx={{ '& button': { m: 1 } }}>
        <TextField
          className="date"
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
        
        <Button variant="contained" size="large" onClick={handleClick}>
          Search
        </Button>
      </Box>
      <Box sx={{ '& button': { m: 1 } }} >
        <IconButton aria-label="delete" onClick={handleClickBack}>
          <ArrowBackIosRoundedIcon  />
        </IconButton>
        <>{start}</>
        <IconButton aria-label="delete" onClick={handleClickLater}>
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default SearchDates;