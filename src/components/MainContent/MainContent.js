import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainContent.scss';

const MainContent = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get(`https://api.hackillinois.org/event/`).then((eTemp) => {
            setEvents(eTemp.data.events)
        })
    }, 0);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let boxes = [{title:"Friday",events:[{time:'32',title:'gererdgf',location:'verjbiu'}]}];


    return (
        <div className="main-content">
            <h1 id="heading">Schedule</h1>
            {/* {eventsArr} */}
        </div>
    )
}

export default MainContent;