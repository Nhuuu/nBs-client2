import React, {Component} from 'react'
import SERVER_URL from './constants/server';

class NewDrinkForm extends Component {
	render(){
    const user = JSON.stringify(this.props.user)
		return (
      <div>
        <form action={`${SERVER_URL}drinks/new`} method="POST">
          <div class="mt3">
            <label class="db fw4 lh-copy f6" for="name">Name</label>
            <input class="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name"  id="name" />
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
          <input type="hidden" value={user.id} />
          <div class="mt3"><input class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Add a Drink" /></div>
        </form>
      </div>
    )
	}
}

export default NewDrinkForm