import React from "react";

import "../assets/styles/footer.css"

export const Footer = () => {

};

export const FooterPics = (props: footerPicsProps) => {
    return <div className="gridPics">
        {whatsNewArray.map((personPic, index) => {
            return <FooterPic
                pic={personPic.pic}
                alt={personPic.alt}
                class={personPic.class}
                key={index}
            />
        })}
    </div>
};
const FooterPic = (props: footerPicsProps) => {
    return <img src={`bgPics/footerPics/${ props.pic }`} alt={props.alt} className={props.class}/>
};
interface footerPicsProps {
    pic: string,
    alt: string,
    class: string
}
const whatsNewArray =  [
    {
        pic: "1Pic.png" ,
        alt: "First Picture",
        class: "pic1"
    },
    {
        pic: "2Pic.png" ,
        alt: "Second Picture",
        class: "pic2"
    },
    {
        pic: "3Pic.png" ,
        alt: "Third Picture",
        class: "pic3"
    },
    {
        pic: "4Pic.png" ,
        alt: "Fourth Picture",
        class: "pic4"
    },
    {
        pic: "5Pic.png" ,
        alt: "Fourth Picture",
        class: "pic5"
    },
    {
        pic: "6Pic.png" ,
        alt: "Fourth Picture",
        class: "pic6"
    },
    {
        pic: "7Pic.png" ,
        alt: "Fourth Picture",
        class: "pic7"
    },
    {
        pic: "8Pic.png" ,
        alt: "Fourth Picture",
        class: "pic8"
    }
];
