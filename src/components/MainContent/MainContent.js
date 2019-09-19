import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainContent.scss';

const MainContent = () => {
    const [events, setEvents] = useState([]); //array intialization
    useEffect(() => {
        axios.get(`https://api.hackillinois.org/event/`).then((eTemp) => { //data fetching
            setEvents(eTemp.data.events)
        })
    }, []); //empty array to execute useEffect only once

    events.sort((a,b)=>{                  //sorting fetched data based on time
        return a.startTime-b.startTime
    })

    const eventsArr = events.map((event, i, arr) => {  // returning formatted HTML data
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


    return (  //returning basic structure for MainContent
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