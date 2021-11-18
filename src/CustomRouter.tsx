import React, {Component} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import ListPage from "./pages/restaurant/list";
import Temp1 from "./pages/restaurant";
import MainPage from "./pages";

class CustomRouter extends Component<any, any> {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to={"/"}>back</Link>
                </div>

                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/list" element={<ListPage/>} />
                    <Route path="/add" element={<Temp1/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default CustomRouter;