import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log('submitted')
    // }
    const handlePasswordOnChange = e => {
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
            <form  action="">
                <input type="email" name="name" placeholder='email' required id="name" />
                <br />
                <input type="password" name="password" placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required id="password" /><br />
                <input type="submit" value="Submit" />
            </form>
            <p><small style={{color: 'red'}}>{error}</small></p>
        </div>
    );
};

export default ControlledField;