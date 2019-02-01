import React, {Component} from 'react'

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
			</div>
		)
	}
}

export default ShowDrink