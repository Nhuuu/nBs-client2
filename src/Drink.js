import React, {Component} from 'react'
import SERVER_URL from './constants/server'

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
    
		const more = (<button onClick={() => this.props.changeCurrent(this.props.drink)}>More</button>)
		const less = (<button onClick={() => this.props.changeCurrent({})}>Less</button>)
		let button = this.props.current === this.props.drink ? less : more
		return (
			<div className="drink">
				<h3>{this.props.drink.name}</h3>
				{button}
				<button onClick={this.deleteDrink}>Delete</button>
			</div>
		)
	}
}


export default Drink