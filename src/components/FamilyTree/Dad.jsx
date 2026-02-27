import React from 'react';
import MySelf from './MySelf';
import Brother from './Brother';

const Dad = () => {
    return (
        <div>
            <h1>dad</h1>
            <section className='flex'>
            <MySelf></MySelf>
            <Brother></Brother>

            </section>
            
        </div>
    );
};

export default Dad;