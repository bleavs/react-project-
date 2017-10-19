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

    })
  }

  editUser = (event) => {
    console.log(event.target.value)

    this.setState({
      editPerson: !(this.state.editPerson)

    })
  }

  handleSubmit = (userData) => {
    let newPeople = this.state.people

    this.setState({
      people: newPeople.map((user) => {
        if (user === this.state.selectedPerson){
          return (userData)
        } else {
          return user
        }

    })

  })
}

// //for submitting form data
//
//   submitForm = (formData) => {
//     newPeople = this.state.people
//
//     this.setState({
//       people: newPeople.map((user) => {
//         if(user === userData.selectedPerson) {
//         return userData.selectedPerson
//         }
//         else {
//           return user
//         }
//       }
//     )
//   // })



  render() {
    console.log(this.state.people)
    console.log(this.state.selectedPerson)
    return (

      <div className="App">

        <header className="App-header">
          Random User Stuff
        </header>

          <div>
            <UserListContainer users={this.state.people} showUser={this.showUser} displayUser={this.state.selectedPerson} showEdit={this.state.editPerson} editUser={this.editUser} handleSubmit={this.handleSubmit}  />
          </div>

      </div>
    );
  }

}

export default App;
