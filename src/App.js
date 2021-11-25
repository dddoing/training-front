import React from 'react';
import Router from './Router';
import {LoginContainer} from "./pages";

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
                <Router/>
            </>
        );
    }
}

export default App;
