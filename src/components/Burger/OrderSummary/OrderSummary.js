import React from 'react'
import Aux from '../../../hoc/Aux'  
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map(ingredient => (
        <li key={ingredient}>
            <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {props.ingredients[ingredient]}
        </li>
    ));
    return (
        <Aux>
            <h3>Your Order</h3>
            <p><strong>Total Price:{props.price}</strong></p>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}     
            </ul>
            <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.continue}>Continue</Button>
        </Aux>
    ) 
}

export default orderSummary;