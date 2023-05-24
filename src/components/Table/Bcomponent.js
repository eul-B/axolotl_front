import React from "react";
import './Bcomponent.css'
var r = 0;
var g = 100;
var b = 123;

var r_string = r.toString();
var g_string = g.toString();
var b_string = b.toString();

var str = 'rgb('+r_string+','+g_string+','+b_string+')';

const Bbox = (props) => {
  const el2 = document.getElementById('bbox')
  // el2.style.backgroundColor = str;
    return (
        <div className="bbox">
        </div>
    );
  };

export default Bbox