import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
    return (
            <div className='signin-div'>
                <div className='signin-form'>
                    <h1 className='f1 fw6 white' id='registerh1' >Register</h1>
                    <div className="inputS">
                        <label className='f4 pa1' htmlFor='name'>Name</label>
                        <input type="text" name='name' id='name' className='hover-bg-transparent'></input>
                        <label className='f4 pa1' htmlFor='email'>Email</label>
                        <input type="email" name='email' id='email' className='hover-bg-transparent'></input>
                        <label className='f4 pa1' htmlFor='password'>Password</label>
                        <input type="password" name='password' id='password' className='hover-bg-transparent'></input>
                    </div>
                    <div className='submit'>
                        <input onClick={() => onRouteChange('home')} type="submit" className='ph3 white pv2 input-reset ba b--black bg-blue grow pointer f6 dib' value='Register' />
                    </div>
                </div>
            </div>
        );
}

export default Register;