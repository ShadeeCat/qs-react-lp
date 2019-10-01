// @ts-ignore
/* eslint-disable import/first */
import React from 'react'
// import '../../assets/styles/App.css';

import { Carousel } from 'react-responsive-carousel';


import facebook  from "../assets/pics/header-promotion/facebook.png"
import instagram  from "../assets/pics/header-promotion/instagram.png"
import twitter  from "../assets/pics/header-promotion/twitter.png"
import youtube  from "../assets/pics/header-promotion/youtube.png"

export function Nav() {
    return <div>
        <div className="navHead">
        <nav className="nav_right">
            <a href="#">דף הבית</a>
            <a href="#">אודות</a>
            <a href="#">אודות</a>
            <a href="#">רדיוס TV</a>
            <a href="#" className="active">פרסום ברדיו</a>
            <a href="#">אפליקציות</a>
            <a href="#">מה חדש</a>
            <a href="#">צור קשר</a>
    </nav>
        <nav className="nav_left">
            <a href="#">
                <img src={ facebook } alt=""/>
            </a>
            <a href="#">
                <img src={ twitter } alt=""/>
            </a>
            <a href="#">
                <img src={ instagram } alt=""/>
            </a>
            <a href="#">
                <img src={ youtube } alt=""/>
            </a>
        </nav>
        </div>
    </div>
}
// export class MainPicComponent extends React.Component {
//     render () {
//         return <div className="mainHeader">
//             <h2>סטטיק ובן אל</h2>
//             <p>היום מגיעים לאולפן שלנו הצמד הכי מצליח בישראל השידור יחל בשעה 14:00 אל תפספסו</p>
//             <a href="#">לשידור החי</a>
//         </div>
//     }
// }

export class HeaderCarousel extends React.Component {
    render() {
        return (
        // @ts-ignore
        //     onClickItem={onClickItem} onClickThumb={onClickThumb}
            <Carousel className="carousel" showArrows={ false } autoPlay infiniteLoop  showThumbs={false} showStatus={false}>
                <div className="mainHeader mainHeader1">
                    <div>
                        <h2>סטטיק ובן אל</h2>
                        <p>היום מגיעים לאולפן שלנו הצמד הכי מצליח בישראל השידור יחל בשעה 14:00 אל תפספסו</p>
                        <a href="#">לשידור החי</a>
                    </div>
                </div>
                <div className="mainHeader mainHeader2">
                    <div>
                        <h2>סטטיק ובן אל</h2>
                        <p>היום מגיעים לאולפן שלנו הצמד הכי מצליח בישראל השידור יחל בשעה 14:00 אל תפספסו</p>
                        <a href="#">לשידור החי</a>
                    </div>
                </div>
                <div className="mainHeader mainHeader3">
                    <div>
                        <h2>סטטיק ובן אל</h2>
                        <p>היום מגיעים לאולפן שלנו הצמד הכי מצליח בישראל השידור יחל בשעה 14:00 אל תפספסו</p>
                        <a href="#">לשידור החי</a>
                    </div>
                </div>
            </Carousel>
        );
    }
}