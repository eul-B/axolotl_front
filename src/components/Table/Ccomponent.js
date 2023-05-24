import React from "react";
import './Ccomponent.css'
var r = 0;
var g = 100;
var b = 123;

var r_string = r.toString();
var g_string = g.toString();
var b_string = b.toString();

var str = 'rgb('+r_string+','+g_string+','+b_string+')';

const Cbox = (props) => {
  const el = document.getElementById('abox')
  // el.style.backgroundColor = str;
    return (
        <div className="cbox">
        </div>
    );
  };

export default Cbox