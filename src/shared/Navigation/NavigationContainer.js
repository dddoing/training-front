import React from 'react';
import {BottomNavigation, BottomNavigationAction, Box} from "@material-ui/core";
import {withRouter} from "react-router-dom";
import menuList from '/src/data/menuList.json'

class NavigationContainer extends React.Component {
    //
    constructor(props) {
        super(props);
        this.state = {
            value:0,
            myMenus: []
        }
        this.makeMenuItems = this.makeMenuItems.bind(this);
        console.log('navigation constructor')
    }
    componentDidMount() {
        //
        console.log('navigation componentDidMount')
        const id = sessionStorage.getItem("pass");
        this.makeMenuItems(id);
    }

    makeMenuItems(id) {
        // const {myMenus} = this.state;
        const myMenus = [...menuList[id].menu]
        this.setState({myMenus});
        // console.log(myMenus[0] ?? 1)
    }


    //
    onChangeNav(e,value) {
        this.setState({value});
        this.props.history.push(`/${e.target.innerText}`);

    }
    //
    render() {
        const {value,myMenus} = this.state;
        // console.log(myMenus);
        return (
            <>
            <Box sx={{width: "auto"}}>
                <BottomNavigation showLabels value={value} onChange={(e,v)=>this.onChangeNav(e,v)}>
                    {myMenus.length && myMenus.map((menu)=>{
                        return <BottomNavigationAction label={menu.menuName} key={menu.menuName}/>
                    })}
                </BottomNavigation>
            </Box>
            </>
        )
    }
}

export default withRouter(NavigationContainer);