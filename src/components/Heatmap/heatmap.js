import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";

const MyCharts = () => {
  const [averageTemp, setAverageTemp] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    const getData = async () => {
    const url = 'http://localhost:8000/temperature';
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setAverageTemp(data?.map((item) => item.average_temp));
      setDate(data?.map((item) => item.date));
    } catch (error) {
        console.log(error);
    }
  };
    getData();
  }, []);

 const series = [ //data on the y-axis
    {
      name: "Temperature in Celsius",
      data: averageTemp
    }
  ];
  const options = { //data on the x-axis
  chart: { id: 'bar-chart'},
  xaxis: {
    categories: date
  }
};

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="heatmap"
        width="450"
      />
    </div>
  )
}

export default MyCharts;