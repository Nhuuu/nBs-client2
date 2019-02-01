import React, {Component} from 'react'
import SERVER_URL from './constants/server'
import './App.css'

class Drink extends Component {

	deleteDrink = () => {
		fetch(SERVER_URL+'/'+this.props.drink._id, {
			method: "DELETE"
		})
		.then(response => {
			let responseJSON = response.status===204 ? {} : response.json()
			return responseJSON
		})
		.then(json => {
			this.props.rerender()
		})
		.catch(err => {
			console.log("Error deleting drink", err)			
		})
	}

	render(){
    console.log(this.props)
		return (
			<div className="drink">
				<h3>{this.props.drink.name.toUpperCase()} - {this.props.drink.brand.toUpperCase()}</h3>
				<button className="delete-btn" onClick={this.deleteDrink}>Delete</button>
			</div>
		)
	}
}


export default Drink