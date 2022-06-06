import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

export default function MealItem(props) {
    const cartCtx = useContext(CartContext)
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        })
    }
    return (
        <li>
            <div className={classes.meal}>
                <div><h3>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}> {`$${props.price}`}</div>
                </div>
                <div>
                    <MealItemForm onAddToCart={addToCartHandler} />
                </div>
            </div>
        </li>
    )
}
