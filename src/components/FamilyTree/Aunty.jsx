import React from 'react';
import Cousin from './Cousin';

const Aunty = () => {
    return (
        <div>
            <h1>Aunty</h1>
            <section className='flex'>
                <Cousin name={'name one'}></Cousin>
                <Cousin name={'name two'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;