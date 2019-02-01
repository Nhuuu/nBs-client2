import React, { Component } from 'react';
import SERVER_URL from './constants/server';
import Drink from './Drink';
import ShowDrink from './ShowDrink';
import EditDrinkForm from './EditDrinkForm';
import NewDrinkForm from './NewDrinkForm';
import { Link } from 'react-router-dom';

class DrinkList extends Component {
	constructor(){
	    super()
	    this.state = {
	      drinks: []
	    }
	  }

  componentDidMount(){
    this.getDrinks()
  }
 

  getDrinks = () => {
    fetch(SERVER_URL+'/drinks')
    .then(response => {
      return response.json() 
    })
    .then(json => {
      // console.log(json)
      this.setState({ drinkItem: json })
    })
    .catch(err => {
      console.log("Error fetching drinks!", err)
    })   
  }

	render(){
		const drinkItem = this.state.drinks.map((drink, i) => {
      return <Drink key={i} drink={drink} rerender={this.getDrinks} />
    })
    return (
        <div className="drink-list">
          <h1>Give me Drinks!</h1>
          <div className="drink-item">
	        	{drinkItem} 
          </div>
          <Link to="/newdrink">Add a Drink!</Link>
        </div>
		)
	}
}

export default DrinkList;