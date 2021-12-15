import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user);
                    this.props.onRouteChange('home');
                }
            })
    }

    render() {
         return (
            <div className='signin-div'>
                <div className='signin-form'>
                    <h1 className='f1 fw6 white' id='registerh1'>Register</h1>
                    <div className="inputS">
                        <label className='f4 pa1' htmlFor='name'>Name</label>
                        <input onChange={this.onNameChange} type="text" name='name' id='name' ></input>
                        <label className='f4 pa1' htmlFor='email'>Email</label>
                        <input onChange={this.onEmailChange} type="email" name='email' id='email'></input>
                        <label className='f4 pa1' htmlFor='password'>Password</label>
                        <input onChange={this.onPasswordChange} type="password" name='password' id='password'></input>
                    </div>
                    <div className='submit'>
                        <input onClick={this.onSubmitSignIn} type="submit" className='ph3 white pv2 input-reset ba b--black bg-blue grow pointer f6 dib' value='Register' />
                    </div>
                </div>
            </div>
        );
    }
 
}

export default Register;