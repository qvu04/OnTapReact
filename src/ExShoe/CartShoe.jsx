import { render } from '@testing-library/react'
import React from 'react'

export default function CartShoe({ cart, deleteCart }) {
    let renderCart = () => {
        return cart.map((item, index) => {
            return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><img className='w-20' src={item.image} alt="" /></td>
                <td>
                    {item.total}
                </td>
                <td>
                    <button onClick={() => {
                        deleteCart(item.id)

                    }} className='bg-red-500 hover:bg-red-900 text-white text-xl p-2 rounded'>Delete</button>
                </td>
            </tr>
        })
    }


    return (
        <div className='flex-grow p-5 ml-5'>
            <table className='w-full text-xl'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{renderCart()}</tbody>
                {cart.length == 0 && <p className='text-red-500 font-bold'>No item in cart</p>}
            </table>
        </div>
    )
}
