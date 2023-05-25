import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';


  const MyCharts = () => {
    const [cpu, setCpu] = useState([]);
    const [date, setDate] = useState([]);
    const [mem, setMem] = useState([]);
    const[net, setNet] = useState([]);

    var lengthNode = localStorage.getItem('length')

    const [aname, setName] = useState([]);
    
    // var series = [];
    
    // const cpujson = {name: "", data : cpu};
    // const memjson  = {name: "", data : mem};
    // const netjson = {name: "", data : net};

  useEffect(() => {
    const fetchData = async () => {
      try {
        setDate([]);
        setCpu([]);
        setMem([]);
        setNet([]);   

        const nameres = await axios.get('http://localhost:7000/nodes');
        if (Array.isArray(nameres.data)) {
          const modified = nameres.data.map((item)=>item.id);
          setName(modified);
        } else {
          setName([]);
        }
        for(let i = 0;i < lengthNode;i++){
        const response = await axios.get('http://localhost:8000/'+ aname[i]);
        if (Array.isArray(response.data)) {
          const modifiedData = response.data.map((item) => item.date);
          const modifiedCpu = response.data.map((item) => item.cpu);
          const modifiedMem = response.data.map((item) => item.mem);
          const modifiedNet = response.data.map((item) => item.net);
          setDate(modifiedData)
          setCpu((prevCpu) => [...prevCpu, modifiedCpu]);
          setMem((prevMem) => [...prevMem, modifiedMem]);
          setNet((prevNet) => [...prevNet, modifiedNet]);
        } else {
          setDate([]);
          setCpu([]);
          setMem([]);
          setNet([]);
        }
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

  
  const series = [];

  for (let i = 0; i < cpu.length; i++) {
    series.push(
      {
        name: "cpu",
        data: cpu[i]
      },
      {
        name: "memory",
        data: mem[i]
      },
      {
        name: "network",
        data: net[i]
      }
    );
  }


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
    },
    yaxis:{
      enabled: false
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