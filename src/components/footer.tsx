import React from "react";

import "../assets/styles/footer.css"

export const Footer = () => {
    return <footer className="footerLi">
        <div className="yellowBlock">
            <a href="# ">מה חדש</a>
            <a href="# ">אפליקציות</a>
            <a href="# ">אודות</a>
            <a href="# ">דף הבית</a>
        </div>
        <div>
            <a href="# ">שם התכנית</a>
            <div>
                <a href="# ">שם התכנית</a>
                <a href="# ">שם התכנית</a>
                <a href="# ">שם התכנית</a>
                <a href="# ">שם התכנית</a>
                <a href="# ">שם התכנית</a>
            </div>
        </div>
        <div>
            <a href="# ">צור קשר</a>
            <a href="# ">TV פרסום ברדיו</a>
            <a href="# ">FM 100</a>
            <a href="# ">FM 100</a>
        </div>
    </footer>
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
    return <img
        src={`bgPics/footerPics/${props.pic }`}
        alt={props.alt}
        className={props.class}
    />
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
