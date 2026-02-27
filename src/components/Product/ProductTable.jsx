import React from 'react';

const ProductTable = ({products}) => {
    return (
        <div>
            <p>Products: {products.length}</p>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => <tr product={product} key={index}>
                        <td>{index +1}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td></td>
                    </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;