import React from 'react';
import './assets/styles/App.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import {Nav, HeaderCarousel} from "./components/header"
import { Programs } from "./components/programs"

function App() {
  return (
    <div className="App">
        <header>
            <Nav />
            <HeaderCarousel />
            <Programs />
        </header>
    </div>
  );
}

export default App;
