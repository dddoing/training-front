import React, {Component, Suspense} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {Temp1, Temp2,Sample} from "./pages"

export default class Router extends Component {

    constructor() {
        super();
    }

    render() {
        //
        const Sample1 = React.lazy(() => import('app2/App'));

        return (
            <>
                <Suspense fallback='Loading Button'>
                    <BrowserRouter>
                        <div>
                            <Link to={"/"}>back</Link>
                        </div>
                        <Routes>
                            <Route path="/" element={
                                <Sample/>
                            }/>
                            <Route path="/app" element={<Sample1/>}/>
                            <Route path="/temp1" element={<Temp1/>}/>
                            <Route path="/temp2" element={<Temp2/>}/>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </>
        )
    }
}