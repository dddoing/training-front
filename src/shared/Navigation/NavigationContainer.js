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
    componentDidMount() {
        //
        // const {params} = this.props.match;
        // console.log(this.props.match)
        // this.setState({value:newValue});
        console.log('??')
    }

    //
    onChangeNav(e,value) {
        console.log("{},{}",e.target.innerText)
        this.setState({value});
        console.log(this.state.value)
        this.props.history.push(`/${e.target.innerText}`);

    }
    //
    render() {
        const {value} = this.state;
        return (
            <Box sx={{width: "auto"}}>
                <BottomNavigation showLabels value={value} onChange={(e,v)=>this.onChangeNav(e,v)}>
                    <BottomNavigationAction label="main"/>
                    <BottomNavigationAction label="restaurant"/>
                    <BottomNavigationAction label="cafe"/>
                </BottomNavigation>
            </Box>
        )
    }
}

export default withRouter(NavigationContainer);