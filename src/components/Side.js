import React from "react";
import './Side.css'


export default function Side(){
    

    return(
        <footer>
            
            <div id="a_div" className="a_div">
            <div class="first">
                            realtime
                    </div>
                <a className="now">
                    
                    <div class="low">
                            time
                    </div>
                    <div class="low">
                            ip
                    </div>
                    <div class="low">
                            title
                    </div>
                    
                </a>
                <img src={require("./list.png")} width={600}></img>
            </div>
            <div id="a_div" className="b_div">
                <a >
                <img src={require("./nomal.png")} width={280}></img>
                </a> 
            </div>
            
        </footer>
    )
}




/*
document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('container');
    if (!container.contains(e.target)) {
        container.style.display = 'none';
    }
});*/