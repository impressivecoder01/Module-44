import React from 'react';

const ProductForm = () => {
    const handleProductSubmit = e => {
        e.preventDefault()
        // console.log(e.target.value)
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        // console.log(name, price, quantity)
        const newProduct = {
            name: name,
            price: price,
            quantity: quantity
        }
        console.log(newProduct)
    }
    return (
        <div>
            <h1>Add a Product</h1>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name= 'name' placeholder='Product Name' /> <br />
                <input type="text" name= 'price' placeholder='Product Price Name' /> <br />
                <input type="number" name= 'quantity' placeholder='Product Quantity' /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;