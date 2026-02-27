import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';
import './familyTree.css' 
export const AssetContext = createContext('')
export const MoneyContext = createContext('')
const FamilyTree = () => {
    const asset = 'diamond'
    const newAsset = 'Gold'
   const [money, setMoney] = useState(0)
    return (
        <div className='family-tree'>
            <h1>Family Tree</h1>
            <p>Total MOney: {money}</p>
            <MoneyContext value = {[money,setMoney]}>
                <AssetContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;