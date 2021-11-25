import React, {Component, Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Navigation} from "./shared/Navigation";
import {LoginContainer, Main} from "./pages";
import {CustomRoute} from "./shared";

class Router extends Component {

    constructor() {
        super();
    }

    render() {
        //
        // const Restaurant = React.lazy(() => import('App2/Restaurant'));
        const Restaurant = React.lazy(() => import('App2/App'));
        const Cafe = React.lazy(() => import('Cafe/Cafe'));

        return (
            <>
                <Suspense fallback='Loading Button'>
                    <BrowserRouter>
                        <Switch>
                            <>
                                <Route path="/" exact component={LoginContainer}/>
                                <CustomRoute path="/main" exact component={Main}/>
                                <CustomRoute path="/restaurant" exact component={Restaurant}/>
                                <CustomRoute path="/cafe" exact component={Cafe}/>
                            </>
                            <Route component={() => <Redirect to='/'/>}/>
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            </>
        )
    }
}

export default (Router);