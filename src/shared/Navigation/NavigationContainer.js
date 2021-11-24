import React from 'react';
import {BottomNavigation, BottomNavigationAction, Box} from "@material-ui/core";
import {withRouter} from "react-router-dom";

class NavigationContainer extends React.Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            value:0
        }

    }
    //
    onChangeNav(newValue) {
        const {history,location,match} = this.props
        this.setState({value:newValue});
        console.log(history,location,match)

    }
    //
    render() {
        const {value} = this.state;
        return (
            <Box sx={{width: "auto"}}>
                <BottomNavigation showLabels value={value} onChange={(e,v)=>this.onChangeNav(v)}>
                    <BottomNavigationAction label="main"/>
                    <BottomNavigationAction label="restaurant"/>
                    <BottomNavigationAction label="cafe"/>
                </BottomNavigation>
            </Box>
        )
    }
}

export default (NavigationContainer);