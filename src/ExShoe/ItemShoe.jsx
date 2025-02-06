import React from 'react'

export default function ItemShoe({ shoe, handleShoe, handleAddToCart }) {
    return (
        <div className='flex flex-col'>
            <img className='w-40' src={shoe.image} alt="" />
            <h2 className='text-2xl font-bold'>{shoe.name}</h2>
            <h3 className='text-xl'>{shoe.price}$</h3>
            <div>
                <button onClick={() => {
                    handleShoe(shoe);

                }} className='bg-red-500 hover:bg-red-900 text-white text-xl p-2 rounded'>View Detail</button>

                <button onClick={() => {
                    handleAddToCart(shoe);

                }} className='bg-green-500 hover:bg-green-700 text-white text-xl p-2 rounded'>AddToCart</button>
            </div>
        </div>
    )
}
