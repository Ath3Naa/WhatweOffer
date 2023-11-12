import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from "react-router-dom";
import styles from '../Offers_Page/Offers.css'
import FullTImeJobIcon from './Assets/PaidInternshipsIcon.png'
import PartTimeJobsIcon from './Assets/ParttimeJobsicon.png'
import InternshipIcon from './Assets/Internshipsicon.png'
import StipendInternsIcon from './Assets/FulltimeJobsicon.png'
import FellowShipsIcon from './Assets/Felloshipsicon.png'
import GovtJobsIcon from './Assets/GovtJobsicon.png'



const Offers = () => {
  return (
    <div className="wrapper">
        <div className="container">
            <div className="top_Content">
                <div className="Title">
                    <h1>WHAT WE OFFER</h1>
                </div>
                <div className="model">
                    <button>Model</button>
                </div>
                <div className="Subtitle">
                    <h3>Subscribe at just <span> ₹9 </span> to get all at once</h3>
                </div>
            </div>
            <div className="bottom_Content">
                <div className="Content_card">
                    <div className="img">
                        <img src={FullTImeJobIcon}  width={70}/>
                    </div>
                    <div className="Card_Name">
                        <h4>Full Time Jobs</h4>
                    </div>
                </div>
                <div className="Content_card">
                    <div className="img">
                        <img src={PartTimeJobsIcon}  width={70}/>
                    </div>
                    <div className="Card_Name">
                        <h4>Part Time Jobs</h4>
                    </div>
                </div>
                <div className="Content_card">
                    <div className="img">
                        <img src={InternshipIcon}  width={70}/>
                    </div>
                    <div className="Card_Name">
                        <h4>Internships</h4>
                    </div>
                </div>
                <div className="Content_card">
                    <div className="img">
                        <img src={StipendInternsIcon}  width={70}/>
                    </div>
                    <div className="Card_Name">
                        <h4>Stipend Internships</h4>
                    </div>
                </div>
                <div className="Content_card">
                    <div className="img">
                        <img src={FellowShipsIcon}  width={70}/>
                    </div>
                    <div className="Card_Name">
                        <h4>FellowShips</h4>
                    </div>
                </div>
                <div className="Content_card">
                    <div className="img">
                        <img src={GovtJobsIcon}  width={70}/>
                    </div>
                    <div className="Card_Name">
                        <h4>Govt. Jobs</h4>
                    </div>
                </div>
            </div>  
        </div>

    </div>
  )
}

export default Offers