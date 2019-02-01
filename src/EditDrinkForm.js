import React, {Component} from 'react';
import SERVER_URL from './constants/server';

class EditDrinkForm extends Component {

	editDrink = () => {
		fetch(SERVER_URL+'/drinks/'+this.props.drink._id, {
			method: "PUT"
		})
		.then(response => {
			let responseJSON = response.status===204 ? {} : response.json()
			return responseJSON
		})
		.then(json => {
			this.props.rerender()
		})
		.catch(err => {
			console.log("Error editing drink", err)			
		})
	}

	render(){
		return 
	}
}


export default EditDrinkForm

