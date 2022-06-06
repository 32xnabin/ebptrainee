import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'

export default function Cart(props) {
    const cartCtx = useContext(CartContext)
    const hasItems = cartCtx.items.length > 0
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 })
    }
    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id)
    }
    const cartItems = (<ul className={classes['cart-items']}>
        {
            cartCtx.items.map((item) => <CartItem key={item.id} {...item} onAdd={cartItemAddHandler.bind(null, item)} onRemove={cartItemRemoveHandler.bind(null, item.id)}></CartItem>)
        }
    </ul>)
    return (
        < Modal onClose={props.onClose}>
            <div>
                {cartItems}
            </div>
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes['button']}>Order</button>}
            </div>
        </Modal >
    )
}
