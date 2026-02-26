import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted', email)
        
    }
    const [email, setEmail] = useState('')
    const handleEmailOnChange = e => {
        // e.preventDefault()
        setEmail(e.target.value)
        console.log(email)
        
    }

    const handlePasswordOnChange = e => {
        // e.preventDefault()
        // console.log(e.target.value)
        setPassword(e.target.value)
        if(password.length < 6) {
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('')
        }
    }
    return (
        <div>
            <h1 >This is controlled field</h1>
            <form onSubmit={handleSubmit}  action="">
                <input type="text" />
                <input onChange={handleEmailOnChange} defaultValue={email} type="email" name="email" placeholder='email' required id="name" />
                <br />
                <input type="password" name="password" placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required id="password" /><br />
                <input type="submit" value="Submit" />
            </form>
            <p><small style={{color: 'red'}}>{error}</small></p>
        </div>
    );
};

export default ControlledField;