import React from 'react';
import Router from './Router';

class App extends React.Component{
    //
    constructor() {
        super();
    }

    render() {
        //
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
