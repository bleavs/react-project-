import React from 'react';

const UserShow = (props) => {

  return (
    <div>
          <h6> Title: {props.displayUser.name.title} </h6>
          <h6> First Name: {props.displayUser.name.first} </h6>
          <h6> Last Name: {props.displayUser.name.last} </h6>

          <img src={props.displayUser.picture.large} />

          <h6> Gender: {props.displayUser.gender} </h6>

          <h6> City: {props.displayUser.location.city} </h6>
          <h6> Postcode: {props.displayUser.location.postcode} </h6>
          <h6> State: {props.displayUser.location.state} </h6>
          <h6> Street: {props.displayUser.location.street} </h6>
          <h6> Password: {props.displayUser.login.password} </h6>


          <button onClick={props.editUser}> Edit User</button>

    </div>
  )
}

export default UserShow
