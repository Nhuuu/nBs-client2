import React, {Component} from 'react'
import SERVER_URL from './constants/server'

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
      img: "",
      drinks: []
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

  rerender = () => {
    fetch(SERVER_URL+'/drinks')
    .then(response => {
      return response.json() 
    })
    .then(json => {
      // console.log(json)
      this.setState({ drinks: json })
    })
    .catch(err => {
      console.log("Error fetching drinks!", err)
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
			// console.log(json)
      //console.log('RUNNING FETCH', this.props)
			this.rerender()
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
              <label className="db fw4 lh-copy f6">Name</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" id="name" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6">Brand</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="brand"  id="brand" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6">Type</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="type"  id="type" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6">Sub-type</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="subtype"  id="subtype" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6">Price</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="number" name="price"  id="price" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6">Description</label>
              <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="desc"  id="desc" onChange={this.storeInput} />
            </div>
            <div className="mt3">
              <label className="db fw4 lh-copy f6">Image Url</label>
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