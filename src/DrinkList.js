import React, { Component } from 'react';
import SERVER_URL from './constants/server';
import Drink from './Drink';
import ShowDrink from './ShowDrink';
import EditDrinkForm from './EditDrinkForm';
import NewDrinkForm from './NewDrinkForm';

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
    fetch(SERVER_URL)
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

   changeCurrent = (obj) => {
    this.setState({ current: obj })
  }

	render(){
		const drinkItem = this.state.drinks.map((drink, i) => {
      return <Drink key={i} drink={drink} rerender={this.getDrinks} changeCurrent={this.changeCurrent} current={this.state.current} />
    })

    const more = this.state.current._id ? 
      <ShowDrink 
        bounty={this.state.current} 
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
          {form}
        </div>
		)
	}
}

export default DrinkList;