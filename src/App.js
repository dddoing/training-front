import React from 'react';
import Router from "./Router";

class App extends React.Component{
    //
    constructor() {
        super();

        sessionStorage.removeItem("loginInfo");
    }

    //
    render() {
        //
        return (
            <>
                <Router/>
            </>
        );
    }
}

export default App;
