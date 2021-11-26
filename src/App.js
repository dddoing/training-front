import React from 'react';
import Router from './Router';
import {LoginContainer} from "./pages";
import {Navigation} from "./shared";

class App extends React.Component{
    //
    constructor() {
        super();
        this.state = {
            isLogin: false
        }
        this.isLoginCheck = this.isLoginCheck.bind(this);
    }

    isLoginCheck(isLogin) {
        //
        this.setState({isLogin})
    }

    render() {
        //
        // const {isLogin} = this.state;
        return (
            <>
                {/*{isLogin ? <Router/> : <LoginContainer isLoginCheck={this.isLoginCheck}/>}*/}
                {/*<Navigation/>*/}
                <Router/>
            </>
        );
    }
}

export default App;
