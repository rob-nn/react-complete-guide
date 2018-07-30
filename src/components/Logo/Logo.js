import React from 'react'
import classes from './Logo.css'
import logoImg from '../../assets/burger-logo.png'

const logo = () => (
    <div className={classes.Logo}>
        <img src={logoImg} alt="Burger"/>
    </div>
)

export default logo;