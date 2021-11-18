import React, {Component} from "react";
import {Link} from "react-router-dom";

class MainPage extends Component<any, any>{
    render() {
        return (
            <>
                <ul>
                    <li>
                        <Link to={"/list"}>List</Link>
                    </li>
                    <li>
                        <Link to={"/Temp1"}>Temp1</Link>
                    </li>
                </ul>
            </>
        );
    }
}

export default MainPage;