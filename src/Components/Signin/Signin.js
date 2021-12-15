import React from 'react';
import './Signin.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
        };
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
      }
    
      onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
      }
    
      onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: this.state.signInEmail,
            password: this.state.signInPassword
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user.id) {
              this.props.loadUser(user)
              this.props.onRouteChange('home');
            }
          })
      }

    render() {
        const { onRouteChange } = this.props;
        return (
            <div className='signin-div'>
                <div className='signin-form'>
                    <h1 className='f1 fw6 white'>Sign In</h1>
                    <div className="inputS">
                        <label className='f4 pa1' htmlFor='email'>Email</label>
                        <input onChange={this.onEmailChange} type="email" name='email' id='email' ></input>
                        <label className='f4 pa1' htmlFor='password'>Password</label>
                        <input onChange={this.onPasswordChange} type="password" name='password' id='password' ></input>
                    </div>
                    <div className='submit'>
                        <input onClick={this.onSubmitSignIn} type="submit" className='ph3 white pv2 input-reset ba b--black bg-blue grow pointer f6 dib' value='Sign In' />
                        <p onClick={() => onRouteChange('register')} className='register f4 link dim black db white'>Register</p>
                    </div>
                </div>
            </div>
        );
    }

}

export default Signin;