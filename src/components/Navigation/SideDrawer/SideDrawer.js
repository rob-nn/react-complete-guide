import React from 'react'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../hoc/Aux'
import Backdrop from '../../UI/Backdrop/Backdrop'
import classes from './SideDrawer.css';


const sideDrawer = (props) => {
    const classesSideDrawer = [classes.SideDrawer, props.show?classes.Open:classes.Close]
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={classesSideDrawer.join(" ")}>
                <div style={{height:'11%'}}>
                    <Logo />
                </div> 
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    )
}

export default sideDrawer