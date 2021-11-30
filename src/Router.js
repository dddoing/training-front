import React, {Component, Suspense, lazy} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Login from "./pages/Login";
import {Home} from "./pages";

//
const Restaurant = lazy(() => import('Restaurant/Restaurant'));

export default class Router extends Component {
    constructor(props) {
        super(props);

        // state setting
        this.state = {
            loginInfo: sessionStorage.getItem("loginInfo")
        };

        console.log("sessionStorage.get(\"loginInfo\") : " + sessionStorage.getItem("loginInfo"))
    }



    render() {
        const routeList = () => {
            // 라우트 배열
            let routeArray = [
                <Route key="/" path="/" component={Login}/>,
                <Route key="root" component={()=><Redirect to='/'/>} />,
                <Route key="/main" path="/main" exact component={Home}/>
            ];

            // 로그인 정보 세션에서 추출
            const loginInfo = sessionStorage.getItem("loginInfo");

            // 로그인 정보가 있으면 수행
            if(loginInfo != null) {

                routeArray.push(<Route key="/restaurant" path="/restaurant" exact component={Restaurant}/>);
            }

            //
            return (
                <Suspense fallback='Loading Button'>
                    <BrowserRouter>
                        <Switch>
                            {routeArray}
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            );
        }

        //
        return (
            <>
                {/*progressbar component*/}
                <Suspense fallback='Loading Button'>
                    <BrowserRouter>
                        <Switch>
                            <Route path="/" exact component={Login}/>
                            <Route path="/main" exact component={Home}/>
                            <Route path="/restaurant" exact component={Restaurant}/>
                            <Route component={()=><Redirect to='/'/>} />
                        </Switch>
                    </BrowserRouter>
                </Suspense>
            </>
        )
    }
}
