import React from "react"

import  "../assets/styles/whatsNewCont.css"

export const WhatsNew = (props: WhatsNewPersonProps) => {
    return <div className="whatsNew">
        <h2 className="commonTitle">מה חדש</h2>
        <div className="whatsNewCont">
            <div>{whatsNewArray.slice(0,2).map((person, index) => {
            return <WhatsNewPerson
                capture={person.capture}
                text={person.text}
                pic={person.pic}
                alt={person.alt}
                key={index}
                />
            })}
            </div>
                <img src="bgPics/whatsNew/centerPic.png" alt="centralPic" className="centralPic"/>
            <div>{whatsNewArray.slice(2,4).map((person, index) => {
                return <WhatsNewPerson
                    capture={person.capture}
                    text={person.text}
                    pic={person.pic}
                    alt={person.alt}
                    key={index}
                />
            })}
            </div>
        </div>
        <a href="# " className="commonLink">לכתבה</a>
    </div>
};
interface WhatsNewPersonProps {
    pic: string,
    capture: string,
    text: string,
    alt: string,
    key: number
}
    const WhatsNewPerson = (props: WhatsNewPersonProps) => {
        return <div>
            <img src={`bgPics/whatsNew/${ props.pic }`} alt={props.alt}/>
            <h5 className="picCapture">{props.capture}</h5>
            <p className="picText">{props.text}</p>
        </div>
    };
    const whatsNewArray =  [
        {
            pic: "firstPic.png" ,
            capture: "שלמה ארצי היה אצלנו באולפן היה מחשמל!",
            text: "צפו בראיון המלא של והראיון המלאה בעמוד הבאאיתו",
            alt: "First Picture"
        },
        {
            pic: "secondPic.png" ,
            capture: "שלמה ארצי היה אצלנו באולפן היה מחשמל!",
            text: "צפו בראיון המלא של והראיון המלאה בעמוד הבאאיתו",
            alt: "Second Picture"
        },
        {
            pic: "thirdPic.png" ,
            capture: "שלמה ארצי היה אצלנו באולפן היה מחשמל!",
            text: "צפו בראיון המלא של והראיון המלאה בעמוד הבאאיתו",
            alt: "Third Picture"
        },
        {
            pic: "fourthPic.png" ,
            capture: "שלמה ארצי היה אצלנו באולפן היה מחשמל!",
            text: "צפו בראיון המלא של והראיון המלאה בעמוד הבאאיתו",
            alt: "Fourth Picture"
        }
    ];