import React, {useState} from 'react';
import Header from './components/header';
import Body from './components/body';
import NModal from './components/NewModal';
import CmpModal from './components/Button/cmpModal';
import data from './components/Network/data.json';
import { ForceGraph } from "./components/Network/forceGraph";
import './App.css';

function App() {

  const modalMain = React.useCallback((node) => {
    return `<div><cmpModalBasic/></div>`
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
      <ForceGraph linksData={data.links} nodesData={data.nodes} nodeHoverTooltip={nodeHoverTooltip} maincmp={modalMain} />
    </section> 
    {/* <Body/> */} 
    </div>
  );

  
}

export default App;