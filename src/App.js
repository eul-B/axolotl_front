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

  const [node, setNode] = useState([]);
  const [link, setLink] = useState([]);
  const [lengthNode, setLength] = useState(0);

useEffect(() => {
  const fetchData = async () => {
    try {
      const noderesponse = await axios.get('http://localhost:7000/nodes');
      const linkresponse = await axios.get('http://localhost:7000/links');
      if (Array.isArray(noderesponse.data) && Array.isArray(linkresponse.data)) {
        const modifiedData = noderesponse.data;
        const modifiedTmp = linkresponse.data;
        setNode(modifiedData);
        setLink(modifiedTmp);
        setLength(Object.keys(modifiedData).length);
        localStorage.setItem('length', (modifiedData).length)
      } else {
        setNode([]);
        setLink([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();

  // const fetchNew = setfetchNew(()=>{
  //     if(noderesponse.status != 304 && linkresponse.status != 304){
  //       fetchData();
  //     }
  // })
  //   const interval = setInterval(() => {
  //   fetchNew();
  // }, 5000);

  const interval = setInterval(() => {
    fetchData();
  }, 5000);

  // return () => clearInterval(interval);
}, []); 



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
      <ForceGraph linksData={link} nodesData={node} nodeHoverTooltip={nodeHoverTooltip}/>
    </section>
    </div>
  );

  
}

export default App;