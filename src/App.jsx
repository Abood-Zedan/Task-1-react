import React, { useState } from 'react'

export default function App() {

  const [counter,setCounter] = useState(0);
  const increase = ()=> {
    setCounter(counter+1);
  }

  const product = {
    name: 'iphone 14',
    price: '1200',
    description: 'A premium smartphone whit advanced features.'
  };

  const [show,setShow] = useState('d-none');
  const showProduct = ()=> {
    if(show=='d-none')
      setShow('d-block');
    else
    setShow('d-none');
  }

  return (
    <>
      <h1>counter: {counter}</h1>
      <button onClick={increase} className='bg-danger border border-0 py-2 px-3 rounded-3 d-block'>increase</button>
      <button onClick={showProduct} className='bg-danger border border-0 py-2 px-3 rounded-3 d-block mt-3'>Show Product</button>
      <div className={show}>
        <h1>Product Details</h1>
        <p className='fs-5 text'><span className='fw-bold'>Name:</span> {product.name}</p>
        <p className='fs-5 text'><span className='fw-bold'>Price:</span> ${product.price}</p>
        <p className='fs-5 text'><span className='fw-bold'>Description:</span> {product.description}</p>
      </div>
    </>
  )
}
