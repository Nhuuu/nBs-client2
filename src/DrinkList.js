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
	      drinks: [],
	      current: {},
	      form: 'new'
	    }
	  }

  componentDidMount(){
    this.getDrinks()
  }

  changeCurrent = (obj) => {
    this.setState({ current: obj })
  }	  

  getDrinks = () => {
    fetch(SERVER_URL+'/drinks')
    .then(response => {
      return response.json() 
    })
    .then(json => {
      console.log(json)
      this.setState({ drinkItem: json })
    })
    .catch(err => {
      console.log("Error fetching drinks!", err)
    })   
  }

	render(){
		const drinkItem = this.state.drinks.map((drink, i) => {
      return <Drink key={i} drink={drink} rerender={this.getDrinks} changeCurrent={this.changeCurrent} current={this.state.current} />
    })

    const more = this.state.current._id ? 
      <ShowDrink 
        drink={this.state.current} 
        key={this.state.current._id} 
        toggleForm={this.toggleForm} 
        /> :
      <h3>What are you in the mood for?</h3>
    const form = this.state.form === 'new' ? 
      <NewDrinkForm 
        user={this.props.user}
        rerender={this.getDrink} 
        /> : 
      <EditDrinkForm 
        current={this.state.current} 
        rerender={this.getDrinks}
        changeCurrent={this.changeCurrent} 
        toggleForm={this.toggleForm}
        />
    return (
        <div className="drink-list">
          <h1>Give me Drinks!</h1>
          <div className="drink-item">
			        	{drinkItem}
			          {/*{more}*/} 
          </div>
          {/*check it*/}
          <Link to="/newdrink">Add a Drink!</Link>
        </div>
		)
	}
}

export default DrinkList;