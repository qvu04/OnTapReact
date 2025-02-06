import React from 'react'

export default function DetailShoe({ detailShoe }) {
    return (
        <div>
            <img className='w-40' src={detailShoe.image} alt="" />
            <h2>{detailShoe.name}</h2>
            <h2>{detailShoe.alias}</h2>
            <h2>{detailShoe.price}$</h2>
            <h2>{detailShoe.description}</h2>
            <h2>{detailShoe.quantity}</h2>
        </div>
    )
}
