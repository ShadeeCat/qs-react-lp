import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "../assets/styles/header.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";


import facebook  from "../assets/pics/header-promotion/facebook.png"
import instagram  from "../assets/pics/header-promotion/instagram.png"
import twitter  from "../assets/pics/header-promotion/twitter.png"
import youtube  from "../assets/pics/header-promotion/youtube.png"

export function Nav() {
    return <div>
        <div className="navHead">
        <nav className="nav_right">
            <a href="# ">דף הבית</a>
            <a href="# ">אודות</a>
            <a href="# ">אודות</a>
            <a href="# ">רדיוס TV</a>
            <a href="# " className="active">פרסום ברדיו</a>
            <a href="# ">אפליקציות</a>
            <a href="# ">מה חדש</a>
            <a href="# ">צור קשר</a>
    </nav>
        <nav className="nav_left">
            <a href="# ">
                <img src={ facebook } alt="facebook"/>
            </a>
            <a href="# ">
                <img src={ twitter } alt="twitter"/>
            </a>
            <a href="# ">
                <img src={ instagram } alt="instagram"/>
            </a>
            <a href="# ">
                <img src={ youtube } alt="youtube"/>
            </a>
        </nav>
        </div>
    </div>
}
export class HeaderCarousel extends React.Component {
    render() {
        return (
            <Carousel className="carousel" showArrows={ false } autoPlay infiniteLoop  showThumbs={false} showStatus={false}>
                {
                    HeaderCarouselList.map((text, index) => {
                        return <HeaderCarouselPrivet
                            bgPicture={text.bgPicture}
                            capture={text.capture}
                            text={text.text}
                            nameLink={text.nameLink}
                            textLink={text.textLink}
                            key={index}
                        />
                    })
                }
            </Carousel>
        );
    }
}
interface headerCarouselProps {
    bgPicture: string,
    capture: string,
    text: string,
    nameLink: string,
    textLink: string
}
const HeaderCarouselPrivet = (props:headerCarouselProps ) => {
    return <div className="mainHeader" style={{ backgroundImage: `url(bgPics/headerMainPics/${ props.bgPicture })` }}>
        <div className="mainHeaderCont">
            <h2>{props.capture}</h2>
            <p>{props.text}</p>
            <a href={props.nameLink} className="commonLink">{props.textLink}</a>
        </div>
    </div>
};

const HeaderCarouselList = [
    {
        bgPicture: "headerMainPic1.png",
        capture: "סטטיק ובן אל",
        text: "היום מגיעים לאולפן שלנו הצמד הכי מצליח בישראל השידור יחל בשעה 14:00 אל תפספסו",
        nameLink: "# ",
        textLink: "לשידור החי"
    },
    {
        bgPicture: "headerMainPic2.png",
        capture: "סטטיק ובן אל",
        text: "היום מגיעים לאולפן שלנו הצמד הכי מצליח בישראל השידור יחל בשעה 14:00 אל תפספסו",
        nameLink: "# ",
        textLink: "לשידור החי"
    },
    {
        bgPicture: "headerMainPic3.png",
        capture: "סטטיק ובן אל",
        text: "היום מגיעים לאולפן שלנו הצמד הכי מצליח בישראל השידור יחל בשעה 14:00 אל תפספסו",
        nameLink: "# ",
        textLink: "לשידור החי"
    }
];