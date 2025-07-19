"use client"
import React, { useEffect, useState } from 'react'

const Cart = ({ cartData, setCartData, setShowCart }) => {
    const [totalPrice, setTotalPrice] = useState(0)
    const IncreseQuantity = (index) => {
        const newCartData = [...cartData]
        newCartData[index].quantity = newCartData[index].quantity + 1
        setCartData(newCartData)
    }
    const DecreseQuantity = (index) => {
        const newCartData = [...cartData]
        
        if (newCartData[index]?.quantity == 1) {
            const updatedCartData = newCartData.filter((_, id) => id != index)
            setCartData(updatedCartData)
        }
        else {
            newCartData[index].quantity = newCartData[index].quantity - 1
            setCartData(newCartData)
        }

    }

    const RemoveItem=(index)=>{
        const newCartData = [...cartData]
        const updatedData=newCartData.filter((_,ind)=>ind!=index)
        setCartData(updatedData)
    }
    useEffect(() => {
        let price = 0
        cartData.forEach((item) => {
            price = price + (item.price * item.quantity)
        })
        setTotalPrice(price.toFixed(2))
    }, [cartData])
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: '#fff',
            width: '30%',
            height: '100%',
            padding: '10px'
        }}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
                <h1>Cart Items</h1>
                <button style={{
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '5px'
                }} onClick={() => setShowCart(false)}>Close</button>
            </div>

            {
                cartData.map((item, index) => <div key={item?.id} style={{
                    borderBottom: '1px solid grey',
                    padding: '20px',
                    gap: '10px'
                }}>
                    <p>{item.title}</p>
                    <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
                        <button style={{
                            color: 'white',
                            backgroundColor: 'black',
                            borderRadius: '5px'
                        }} onClick={() => DecreseQuantity(index)}>-</button>{item.quantity}<button style={{
                            color: 'white',
                            backgroundColor: 'black',
                            borderRadius: '5px'
                        }} onClick={() => IncreseQuantity(index)}>+</button>
                    </div>
                    <p>Price: {item.price*item.quantity} ₹</p>
                    <button style={{
                        color: 'white',
                        backgroundColor: 'black',
                        borderRadius: '5px'
                    }} onClick={()=>RemoveItem(index)}>Remove</button>

                </div>)
            }

            <div style={{ width: '100%' }}>
                <h3>Total price {totalPrice}</h3>
            </div>
        </div>
    )
}

export default Cart
