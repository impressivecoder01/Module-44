import React, { useContext } from 'react';
import Cousin from './Cousin';
import { AssetContext } from './FamilyTree';

const Uncle = () => {
    const newAsset = useContext(AssetContext)
    console.log(newAsset)
    return (
        <div>
            <h1>Uncle</h1>
            <p>{newAsset}</p>
            <section className='flex'>
                <Cousin name= 'Rafsan'></Cousin>
                <Cousin name= 'Sojib'></Cousin>
            </section>
        </div>
    );
};

export default Uncle;