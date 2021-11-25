import React from 'react';
import MainView from "./MainView";
import {Navigation} from "../../shared";

class MainContainer extends React.Component {
    //
    render() {
        return (
            <>
                <Navigation/>
                <MainView/>
            </>
        )
    }
}

export default MainContainer;