import React from 'react'
import {Redirect, Route} from "react-router-dom";
import {Navigation} from "../Navigation";
import menuList from '/src/data/menuList.json'

class CustomRoute extends React.Component {
    //
    constructor() {
        super();
        this.checkMenuAuth = this.checkMenuAuth.bind(this)
        console.log('customRoute constructor')
    }

    checkMenuAuth(path) {
        //
        console.log('customRoute function response');
        const account = sessionStorage.getItem("pass");
        const myMenus = menuList[account] && menuList[account].menu;
        return myMenus.some(menu=>menu.path===path);

    }

    componentDidMount() {
        //
        console.log('customRoute componentMount')
    }

    render() {
        //
        const {rest,path} = this.props;
        const {component : Component} = this.props;
        return (
            <>
                <Navigation/>
                <Route {...rest}
                       render={
                           (props) =>
                              this.checkMenuAuth(path) ? <Component {...props}/> : <Redirect to='/'/>
                       }
                />
            </>
        )
    }
}

export default CustomRoute