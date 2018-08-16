import React, {Component} from 'react'
import Aux from '../../hoc/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios'
import Spinner from '../../components/UI/Spinner/Spinner'

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
            price: 4,
            purchaseable: false,
            purchasing: false,
            loading: false
        }
    }

    updatePurchaseable(ingredients) {
       const sum = Object.keys(ingredients).map(key=> ingredients[key]).reduce((sum, element)=> sum + element,0);
       this.setState({purchaseable: sum > 0});
    }
    addIngredientHandler = (type) => {
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] += 1;
        const updatedTotalPrice = this.state.price + INGREDIENT_PRICES[type];
        this.setState({ingredients:updatedIngredients,
           price: updatedTotalPrice} );
        this.updatePurchaseable(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const updatedIngredients = {...this.state.ingredients};
        if (updatedIngredients[type]) {
            updatedIngredients[type] -= 1;
            const updatedTotalPrice = this.state.price - INGREDIENT_PRICES[type];
            this.setState({ingredients:updatedIngredients,
                price: updatedTotalPrice} );
            this.updatePurchaseable(updatedIngredients);
        }
    }

    purchasingHandler = () => {
        this.setState({purchasing: true})
    }

    cancelPurchasingHandler = () => {
        this.setState({purchasing: false})
    }

    continuePurchasingHandler = () => {
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: "Roberto A Lima",
                address: {
                    street: "Av. Central", 
                    zipCode: "71710010",
                    country: "Brazil"
                }
            },
            deliveryMethod: "fastest"
        }
        this.setState({loading: true});
        axios.post("/order.json", order).then(response => {
            this.setState({loading: false, purchasing: false});
        }).catch(error => {
            this.setState({loading: false});
        })
    }

    render () { 
        const disabledInfo = {...this.state.ingredients}
        let orderSummary = (
            <OrderSummary 
                ingredients={this.state.ingredients}
                price={this.state.price}
                cancel={this.cancelPurchasingHandler}
                continue={this.continuePurchasingHandler}>
            </OrderSummary>
        )
        if (this.state.loading) {
            orderSummary = <Spinner/>
        }
        Object.keys(this.state.ingredients).map(key=> disabledInfo[key] =  this.state.ingredients[key] ===0 );
        return  (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <Modal show={this.state.purchasing} modalClosed={this.cancelPurchasingHandler}>
                   {orderSummary} 
                </Modal>
                <BuildControls 
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabledInfo={disabledInfo}
                    price={this.state.price}
                    purchaseable={this.state.purchaseable}
                    order={this.purchasingHandler}
                    />
            </Aux>
        )
    }
}

export default BugerBuilder;