import React, { useState } from 'react';

const ControlledField = () => {
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitted')
    }
    const handlePasswordOnChange = e => {
        console.log(e.target.value)
    }
    return (
        <div>
            <h1 >This is controlled field</h1>
            <form onSubmit={handleSubmit} action="">
                <input type="email" name="name" placeholder='email' required id="" />
                <br />
                <input type="password" name="password" placeholder='password' onChange={handlePasswordOnChange} defaultValue={password} required id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ControlledField;