import React, {Component} from 'react';
import SERVER_URL from './constants/server';

class EditDrinkForm extends Component {

	  constructor(props){
	    super(props)
	    this.state = { drink: this.props.drink, user: this.props.user }
	  }

	// Helper function
	storeInput = e => {
    	// Update state to reflect user input
	    let newState = e.target.value;
	    this.setState({ 
	      user: this.props.user.id,
	      [e.target.name]: newState 
		})
	}

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

	render() {
	    if(this.props && this.props.user){
	      return(
	        <div>
	          <form onSubmit={this.editDrink}>
	            <div className="mt3">
	              <label className="db fw4 lh-copy f6">Name</label>
	              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" id="name" onChange={this.storeInput} value={this.state.drink.name} />
	            </div>
	            <div className="mt3">
	              <label className="db fw4 lh-copy f6">Brand</label>
	              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="brand"  id="brand" onChange={this.storeInput} value={this.state.drink.brand} />
	            </div>
	            <div className="mt3">
	              <label className="db fw4 lh-copy f6">Type</label>
	              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="type"  id="type" onChange={this.storeInput} value={this.state.drink.type} />
	            </div>
	            <div className="mt3">
	              <label className="db fw4 lh-copy f6">Sub-type</label>
	              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="subtype"  id="subtype" onChange={this.storeInput} value={this.state.drink.subtype} />
	            </div>
	            <div className="mt3">
	              <label className="db fw4 lh-copy f6">Price</label>
	              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="number" name="price"  id="price" onChange={this.storeInput} value={this.state.drink.price} />
	            </div>
	            <div className="mt3">
	              <label className="db fw4 lh-copy f6">Description</label>
	              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="desc"  id="desc" onChange={this.storeInput} value={this.state.drink.description} />
	            </div>
	            <div className="mt3">
	              <label className="db fw4 lh-copy f6">Image Url</label>
	              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="img"  id="img" onChange={this.storeInput} value={this.state.drink.image} />
	            </div>
	            <input type="hidden" value={this.props.user.id} />
	            <div className="mt3"><input className="b mb5 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Add a Drink" /></div>
	          </form>
	        </div>
	      )
	    }
	    else {
	      return <p>Love yourself!</p>
	    }
	}
}


export default EditDrinkForm

