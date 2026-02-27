import React, { useState } from 'react';

const ProductForm = ({handleAddProduct}) => {
    const [error, setError] = useState('')
    const handleProductSubmit = e => {
        e.preventDefault()
        // console.log(e.target.value)
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        // console.log(name, price, quantity)
         if(name.length === 0){
            setError('Please Provide a Product Name')
            return
        }
        else if(price.length === 0){
            setError('Please Provide a Price')
            return
        }
        else if(price < 0) {  
            setError('Price can not be negative')
            return
        }
        else{
            setError('')
        }
        const newProduct = {
            name: name,
            price: price,
            quantity: quantity
        }
      
         handleAddProduct(newProduct)
       
    }
    return (
        <div>
            <h1>Add a Product</h1>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name= 'name' placeholder='Product Name' /> <br />
                <input type="number" name= 'price' placeholder='Product Price Name' /> <br />
                <input type="number" name= 'quantity' placeholder='Product Quantity' /> <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color : 'red'}}><small>{error}</small></p>
            
        </div>
    );
};

export default ProductForm;