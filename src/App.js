import React from 'react';
import './assets/styles/App.css';
import "./assets/styles/common.css"
// import "react-responsive-carousel/lib/styles/carousel.min.css";


import {Nav, HeaderCarousel} from "./components/header"
import { Programs } from "./components/programs"
import { Hottest } from "./components/hottest"
import { LiveBroadcast } from "./components/liveBroadcast"
import { WhatsNew } from "./components/whatsNew"
import { FooterPics } from "./components/footer";

function App() {
  return (
    <div className="App">
        <header>
            <Nav />
            <HeaderCarousel />
        </header>
        <main>
            <Programs />
            <Hottest />
            <LiveBroadcast />
            <WhatsNew />
        </main>
        <footer>
            <FooterPics />
        </footer>
    </div>
  );
}

export default App;
