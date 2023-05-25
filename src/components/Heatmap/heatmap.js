import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';


  const MyCharts = () => {
    const [averageTemp, setAverageTemp] = useState([]);
    const [date, setDate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/temperature');
        if (Array.isArray(response.data)) {
          const modifiedData = response.data.map((item) => item.date);
          const modifiedTmp = response.data.map((item) => item.average_temp);
          setDate(modifiedData);
          setAverageTemp(modifiedTmp);
        } else {
          setDate([]);
          setAverageTemp([]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, []); 

    // useEffect(() => {
    //   const getData = async () => {
    //   const url = 'http://localhost:8000/temperature';
    //   try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     console.log(data);
    //     setAverageTemp(data?.map((item) => item.average_temp));
    //     // setDate(data?.map((item) => item.date));
    //   } catch (error) {
    //       console.log(error);
    //   }
    // };
    //   getData();
    // }, []);
  
   const series = [ //data on the y-axis
      {
        name: "",
        data: averageTemp
      },{
        name: "",
        data: averageTemp
      },{
        name: "",
        data: averageTemp
      }
    ];
    const options = { //data on the x-axis
    chart: { id: 'bar-chart'},
    xaxis: {
      categories: date
    },
    dataLabels: {
      enabled: false
    },
    colors:["#000000", "#FF0000", "#0000FF"],
    grid:{
      show:false
    },
    stroke:{
      width:0
    }
  };
  
    return (
      <div>
        <Chart
          options={options}
          series={series}
          type="heatmap"
          width="850"
          height="600"
          
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
  
  export default MyCharts;