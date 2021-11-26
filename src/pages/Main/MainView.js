import React from 'react';

class MainView extends React.Component{
    //

    render() {
        const a = sessionStorage.getItem('pass');
        return(
            <>
            <div>{`Main : ${a}`}</div>
            </>
        )
    }
}

export default MainView;