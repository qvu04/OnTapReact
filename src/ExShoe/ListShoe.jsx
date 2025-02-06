import React from 'react'
import { listShoe } from './dataShoe';
import ItemShoe from './ItemShoe';
import { render } from '@testing-library/react';

export default function ListShoe({ handleShoe, handleAddToCart }) {
    let renderListShoe = () => {
        return listShoe.map((shoe, index) => {
            return <ItemShoe key={index} shoe={shoe} handleShoe={handleShoe} handleAddToCart={handleAddToCart} />
        })

    }
    return (
        <div className='grid grid-cols-4 gap-5'>
            {renderListShoe()}
        </div>
    )
}
