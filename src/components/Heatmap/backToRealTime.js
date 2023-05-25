import React from "react";
import { useState } from "react";
import Button from '@mui/material/Button';

export default function RealTime({onStartFetching}){
    const handleClick = () => {
        onStartFetching(); // 검색 버튼 클릭 시 onStopFetching 호출
      }

    return(
    <div>
        <Button variant="contained" size="large" onClick={handleClick}>
            다시 실시간으로 패치하는 버튼
        </Button>
    </div>    
    )
 
}

