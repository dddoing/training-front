import React, {Component} from 'react'
import {Route} from "react-router-dom";
import {Navigation} from "../Navigation";

class CustomRoute extends React.Component {
    //
    constructor() {
        super();
    }

    componentDidMount() {
        //

    }

    render() {
        //
        const {...rest} = this.props;
        return (
            <>
                <Navigation/>
                <Route {...rest}
                    render={
                        (props) =>
                            <Component {...props}/>
                    }
                />
            </>
        )
    }
}

export default CustomRoute