import React, { useContext } from 'react';
import { AssetContext, MoneyContext } from './FamilyTree';

const Cousin = ({name}) => {
    const asset = useContext(AssetContext)
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h1>{name}</h1>
            <p>{asset}</p>
            <button onClick={() => setMoney(money + 100)}>Add 100 tk</button>
        </div>
    );
};

export default Cousin;