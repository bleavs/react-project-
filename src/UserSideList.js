import React from 'react'

const UserSideList = (props) => {

  console.log(props)
  console.log(props.users.map((user, index) => {
    return (user.last) }))

  const divStyle = {float: 'right'};
  const buttonStyle = {display: 'block'};

  // showUser = (e) => {
  //   e.preventDefault()
  //   console.log(key)
  // }

  const usernames = props.users.map((user, index) => {

      return ( <button
        style={buttonStyle}
        type='button'
        user={user}
        key={index}
        value={index}
        onClick={props.showUser}>

          {user.first} {user.last}
          </button>
        )}
      )


    return (
    <div style={divStyle}>
      <h6>View Members of Grouper</h6>

      {usernames}
    </div>

    )


  }


export default UserSideList
