import Image from 'next/image'
import React from 'react'

const ProductDescription = ({ item, setShowItem, setCartData }) => {
    const AddToCart = (item) => {

        setCartData((prev) => {
            const prevCartData = [...prev]
            const itemExist = prevCartData.find((prod) => prod.title === item.title)
            if (itemExist) {
                const newUpdatedCartData = prevCartData.map((cartItem) => {
                    if (cartItem.title === item.title) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 }
                    } else {
                        return cartItem
                    }
                })
                return newUpdatedCartData
            } else {
                const newItem = { ...item, quantity: 1 }
                return [...prevCartData, newItem]
            }
        })
    }
    return (
        <div style={{

            width: '80%',
            height: '80%',

            gap: '45px',
            margin: '5px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
        }}>
            <div>
                <div style={{
                    width: '30%',
                    float:'left'
                }}>
                    <Image src={item?.image} width={100} height={100} alt={item?.title} />
                </div>
            </div>
            <div style={{
                width: '70%'
            }}>
                <h1> {item?.title}</h1>
                <p>{item?.description}</p>
                <p>{item?.category}</p>
                <p>Ratings: {item?.rating?.rate}</p>
                <p>Price: {item?.price} ₹</p>
                <button style={{
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '5px', marginRight: '10px'
                }} onClick={() => AddToCart(item)}>Add to Cart</button>
                <button style={{
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '5px'
                }} onClick={() => setShowItem(false)}>Close</button>
            </div>

        </div>
    )
}

export default ProductDescription
