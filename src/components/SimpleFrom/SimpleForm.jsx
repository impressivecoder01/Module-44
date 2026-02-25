import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value, e.target.email.value)
    }
    return (
        <div>
            <form className='m-7' onSubmit={handleSubmit}>
                <input name='name' placeholder='Your Name' type="text" /><br />
                <input type="email" name="email" placeholder='Your Email' id="" /><br />
                <input type="submit" value={'Submit'} />
            </form>
        </div>
    );
};

export default SimpleForm;