import React from 'react'
import classes from './Header.module.css'
import * as en from '../../string/en';
import NavItem from './NavItem/NavItem';
import Nav1 from '../../asset/images/refresh.png';
import Nav2 from '../../asset/images/mic.png';
import Nav3 from '../../asset/images/Pathnav.png';
import Nav4 from '../../asset/images/Rectangle.png';

const Header = ({brandName}) => {
    return (
        <div className={classes.header}>
            <div className={classes.brandLogo}>{brandName}</div>
            <div className = {classes.navItems}>
                <NavItem imgSrc={Nav1} text="refresh" />
                <NavItem imgSrc={Nav2} text="discover" />
                <NavItem imgSrc={Nav3} text="notification" />
                <NavItem imgSrc={Nav4} text="username" />
            </div>
        </div>
    )
}

export default Header;
