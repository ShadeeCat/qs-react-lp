import React from 'react';
import "./assets/styles/common.css"


import {Nav, HeaderCarousel} from "./components/header"
import { Programs } from "./components/programs"
import { Hottest } from "./components/hottest"
import { LiveBroadcast } from "./components/liveBroadcast"
import { WhatsNew } from "./components/whatsNew"
import { FooterPics, Footer } from "./components/footer";

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
            <Footer />
        </footer>
    </div>
  );
}

export default App;
