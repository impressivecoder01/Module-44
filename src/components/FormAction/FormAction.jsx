import React from 'react';

const FormAction = () => {
    const handleFormAction = (e) => {
        console.log(e.get('name'),e.get('email'))
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input name='name' type="text" placeholder='name' /><br />
                <input name='email' type="email" placeholder='email' /><br />
                <input type="submit" value={'submit'} />
            </form>
        </div>
    );
};

export default FormAction;