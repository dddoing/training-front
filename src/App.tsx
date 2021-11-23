import React, { Component } from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages";
import RestaurantListPage from "./pages/list";
import CafeListPage from "./pages/cafe/list";
import {List} from "@material-ui/core";
import Restaurant from "restaurant/App";

export default class App extends Component<any, any>{
    render() {


        return (
            <>
                <div>
                    <BrowserRouter>
                        <List>
                            <dt>
                                <div>
                                    <ul>
                                        <li>
                                            <Link to={"/"}>HOME1</Link>
                                        </li>
                                        <li>
                                            <Link to={"/restaurant"}>맛집</Link>
                                        </li>
                                        <li>
                                            <Link to={"/cafe"}>카페</Link>
                                        </li>
                                    </ul>
                                </div>
                            </dt>
                            <dd>
                                <Routes>
                                    <Route path="/" element={<MainPage/>}/>
                                    <Route path="/restaurant" element={<RestaurantListPage/>} />
                                    <Route path="/cafe" element={<CafeListPage/>} />
                                </Routes>
                            </dd>
                        </List>
                    </BrowserRouter>
                </div>
            </>
        );
    }
}
