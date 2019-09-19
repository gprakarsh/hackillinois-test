import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainContent.scss';

const MainContent = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        axios.get(`https://api.hackillinois.org/event/`).then((eTemp) => {
            setEvents(eTemp.data.events)
        })
    }, []);

    events.sort((a,b)=>{
        return a.startTime-b.startTime
    })

    const eventsArr = events.map((event, i, arr) => {
        const tTemp = new Date(event.startTime);
        const tTemp1 = tTemp.toLocaleTimeString().split('').slice();
        const time = tTemp.toLocaleTimeString().split('').slice(0, 4).join('') + tTemp1.splice(7, 3).join('')
        return (
            <div className="info" key={i}>
                <div className="time">
                    <p>{time}</p>
                </div>
                <div className="title-location">
                    <p>{event.description}</p>
                    <p id="location">{event.locations[0].description}</p>
                </div>
            </div>
        )
    })


    return (
        <div className="main-content">
            <h1 id="heading">Schedule</h1>
            <div className="info-box">
                <h2>Monday</h2>
                {eventsArr}
            </div>
        </div>
    )
}

export default MainContent;