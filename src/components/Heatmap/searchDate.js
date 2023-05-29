import React from "react";
import moment from 'moment';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import './searchDate.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

function SearchDates({ onStopFetching, setData }) {
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(today);
  const [startTime, setStartTime] = useState(today);
  const [start, setStart] = useState(today);
  const [responseData, setResponseData] = useState('');


  const postData = () => {
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

    fetch(url, requestOptions)
      .then(response => response.json())
      .then(data => {
        // 요청에 대한 응답 처리
        setResponseData(data);
        alert(JSON.stringify(data));

        const newData = data.map((item) => ({
          date: item.date,
          cpu: item.cpu,
          mem: item.memory,
          net_in: item.net_in,
          net_out: item.net_out
        }));
        setData(newData);
      })
      .catch(error => {
        // 오류 처리
        console.error(error);
      });
  };

  
  const handleClick = () => {
    postData()
    onStopFetching(); // 검색 버튼 클릭 시 onStopFetching 호출
    const searchDateTime = moment(`${startDate} ${startTime}`).format('YYYY-MM-DD HH:mm:ss');
    setStart(searchDateTime);
  }
  const handleClickBack = () => {
    postData()
    onStopFetching(); // 검색 버튼 클릭 시 onStopFetching 호출
    setStart(moment(start).subtract(1, 'minute').format('YYYY-MM-DD HH:mm:ss'))
  }
  
  const handleClickLater = () => {
    postData()
    onStopFetching(); // 검색 버튼 클릭 시 onStopFetching 호출
    setStart(moment(start).add(1, 'minute').format('YYYY-MM-DD HH:mm:ss'))
  }
  

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
        <IconButton aria-label="delete" onClick= {handleClickBack}>
          <ArrowBackIosRoundedIcon  />
        </IconButton>
        <>{start}</>
        <IconButton aria-label="delete" onClick= {handleClickLater}>
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default SearchDates;