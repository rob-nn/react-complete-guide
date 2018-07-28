import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.5,
    meat : 1.5,
    bacon : 1 
}

class BugerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad : 0,
                cheese : 0,
                meat : 0,
                bacon : 0
            },
            totalPrice: 4
        }
    }
    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] += 1;
        const updatedTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({ingredients:updatedIngredients,
           totalPrice: updatedTotalPrice} );
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        if (updatedIngredients[type]) {
            updatedIngredients[type] -= 1;
            const updatedTotalPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
            this.setState({ingredients:updatedIngredients,
                totalPrice: updatedTotalPrice} );
        }
    }

    render () { 
        return  (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}/>
            </Aux>
        )
    }
}

export default BugerBuilder;