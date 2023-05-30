import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';
import SearchDates from './searchDate';
import RealTime from './backToRealTime';
import AlertModal from '../Alert/alertModal/alertModal';

const MyCharts = () => {
  const [data, setData] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);
  const [nodeNames, setNodeNames] = useState([]);
  const [name, setName] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  const handleStopFetching = () => {
    setFetchingData(false);
  };

  const handleStartFetching = () => {
    setFetchingData(true);
  }; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const nameres = await axios.get('http://localhost:7000/nodes');
        if (Array.isArray(nameres.data)) {
          const modified = nameres.data.map((item) => item.id);
          const modifiedId = nameres.data.map((item) => item.date);
          const combinedData = nameres.data.map((item) => ({ id: item.id, name: item.name }));
          setNodeNames(modified);
          setName(modifiedId);
          setCombinedData(combinedData);
        } else {
          setNodeNames([]);
          setName([]);
          setCombinedData([]);
        }

        const newData = await Promise.all(
          nodeNames.map(async (name) => {
            const response = await axios.get(`http://localhost:8000/${name}`);
            if (Array.isArray(response.data)) {
              const modifiedData = response.data.map((item) => ({
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

        setData(newData);
      } catch (error) {
        console.error(error);
      }
    };

    if (fetchingData) {
      fetchData();
      const interval = setInterval(fetchData, 5000);
      return () => clearInterval(interval);
    }
  }, [fetchingData, nodeNames]);

  const series = data.flatMap((nodeData, nodeIndex) => {
    const nodeName = combinedData[nodeIndex].name;
  
    return [
      { name: `CPU (${nodeName})`, data: nodeData.map((item) => item.cpu).reverse() },
      { name: `Memory (${nodeName})`, data: nodeData.map((item) => item.mem).reverse() },
      { name: `Network Inbound (${nodeName})`, data: nodeData.map((item) => item.net_in).reverse() },
      { name: `Network Outbound (${nodeName})`, data: nodeData.map((item) => item.net_out).reverse() },
    ];
  });

  const options = {
    chart: { id: 'bar-chart' },
    xaxis: { categories: data.length > 0 ? data[0].map((item) => item.date.slice(11, 20)).reverse() : [] },
    dataLabels: { enabled: false },
    colors: ["#000000", "#FF0000", "#00FF00", "#0000FF"],
    grid: { show: false },
    stroke: { width: 0 },
    tooltip: {
      enabled: true,
      followCursor: true
    },
    yaxis: { show: false },
    plotOptions: {
      heatmap: {
        radius: 2,
        shadeIntensity: 0.5,
        distributed: false,
        useFillColorAsStroke: false,
        colorScale: {
          inverse: false,
          min: 0,
          max: 100
        },
      },
    }
  };

  return (
    <div>
      <SearchDates onStopFetching={handleStopFetching} setData={setData} setCombinedData ={setCombinedData} />
      <RealTime onStartFetching={handleStartFetching} />
      <Chart
        options={options}
        series={series}
        type="heatmap"
        width="850"
        height="580"
      />
    </div>
  );
};

export default MyCharts;