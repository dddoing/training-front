import React, {Component} from 'react'
import {Redirect, Route} from "react-router-dom";
import {Navigation} from "../Navigation";

class CustomRoute extends React.Component {
    //
    constructor() {
        super();
    }

    render() {
        //
        const {...rest} = this.props;
        return (
            <>
                <Route {...rest} render={(props) =>(<Component {...props}/>)}/>
            </>
        )
    }
}

export default CustomRoute