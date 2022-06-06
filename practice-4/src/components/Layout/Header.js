import { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div>
                <img className={classes['main-image']} src={mealsImage} alt='A table full of delicious food' />
            </div>
        </Fragment>
    )
}
