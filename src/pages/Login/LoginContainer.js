import React from 'react';
import Form from "./Form";
import member from '../../data/member.json'

class LoginContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            id: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.ValidationLogin = this.ValidationLogin.bind(this);

    }
    componentDidMount() {
        console.log(this.props)
        sessionStorage.removeItem('pass')
    }

    handleSubmit(e) {
        //
        e.preventDefault();
        this.ValidationLogin();
    }

    ValidationLogin() {
        //
        const {id, password} = this.state;

        if (member[id] && member[id].password === password) {
            const {history,isLoginCheck} = this.props
            // isLoginCheck(true);
            // console.log(history)
            history.push('/main')
            sessionStorage.setItem('pass',id)
        } else {
            alert('Wrong ')
        }

        this.setState({
            id: '',
            password: ''
        })
    }

    onChangeValue(e) {
        //
        const {value, name} = e.target;

        if (name === 'userId') {
            this.setState({id: value});
        } else {
            this.setState({password: value});
        }

    }

    render() {
        //
        const {id, password} = this.state;
        return (
            <Form
                handleSubmit={this.handleSubmit}
                id={id}
                password={password}
                onChangeValue={this.onChangeValue}
            />
        )
    }
}


export default (LoginContainer);