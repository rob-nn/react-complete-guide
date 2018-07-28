import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map((key)=> [...Array(props.ingredients[key])].map((_, i)=><BurgerIngredient key={key + i} type={key}/>))
        .reduce((returnArray, element)=> returnArray.concat(element),[]);
        console.log(transformedIngredients);
    if (transformedIngredients.length ===0) {
        transformedIngredients = <p>Please start inserting ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}


export default burger;