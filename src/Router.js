import React, {Component, Suspense} from 'react';
import {BrowserRouter, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {Home} from "./pages";
import {Navigation} from "./shared/Navigation";

class Router extends Component {

    constructor() {
        super();
    }

    render() {
        //
        const Restaurant = React.lazy(() => import('app2/App'));

        return (
            <>
                <Suspense fallback='Loading Button'>
                    <BrowserRouter>
                        <Navigation/>
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/restaurant" exact component={Restaurant}/>
                            <Route component={()=><Redirect to='/'/>} />
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            </>
        )
    }
}

export default (Router);