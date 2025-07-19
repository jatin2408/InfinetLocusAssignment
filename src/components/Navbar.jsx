import React from 'react'
import Logo from './Logo'

const Navbar = ({ setShowCart, setSearchInput, searchInput, rating, setRating }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', alignItems: 'center' }}>
            <Logo />
            <div>
                <input value={searchInput} style={{
                    borderRadius: '10px',
                    width: '335px'
                }} placeholder='Search products' onChange={(e) => setSearchInput(e.target.value)} />
            </div>
            <button style={{
                color: 'white',
                backgroundColor: 'black',
                borderRadius: '5px'
            }}>Login</button>
            <div style={{ display: 'flex' }}>
                Filter By:&nbsp;&nbsp;   <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="All">All</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                </select>
            </div>

            <button style={{
                color: 'white',
                backgroundColor: 'black',
                borderRadius: '5px'
            }} onClick={() => setShowCart(true)}>My Cart</button>
        </div>
    )
}

export default Navbar
