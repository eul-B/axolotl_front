import React, { useState } from "react";
import './inputName.css'
import ControllableStates from "./IDorEMAIL";

export default function InputValue(){
    let [userName, setUserName] = useState("");
    let [submitValue, setSubmitValue] = useState("");

    return(
        <div>
            <ControllableStates/>
        <div className="inputName">
            <form>
        <input onChange={(e) => { setUserName(e.target.value);}} placeholder="Enter the value" className="input"/>
        <input type="button" value={'submit'} onClick={()=>setSubmitValue(userName)} className="submit"/>
        </form>
        
        <>{userName}<></>{submitValue}</>
        </div>
        </div>
    );
}