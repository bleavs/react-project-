import React, { Component } from 'react';
// import { Button, Grid } from 'semantic-ui-react'
import logo from './logo.svg';
import  './App.css';

import People from './People.js' //getting json data -- to later save as part of the app's state

import UserListContainer from './UserListContainer'

class App extends Component {
  constructor(){
    super()

    this.state = {
      people: People,
      selectedPerson: null,
      editPerson: false
    }
  }

  showUser = (event) => {
    console.log(this.state.people[event.target.value])

    this.setState({
      selectedPerson: this.state.people[event.target.value]

    }, () => console.log(this.state.selectedPerson))
  }

  editUser = (event) => {
    console.log(event.target.value)
    this.setState({
      editPerson: !(this.state.editPerson)

    })
  }

componentDidMount(){
	        fetch("http://localhost:3000/users")
		.then(res => res.json())
		.then(json => {
      this.setState({
	people: json
      })
    }
  )
}


handleSubmit = (userData) => {
  console.log(userData)
  console.log(this.state.selectedPerson.id)
  let id = this.state.selectedPerson.id

  let newPeople = this.state.people
  console.log(newPeople)


      const userDataa = {
            gender: userData.gender,
            street: userData.street,
            city: userData.city,
            state: userData.state,
            postcode: userData.postcode,
            title: userData.title,
            first: userData.first,
            last: userData.last,
            picture: userData.picture,
            password: userData.password
            }


  this.setState({
    people: newPeople.map((user) => {
      if (user === this.state.selectedPerson){
        return (userDataa)
      } else {
        return user
      }

  }),
  selectedPerson: userDataa

}, () => {
  fetch(`http://localhost:3000/users/${id}`, {
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    method: 'POST',
    body: JSON.stringify({
    gender: this.state.selectedPerson.gender,
    street: this.state.selectedPerson.street,
    city: this.state.selectedPerson.city,
    state: this.state.selectedPerson.state,
    postcode: this.state.selectedPerson.postcode,
    title: this.state.selectedPerson.title,
    first: this.state.selectedPerson.first,
    last: this.state.selectedPerson.last,
    picture: this.state.selectedPerson.picture,
    password: this.state.selectedPerson.password

    })
  }).then(res => res.json()).then(console.log)

})

}


  render() {
    console.log(this.state.people)
    console.log(this.state.selectedPerson)
    return (

      <div className="App">

        <header className="App-header">
          Random User Stuff
        </header>

          <div>
            <UserListContainer
              users={this.state.people}
              showUser={this.showUser}
              displayUser={this.state.selectedPerson}
              showEdit={this.state.editPerson}
              editUser={this.editUser}
              handleSubmit={this.handleSubmit}  />
          </div>

      </div>
    );
  }

}

export default App;
