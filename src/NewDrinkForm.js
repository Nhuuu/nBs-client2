import React, {Component} from 'react'

class NewDrinkForm extends Component {
	render(){
		return (
      <div>
        <form action="/drinkgs" method="POST">
          <legend class="ph0 mh0 fw6 clip">Sign Up</legend>
          <div class="mt3">
            <label class="db fw4 lh-copy f6" for="name">Name:</label>
            <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name"  id="name" />
          </div>
          <div class="mt3">
            <label class="db fw4 lh-copy f6" for="brand">Brand</label>
            <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="brand"  id="brand" />
          </div>
          <div class="mt3">
            <label class="db fw4 lh-copy f6" for="brand">Brand</label>
            <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="brand"  id="brand" />
          </div>
          <div class="mt3">
            <label class="db fw4 lh-copy f6" for="type">Type</label>
            <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="type"  id="type" />
          </div>
          <div class="mt3">
            <label class="db fw4 lh-copy f6" for="subtype">Sub-type</label>
            <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="subtype"  id="subtype" />
          </div>
          <div class="mt3">
            <label class="db fw4 lh-copy f6" for="price">Price</label>
            <input class="pa2 input-reset ba bg-transparent w-100 measure" type="number" name="price"  id="price" />
          </div>
          <input type="hidden" value={this.props.user.id} />
        </form>
      </div>
    )
	}
}

export default NewDrinkForm