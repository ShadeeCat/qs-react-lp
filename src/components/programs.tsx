import React, { useState } from 'react';
// @ts-ignore
import ItemsCarousel from 'react-items-carousel';
import "../assets/styles/programs.css"

export function Programs() {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    return (
        <div className="programsCarousel">
            <h2 className="commonTitle">התוכניות</h2>
            <p className="commonPar">.קרורב המציש הירקולב וקומצ ,יבננ וקיבל חלמצ וטוסנמ ,אילב שצ ימחשצ תל .חערל חיתת ץניק ףולב ימורפל ףונעו - קרלב ןוסמל טקפנ תפנב ,רילק ץפונומ קיטסאלב ופידוא .ףודומ רמב יזאווק תילא גניסיפידא ררוטקסנוק ,טמא טיס רולוד םוספיא םרול</p>
            <ItemsCarousel
                activeItemIndex={activeItemIndex}
                requestToChangeActive={setActiveItemIndex}
                numberOfCards={5}
                gutter={20}
                leftChevron={<button>&#10094;</button>}
                rightChevron={<button>&#10095;</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                    {programsCarouselCont.map((singleChart, index) => {
                       return <ProgramsCarouselChart
                            h3={singleChart.h3}
                            h4={singleChart.h4}
                            text={singleChart.text}
                            caption={singleChart.caption}
                            class={singleChart.class}
                            bgPic={singleChart.picture}
                            key={index}
                        />
                    })
                    }
            </ItemsCarousel>
            <a href="# " className="commonLink">לכל התכניות</a>
        </div>
    );
}


const ProgramsCarouselChart = (props: Omit<Program & { key: number, bgPic: string }, 'picture'>)  => {
        // <div className={props.class} style={{backgroundImage: 'programsCarousel/' + props.bgPic}}>
    return <div className="programsCarouselChart">
        <div className={props.class} style={{ backgroundImage: `url(bgPics/programsCarousel/${ props.bgPic })` }}>
            <h3>{props.h3}</h3>
            <h4>{props.h4}</h4>
            <p>{props.text}</p>
        </div>
        <p>{props.caption}</p>
    </div>
};

interface Program {
    h3: string,
    h4: string,
    text: string,
    caption: string,
    class: string,
    picture: string,
}
const programsCarouselCont: Program[] = [
{
        h3: "TOP HITS",
        h4: "עם קרן מילוא",
        text: "ה' - 8:00 - 10:00",
        caption: "לורם איפסום",
        class: "programsCarouselCont bottomCont",
        picture: "firstPic.png"
    },
    {
        h3: "VIP",
        h4: "עם קרן מילוא",
        text: "ה' - 15:00 - 16:00",
        caption: "לורם איפסום",
        class: "programsCarouselCont centeredCont",
        picture: "secondPic.png"
    },
    {
        h3: "בוקר חדש",
        h4: "עם קרן מילוא",
        text: "ה' - 8:00 - 10:00 ",
        caption: "לורם איפסום",
        class: "programsCarouselCont centeredCont",
        picture: "thirdPic.png"
    },
    {
        h3: "Pop-up",
        h4: "עם קרן מילוא",
        text: "ה' - 15:00 - 16:00",
        caption: "לורם איפסום",
        class: "programsCarouselCont bottomCont",
        picture: "fourthPic.png"
    },
    {
        h3: "TOP HITS",
        h4: "עם קרן מילוא",
        text: "ה' - 8:00 - 10:00",
        caption: "לורם איפסום",
        class: "programsCarouselCont centeredCont",
        picture: "secondPic.png"
    },
    {
        h3: "TOP HITS",
        h4: "עם קרן מילוא",
        text: "ה' - 8:00 - 10:00",
        caption: "לורם איפסום",
        class: "programsCarouselCont bottomCont",
        picture: "fourthPic.png"
    },
    {
        h3: "TOP HITS",
        h4: "עם קרן מילוא",
        text: "ה' - 8:00 - 10:00",
        caption: "לורם איפסום",
        class: "programsCarouselCont bottomCont",
        picture: "secondPic.png"
    }
];