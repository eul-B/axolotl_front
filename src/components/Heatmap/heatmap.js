import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';
import SearchDates from './searchDate';
import RealTime from './backToRealTime';

const MyCharts = () => {
  const [data, setData] = useState([]);
  const [fetchingData, setFetchingData] = useState(true);
  const [nodeNames, setNodeNames] = useState([]);

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
          setNodeNames(modified);
        } else {
          setNodeNames([]);
        }

        const newData = await Promise.all(
          nodeNames.map(async (name) => {
            const response = await axios.get(`http://localhost:8000/${name}`);
            if (Array.isArray(response.data)) {
              const modifiedData = response.data.map((item) => ({
                name: item.date,
                cpu: item.cpu,
                mem: item.mem,
                net: item.net
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

  const series = data.flatMap((nodeData) => [
    { name: 'cpu', data: nodeData.map((item) => item.cpu) },
    { name: 'memory', data: nodeData.map((item) => item.mem) },
    { name: 'network', data: nodeData.map((item) => item.net) }
  ]);

  const options = {
    chart: { id: 'bar-chart' },
    xaxis: { categories: data.length > 0 ? data[0].map((item) => item.name) : [] },
    dataLabels: { enabled: false },
    colors: ["#000000", "#FF0000", "#0000FF"],
    grid: { show: false },
    stroke: { width: 0 },
    tooltip: {
      enabled: true,
      followCursor: true
    }
    // yaxis: { show: series.name === 'memory'? true:false },
    
  };

  return (
    <div>
      <SearchDates onStopFetching={handleStopFetching} />
      <RealTime onStartFetching={handleStartFetching} />
      <Chart
        options={options}
        series={series}
        type="heatmap"
        width="850"
        height="600"
      />
    </div>
  );
};

export default MyCharts;
