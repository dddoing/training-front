import React, {Component} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import RestaurantListPage from "./pages/list";
import CafeListPage from "./pages/cafe/list";
import MainPage from "./pages";

class CustomRouter extends Component<any, any> {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to={"/"}>HOME1</Link>
                </div>

                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/restaurant" element={<RestaurantListPage/>} />
                    <Route path="/cafe" element={<CafeListPage/>} />
                </Routes>
            </BrowserRouter>
        );
    }
}

export default CustomRouter;