import React from "react";
import './Hcomponent.css'
var r = 0;
var g = 100;
var b = 123;

var r_string = r.toString();
var g_string = g.toString();
var b_string = b.toString();

var str = 'rgb('+r_string+','+g_string+','+b_string+')';

const Hbox = (props) => {
  const el = document.getElementById('abox')
  // el.style.backgroundColor = str;
    return (
        <div className="hbox">
        </div>
    );
  };

export default Hbox