import React from 'react'
import {SiShopify} from "react-icons/si"
import {FaSearch, FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
    const {search, setSearch, state: {cart}} = useStateContext();
    
  return (
    <nav className='container mx-auto fixed top-0 left-0 right-0 flex items-center justify-between bg-white shadow-md px-5 py-2 mb-4'>
        <Link to="/">
        <div className="flex items-center  gap-2 cursor-pointer">
            <SiShopify className='text-4xl text-secondary'/>
            <h1 className='uppercase text-xl font-semibold text-header'>my shop</h1>
        </div>
        </Link>
        <div className="flex items-center gap-3">
        <Link to="/cart">
            <div className="flex items-center gap-2 bg-secondary hover:bg-sky-800 text-white px-4 py-2 rounded">
                <FaShoppingCart />
                <small>{cart.length}</small>
            </div>
        </Link>
            <div className="flex items-center gap-2 border-2 rounded px-3 py-2">
                <FaSearch />
                <input value={search} onChange={e => setSearch(e.target.value)} type="text" className='outline-none bg-transparent' placeholder='Search...' />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
