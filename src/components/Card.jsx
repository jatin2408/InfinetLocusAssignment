import Image from 'next/image'
import React from 'react'

const Card = ({ item, setCartData }) => {

    const AddToCart = (itemToBeAdded) => {

        setCartData((prev) => {
            const prevCartData = [...prev]
            const ifItemExist = prevCartData.find((prod) => prod.title === itemToBeAdded.title)
            if (ifItemExist) {
                const newUpdatedCartData = prevCartData.map((cartItem) => {
                    if (cartItem.title === itemToBeAdded.title) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 }
                    } else {
                        return cartItem
                    }
                })
                return newUpdatedCartData
            } else {
                const newItem = { ...itemToBeAdded, quantity: 1 }
                return [...prevCartData, newItem]
            }
        })
    }
    return (
        <div style={{
            width: '250px',
            height: '300px',
            padding: '20px',
            gap: '5px',
            margin: '5px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'

        }}>
            <div style={{
                width: '30%'
            }}>
                <Image src={item?.image} width={40} height={60} alt={item?.title} />
            </div>
            <div style={{
                width: '70%'
            }}>
                <h3>{item?.title}</h3>
                <p>{item?.description?.slice(0, 20)}</p>
                <p>Price: {item.price} ₹</p>
                <button style={{
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '5px'
                }} onClick={() => AddToCart(item)}>Add to Cart</button>

            </div>

        </div>
    )
}

export default Card
