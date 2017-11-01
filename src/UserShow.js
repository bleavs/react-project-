import React from 'react';

const UserShow = (props) => {
  console.log(props)


  return (
    <div>
          <h6> Title: {props.displayUser.title} </h6>
          <h6> First Name: {props.displayUser.first} </h6>
          <h6> Last Name: {props.displayUser.last} </h6>

          <img src={props.displayUser.picture} />

          <h6> Gender: {props.displayUser.gender} </h6>

          <h6> City: {props.displayUser.city} </h6>
          <h6> Postcode: {props.displayUser.postcode} </h6>
          <h6> State: {props.displayUser.state} </h6>
          <h6> Street: {props.displayUser.street} </h6>
          <h6> Password: {props.displayUser.password} </h6>

          <h6>Associated Groups: {props.selectedPersonsGroups} </h6>


          <button onClick={props.editUser}> Edit User</button>

    </div>
  )
}

export default UserShow
