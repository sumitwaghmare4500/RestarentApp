import { Fragment } from "react";
import mealsImage from "./meals.jpg"
import classes from './Headers.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header=(props)=>{
    return(
        <Fragment>
        <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
        <img src={mealsImage} alt='a table with full of delicious food!'/>
        </div>
        </Fragment>
    )
}
export default Header