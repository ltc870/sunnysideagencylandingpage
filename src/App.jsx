import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <Header />
            <Main />
            <Testimonials />
            <Gallery />
            <Footer />
        </div>
    );
};

export default App;
