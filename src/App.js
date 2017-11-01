import React, { Component } from 'react';
// import { Button, Grid } from 'semantic-ui-react'
import logo from './logo.svg';
import  './App.css';

import People from './People.js' //getting json data -- to later save as part of the app's state

import UserListContainer from './UserListContainer'
import GroupListContainer from './GroupListContainer'

class App extends Component {
  constructor(){
    super()

    this.state = {
      people: People,
      selectedPerson: null,
      editPerson: false,
      groups: [],
      selectedGroup: null,
      editGroup: false,
      userGroups: [],
      selectedPersonsGroups: null
    }
  }

  showUser = (event) => {
    console.log(this.state.people[event.target.value])

    this.setState({
      selectedPerson: this.state.people[event.target.value]

    }, () => {
                console.log(this.state.selectedPerson.id)

              //   const userGroupIds = this.state.userGroups.filter((group) => {
              //     return (group.user_id === this.state.selectedPerson.id )
              //   })
              //   console.log(userGroupIds)
              //
              //   const userGroups = userGroupIds.map((group) => {
              //     this.state.groups.getElementById(group.group_id)
              //
              //     //would return an arr. of group objects that user is in
              //   })
              //
              //   console.log(userGroups)
              //
              //   this.setState({
              //     selectedPersonsGroups: userGroups
              //   }, () => console.log(this.state.selectedPersonsGroups))
              // })
    })}


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
    })

      fetch("http://localhost:3000/groups")
  .then(res => res.json())
  .then(json => {
  this.setState({
  groups: json
}, () => console.log(this.state.groups))
  })

    fetch("http://localhost:3000/usergroups")
  .then(res => res.json())
  .then(json => {
  this.setState({
  userGroups: json
}, () => console.log(this.state.userGroups))
  })

}

// getGroupsForUser(){
//   // let userGroups = [{userId: 1, groupId: 2}, {userId: 1, groupId: 6}, {userId: 1, groupId: 3}, {userId: 2, groupId: 3}]
//   console.log(this.state.selectedPerson.id)
//
//   const userGroupIds = this.state.userGroups.filter((group) => {
//     return (group.user_id === this.state.selectedPerson.id )
//   }
//
//
//   //   //would return user and group ids but only for spec user
//   // }
//
//   const userGroups = userGroupIds.map((group) => {
//     this.state.groups.getElementById(group.group_id)
//
//     //would return an arr. of group objects that user is in
//   })
//
//   console.log(userGroups)
//
//   this.setState({
//     selectedPersonsGroups: userGroups
//   })
// }


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
    method: 'PATCH',
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


editGroup = (event) => {
  console.log(event.target.value)
  this.setState({
    editGroup: !(this.state.editGroup)

  })
}

showGroup = (event) => {
  console.log(event.target)
  console.log(this.state.groups[event.target.value])

  this.setState({
    selectedGroup: this.state.groups[event.target.value]

  }, () => console.log(this.state.selectedGroup.id))
}

editUserGroups = (userGroupData) => {
  console.log(userGroupData)
  console.log(this.state.selectedGroup.id)
  let id = this.state.selectedGroup.id

  let newGroup = this.state.groups
  console.log(newGroup)

  const userGroupDataa = {
    name: userGroupData.name,
    description: userGroupData.description
  }

this.setState({
  groups: newGroup.map((group) => {
    if (group === this.state.selectedGroup){
      return (userGroupDataa)
    } else {
      return group
    }

}),
selectedGroup: userGroupDataa

}, () => {
  fetch(`http://localhost:3000/groups/${id}`, {
    headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
    method: 'PATCH',
    body: JSON.stringify({
    name: this.state.selectedGroup.name,
    description: this.state.selectedGroup.description
    })

  }).then(res => res.json()).then(console.log)

  })

}

// <GroupListContainer
//   groups={this.state.groups}
//   selectedPerson={this.state.selectedPerson}
//
//   displayUserGroups={this.state.selectedPerson.groups} ---- this isn't accessible at this pt
//
//   selectedGroup={this.state.selectedGroup}
//   shouldEditGroup={this.state.editGroup}
//
//   editUserGroups={this.editUserGroups}
//   showGroup={this.showGroup}
//   editGroup={this.editGroup}
//
//
// />
// let divLeftStyle = {float: 'left'};
// let divRightStyle = {float: 'right'};


  render() {
    console.log(this.state.people)
    console.log(this.state.selectedPerson)
    return (

      <div className="App">

        <header className="App-header">
          Welcome to Grouper
        </header>

          <div>


            <UserListContainer
              users={this.state.people}
              showUser={this.showUser}
              displayUser={this.state.selectedPerson}
              showEdit={this.state.editPerson}
              editUser={this.editUser}
              handleSubmit={this.handleSubmit}
              selectedPersonsGroups={this.state.selectedPersonsGroups}  />



            <GroupListContainer
              groups={this.state.groups}
              selectedPerson={this.state.selectedPerson}


              selectedGroup={this.state.selectedGroup}

              shouldEditGroup={this.state.editGroup}

              editUserGroups={this.editUserGroups}
              showGroup={this.showGroup}
              editGroup={this.editGroup}


            />
        


          </div>

      </div>
    );
  }

}

export default App;
