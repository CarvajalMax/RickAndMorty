import React from "react";
import RickandMortyApp from "../RickandMortyApp";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../components/Home";

const Navegation=() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/" element={<RickandMortyApp />} />
            </Routes>
        </BrowserRouter>
    );
}
export default Navegation;