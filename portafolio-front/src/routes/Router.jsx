//importaciones de react
import React from "react";

//importacion del enrutador de react
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importacion de paginas para rutas
import Counter from "../pages/example/Counter";
import Home from "../pages/home/Home";

const Router = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="Counter" element={ <Counter /> } />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Router;