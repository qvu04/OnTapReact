import React, { useState } from 'react'
import { listShoe } from './dataShoe'
import DetailShoe from './detailShoe'
import ItemShoe from './ItemShoe'
import ListShoe from './ListShoe';
import CartShoe from './CartShoe';

export default function ExShoe() {
    let [detailShoe, setDetailShoe] = useState([]);
    let [cart, setCart] = useState([]);
    let handleAddToCart = (shoe) => {
        let newCart = [...cart];
        let index = cart.findIndex((item) => {
            return item.id == shoe.id;

        })
        if (index == -1) {
            let newShoe = { ...shoe, total: 1 }
            newCart.push(newShoe);
        } else {
            newCart[index].total += 1;
        }
        setCart(newCart);
    }
    let deleteCart = (idShoe) => {
        console.log('✌️idShoe --->', idShoe);
        let newCart = cart.filter((shoe) => {
            return shoe.id != idShoe
        })
        setCart(newCart);
    }
    return (
        <div>
            <DetailShoe detailShoe={detailShoe} />
            <div className='flex'>
                <ListShoe handleShoe={setDetailShoe} handleAddToCart={handleAddToCart} />
                <CartShoe cart={cart} deleteCart={deleteCart} />
            </div>
        </div>
    )
}
