import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainContent.scss';
import car from './../../assets/race_car.webp';
import direction from './../../assets/direction.jpg';

const MainContent = () => {
    const [events, setEvents] = useState([]); //array intialization
    useEffect(() => {
        axios.get(`https://api.hackillinois.org/event/`).then((eTemp) => { //data fetching
            setEvents(eTemp.data.events)
        })
    }, []); //empty array to execute useEffect only once

    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            console.log(document.onscroll)
        })
        console.log('hit')
    }, [])


    events.sort((a, b) => {

        return a.startTime - b.startTime
    })

    const eventsArr = events.map((event, i, arr) => {  // returning formatted HTML data
        const tTemp = new Date(event.startTime * 1000);
        let tTemp1 = tTemp.toLocaleTimeString().split(':').slice();
        tTemp1 = tTemp1[tTemp1.length - 1].split(' ')[1];
        console.log(tTemp1);
        const time = tTemp.toLocaleTimeString().split(':').slice(0, 2).join(':') + ' ' + tTemp1;
        if(arr[i-1] && event.startTime === arr[i-1].startTime){
            return;
        }
        return (
            <div className="info" key={i}>
                <div className="time">
                    <p>{time}</p>
                </div>
                <div className="title-location">
                    <p>{event.description}</p>
                    <a id="location" href={`http://maps.google.com/maps?daddr=${event.locations[0].description}`} target="_blank">{event.locations[0].description} <img src={direction} alt="direction icon" /></a>
                </div>
                {
                    arr[i+1] && event.startTime === arr[i + 1].startTime 
                    && <div className='extra-slot'>
                        <p>{arr[i+1].description}</p>
                        <a id="location" href={`http://maps.google.com/maps?daddr=${arr[i+1].locations[0].description}`} target="_blank">{arr[i+1].locations[0].description} <img src={direction} alt="direction icon" /></a>
                    </div>
                }
            </div>
        )
    })


    return (  //returning basic structure for MainContent
        <div className="main-content">
            <img src={car} id="race-car" />
            <h1 id="heading">Schedule</h1>
            <div className="info-box">
                <h2>Monday</h2>
                {eventsArr}
            </div>
        </div>
    )
}

export default MainContent;