import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';
import './chart.css'

  const Stream = () => {
    const [cpu, setCpu] = useState([]);
    const [date, setDate] = useState([]);
    const [mem, setMem] = useState([]);
    const[net, setNet] = useState([]);
    const [local, setLocal] = useState([localStorage.getItem('value')]);
    
    
  useEffect(() => {
    const fetchData = async () => {
      var selected = JSON.parse(localStorage.getItem('value'))
      try { 
        const response = await axios.get('http://localhost:8000/' + selected.id);
        if (Array.isArray(response.data)) {
          const modifiedData = response.data.map((item) => item.date);
          const modifiedCpu = response.data.map((item) => item.cpu);
          const modifiedMem = response.data.map((item) => item.mem);
          const modifiedNet = response.data.map((item) => item.net);
          setDate(modifiedData);
          setCpu(modifiedCpu);
          setMem(modifiedMem);
          setNet(modifiedNet);
        } else {
          setDate([]);
          setCpu([]);
          setMem([]);
          setNet([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []); 
  
   const series = [ //data on the y-axis
      {
        name: "",
        data: cpu
      },{
        name: "",
        data: mem
      },{
        name: "",
        data: net
      }
    ];

    const options = {
      xaxis: {
        categories: date
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#000000", "#FF0000", "#0000FF"],
      grid: {
        show: false
      },
      stroke: {
        width: 0
      },
      tooltip: {
        style: {
          fontSize: '12px',
          color: '#000000' // 툴팁 글씨 색을 빨간색으로 설정
        }
      },
      marker:{
        foreColor: "#000000"
      }
    };
  
    return (
      <div className='stream'>
        <Chart
          options={options}
          series={series}
          type="area"
          width="700"
          height="400"
        />
        <div>
          {/* {JSON.stringify(date)} */}
          
      {/* { result.isLoading && 'loading' }
      { result.error && 'error' }
      { result.data && result.data.name } */}
    </div>
      </div>
    )
  }
  
  export default Stream;