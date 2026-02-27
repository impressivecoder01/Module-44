import React from 'react';
import Cousin from './Cousin';

const Uncle = () => {
    return (
        <div>
            <h1>Uncle</h1>
            <section className='flex'>
                <Cousin name= 'Rafsan'></Cousin>
                <Cousin name= 'Sojib'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;