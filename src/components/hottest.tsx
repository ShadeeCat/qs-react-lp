import React from "react"

import "../assets/styles/hottest.css"
import "../assets/pics/hottest/heartSongs.png"

export function Hottest() {
    return  <div className="hottest">
        <h2 className="commonTitle">הכי חמים ברדיוס</h2>
        <p className="commonPar">קרורב המציש הירקולב וקומצ ,יבננ וקיבל חלמצ וטוסנמ ,אילב שצ ימחשצ תל .חערל חיתת ץניק ףולב ימורפל ףונעו - קרלב ןוסמל טקפנ תפנב ,רילק ץפונומ </p>
        <div className="hottestCont">{hottestList.map((hottest, index) => {
            return <HottestSingle
                text={hottest.text}
                pic={hottest.pic}
                key={index}
            />
        })}
        </div>
        <a className="commonLink" href="#">לכל הקטעים</a>
    </div>
}


// @ts-ignore
const HottestSingle = (props) => {
    return <div className="promotion">
        <h5>{props.text}</h5>
    </div>
}


const hottestList = [
    {
        text: "עדן בן זקן מרימה באולפן",
        pic: "../assets/pics/hottest/edenBenZaken.png"
    },
    {
        text: "סטטיק ובן אל בספיישל מאש אפים",
        pic: "../assets/pics/hottest/static1.png"
    },
    {
        text: "ספיישל של יום העצמאוץ",
        pic: "../assets/pics/hottest/independenceDay.png"
    },
    {
        text: "יובל דיין ושלומי שבת שרים מהלב",
        pic: "../assets/pics/hottest/heartSongs.png"
    }
];