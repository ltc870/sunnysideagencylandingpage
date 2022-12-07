import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    return (
        <div className="container">
            <Header />
            <Main />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default App;
