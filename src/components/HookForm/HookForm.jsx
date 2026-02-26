import React from 'react';
import useInputField from '../Hooks/UseInputField';

const HookForm = () => {
    const [name, nameOnChange] = useInputField('')
    const [email, emailOnChange] = useInputField('')
    const handleSubmit = e => {
        e.preventDefault()
        console.log(name,email)
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input defaultValue={name} onChange={nameOnChange} type="text" /><br /><br />
                <input onChange={emailOnChange} defaultValue={email} type="email" name="email" placeholder='email' id="" /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;