import {Component} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {Temp1, Temp2, Sample} from "./pages"

export default class Router extends Component{
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Link to={"/"}>back</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Sample/>}/>
                    <Route path="/temp1" element={<Temp1/>}/>
                    <Route path="/temp2" element={<Temp2/>}/>
                </Routes>
            </BrowserRouter>
        )
    }
}