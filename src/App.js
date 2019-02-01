import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import SERVER_URL from './constants/server';
import './App.css';
import Footer from './layout/Footer';
import Home from './Home';
import Login from './auth/Login';
import Nav from './layout/Nav';
import Profile from './Profile';
import Signup from './auth/Signup';
import DrinkList from './DrinkList';
import NewDrinkForm from './NewDrinkForm';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null
    }
  }

  componentDidMount = () => {
    // GET USER INFO
    this.getUser();
  }

  getUser = () => {
    // SEE IF THERE'S A TOKEN
    let token = localStorage.getItem('serverToken');

    // IF THERE IS, TRY TO GET USER INFO
    if (token) {
      console.log(`Found token in ls ${token}`);
      axios.post(`${SERVER_URL}/auth/current/user`, {
        // Send a header with the token in it
        headers: {'Authorization': `Bearer ${token}`}
      }) // Axios works like fetch
      .then(response=>{
        console.log('success', response.data.user);
        this.setState({ user: response.data.user });
      })
      .catch(err=>{
        console.log(`Bad News 🐻, Error looking for token ${err}, ${err.response}`);
        this.setState({ user: null })
      })
    } else {
      console.log('No token in ls')
      this.setState({ user: null })
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container">
            <Nav user={this.state.user} updateUser={this.getUser} />
            <Route exact path="/" component={Home} />
            <Route path="/login" component={
              () => (<Login user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/signup" component={
              () => (<Signup user={this.state.user} updateUser={this.getUser} />)
            } />
            <Route path="/profile" component={
              () => (<Profile user={this.state.user} />)
            } />
            <Route path="/drinklist" component={
              () => (<DrinkList user={this.state.user} updateUser={this.getUser} />)
            } /> 
            {/*check this*/}
            <Route path="/newdrink" component={
              () => (<NewDrinkForm user={this.state.user} updateUser={this.getUser} />)
            } />             
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
