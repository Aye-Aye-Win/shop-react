import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Loading from '../components/Loader/Loading';
import { useStateContext } from '../context/StateContext'

const Products = () => {
    const {state: {products, cart} } = useStateContext();
    console.log(cart);
  return (
    <div className='flex flex-wrap gap-10 justify-center mt-20'>
      {products.length > 0 ? products?.map(product => <Card key={product.id} product={product} />): <Loading /> }
    </div>
  )
}

export default Products
