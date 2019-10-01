import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../assets/styles/liveBroadcast.css"

import onlineMic from "../assets/pics/online/onlineMic.png"
import choosen from "../assets/pics/online/choosen.png"
import mic from "../assets/pics/online/mic.png"
import auditorium from "../assets/pics/online/auditorium.png"

export class LiveBroadcast extends React.Component {
    render() {
        return <div className="liveCarousel">
            <h2 className="commonTitle">צפו באולפן בשידור חיי</h2>
            <Carousel autoPlay={false} showIndicators={false} showStatus={false} >
                <div>
                    <img src={onlineMic} />
                </div>
                <div>
                    <img src={ choosen } />
                </div>
                <div>
                    <img src={ mic } />
                </div>
                <div>
                    <img src={ auditorium } />
                </div>
            </Carousel>
        </div>
    }
}