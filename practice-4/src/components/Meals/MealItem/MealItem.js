import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'

export default function MealItem(props) {
    return (
        <li>
            <div className={classes.meal}>
                <div><h3>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}> {`$${props.price}`}</div>
                </div>
                <div>
                    <MealItemForm />
                </div>
            </div>
        </li>
    )
}
