import React from 'react'
import {withRouter} from "react-router-dom";

class home extends React.Component {
    //
    componentDidMount() {
        //
        console.log('?????')
    }

    //
    render() {
        return (
            <>
                <div>Home</div>
            </>
        )
    }
}

export default withRouter(home);