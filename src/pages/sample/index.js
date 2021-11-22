import {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sample extends Component{
    //
    render() {
        return (
            <>
                <Link to={"/temp1"}>temp1</Link>
                <Link to={"/temp2"}>temp2</Link>
            </>
        )
    }
}