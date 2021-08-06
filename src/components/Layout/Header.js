import React,{Fragment} from 'react';
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
return <Fragment>
    <head className={classes.header}>
    Delicious 
    <HeaderCartButton/>
    </head>
    <div className={classes['main-image']}> 
    <img src={mealsImage} alt="A table full of delicious meals" />  
    </div>
</Fragment>
}
export default Header;