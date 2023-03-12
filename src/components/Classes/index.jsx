import React from 'react';
import "./Classes.css";
import Owl from "./Images/owl.jpg"

const classes = () => {
  return (
    <>
        <img className='banner-image' src={Owl} alt="owl-picture" />
        <div className='main-body'>
            <div id='first-section'>
                <h2 className='main-body-title'>REFLEXOLO-CHI™ WORKSHOP</h2>
                <p className='general-item bold'>5-WEEK WORKSHOP</p>
                <p className='general-item'>Note: plans for future workshops are on hold until the number of COVID cases decreases and remains at a level where it is once again safe to meet in small groups.</p>
                <p className='general-item'>This hands-on training is an ideal way to learn the fundamentals and joy of giving a reflexolo-chi™ foot massage to family and friends - whether for pure relaxation, pain relief or to prevent the onset of illness.  Plus you'll receive a relaxing, revitalizing 45 minute mini-session each week!</p>
                <p className='general-item'>Each week, I will demonstrate a new massage sequence using an easy to learn and recall format.  I will also review the techniques that were taught the previous week.   The remaining time will be devoted to practicing, half the time as the reflexologist, and the other half as the recipient.</p>
                <p className='general-item'>The workshops are typically held at my office from 6:15 to 10:00 pm. The small class size (maximum of 6 students) makes it easy for everyone to observe the demonstrations up close and receive individual feedback.</p>
                <p className='general-item'>The investment of $375 includes handouts and massage cream. The only prerequisite is having received at least one reflexolo-chi™ session from me prior to registering.</p>
                <p className='general-item'>The workshops are typically held at my office from 6:15 to 10:00 pm. The small class size (maximum of 6 students) makes it easy for everyone to observe the demonstrations up close and receive individual feedback.</p>
                <p className='general-item'>Note:  This workshop is a prerequisite for the 250-hour reflexolo-chi™ certification program.</p>
            </div>
        </div>
    </>
  )
}

export default classes
