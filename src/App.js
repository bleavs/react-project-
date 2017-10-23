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



  handleSubmit = (userData) => {
    let newPeople = this.state.people
    console.log(newPeople)

    var imgUrl = userData.img

    var medUrl = userData.img.replace(/portraits/i, 'portraits/med');
    var thumbUrl = userData.img.replace(/portraits/i, 'portraits/thumb');

    console.log(medUrl)

        const userDataa = {
              gender: userData.gender,
              location: { street: userData.street,
                          city: userData.city,
                          state: userData.state,
                          postcode: userData.postcode },
              name: { title: userData.title,
                    first: userData.firstName,
                    last: userData.lastName},
              picture: {
                large: userData.img,
                medium: userData.img.replace(/portraits/i, 'portraits/med'),
                thumbnail: userData.img.replace(/portraits/i, 'portraits/thumb')
              }
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

  })
}

componentDidMount(){

  fetch("https://randomuser.me/api/?results=20")
    .then(res => res.json())
    .then(json => { this.setState({
      people: json.results
    })
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
