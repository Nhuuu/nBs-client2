import React, {Component} from 'react'
import SERVER_URL from './constants/server';

class NewDrinkForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      name: "",
      brand: "",
      user: "",
      type: "",
      subtype: "",
      price: 0,
      desc: "",
      img: ""
    }
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

  postDrink = (e) => {
    e.preventDefault()
    const user = JSON.stringify(this.props.user);
    this.setState({ user: user.id });
		// console.log(this.state)
		fetch(SERVER_URL+'/drinks/new', {
			method: 'POST',
			body: JSON.stringify(this.state), // data to send to server
			headers: {
				'Content-Type': 'application/json' // let the server know what's coming
			}
		})
		.then(response => response.json())
		.then(json => {
			this.props.rerender()
		})
		.catch(err => {
			console.log('Error posting data!', err)
		})
	}

	render() {
    if(this.props && this.props.user){
      return(
        <div>
          <form onSubmit={this.postDrink}>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="name">Name</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" id="name" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="brand">Brand</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="brand"  id="brand" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="type">Type</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="type"  id="type" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="subtype">Sub-type</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="subtype"  id="subtype" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="price">Price</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="number" name="price"  id="price" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="desc">Description</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="desc"  id="desc" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6" for="img">Image Url</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="img"  id="img" onChange={this.storeInput} />
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

export default NewDrinkForm