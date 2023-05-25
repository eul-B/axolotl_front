import React from 'react';
import Header from './components/header';
import NModal from './components/NewModal';
import CmpModal from './components/Button/cmpModal';
import data from './components/Network/data.json';
import { ForceGraph } from "./components/Network/forceGraph";
import './App.css';
import { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import axios from 'axios';




function App() {


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8000/temperature');
  //       if (Array.isArray(response.data)) {
  //         const modifiedData = response.data.map((item) => item.date);
  //         const modifiedTmp = response.data.map((item) => item.average_temp);
  //         setDate(modifiedData);
  //         setAverageTemp(modifiedTmp);
  //       } else {
  //         setDate([]);
  //         setAverageTemp([]);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();

  //   const interval = setInterval(() => {
  //     fetchData();
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []); 

  const nodeHoverTooltip = React.useCallback((node) => {
    return `<div>     
      <b>${node.name}</b>
    </div>`;
  }, []);

  return (
    <div>
    <Header/>
    <NModal/>    
    <CmpModal/>
    <section className="Main">
      <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip}/>
    </section> 
    {/* <Body/> */} 
    </div>
  );

  
}

export default App;