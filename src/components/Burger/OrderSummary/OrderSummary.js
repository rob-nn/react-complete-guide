import React, { Component } from 'react'
import Aux from '../../../hoc/Aux'  
import Button from '../../UI/Button/Button'

class orderSummary extends Component {
    componentWillUpdate() {
        console.log("[OrderSummare] Will update")
    }
    render () {
        const ingredientsSummary = Object.keys(this.props.ingredients).map(ingredient => (
            <li key={ingredient}>
                <span style={{textTransform: 'capitalize'}}>{ingredient}</span>: {this.props.ingredients[ingredient]}
            </li>
        ));
        return (
            <Aux>
                <h3>Your Order</h3>
                <p><strong>Total Price:{this.props.price}</strong></p>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientsSummary}     
                </ul>
                <Button btnType="Danger" clicked={this.props.cancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.continue}>Continue</Button>
            </Aux>
        ) 
    }
}

export default orderSummary;