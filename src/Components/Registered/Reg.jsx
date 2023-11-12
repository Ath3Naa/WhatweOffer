import React from 'react'
import Styles from '../Registered/Reg.css'
import Reg_Icon from './Assets/RegistraionSicon.png'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

const Reg = () => {
  return (
    <div className="Wrapper">
        <div className="Container">
            <div className="Circle">
                <img src={Reg_Icon} width={80} />
            </div>
            <div className="Text">
                <h2>Registered</h2>
            </div>
        </div>
    </div>
  )
}

export default Reg