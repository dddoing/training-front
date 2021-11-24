import React, {Component, Suspense} from 'react';
import {BrowserRouter, Route, Routes, withRouter} from 'react-router-dom';
import {Home} from "./pages";
import {Navigation} from "./shared/Navigation";

class Router extends Component {

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
                        <Navigation/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/app" element={<Sample1/>}/>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </>
        )
    }
}

export default Router;