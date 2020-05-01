import React from 'react'
import classes from './NavItem.module.css'

const NavItem = ({imgSrc, text}) => {
    return (
        <div className={classes.navItem}>
            <img src={imgSrc} alt={imgSrc} />
            <div>
            {text}
            </div>
            
        </div>
    )
}

export default NavItem;
