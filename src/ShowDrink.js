import React, {Component} from 'react';
import EditDrinkForm from './EditDrinkForm'

class ShowDrink extends Component{
	constructor(){
		super()
		this.state ={
			drink: {}
		}
	}
	componentDidMount(){
		this.setState({ drink: this.props.drink })
	}		

	render(){
		return(
			<div className="show-drink">
				<h2>{this.state.drink.name}</h2>
				<EditDrinkForm drink={this.props.drink} />
			</div>
		)
	}
}

export default ShowDrink