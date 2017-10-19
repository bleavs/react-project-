import React from 'react'

const UserSideList = (props) => {

  console.log(props)
  console.log(props.users[0].name.first)
  console.log(props.users.map((user, index) => {
    return (user.name.last) }))

  const divStyle = {float: 'left'};
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
        
          {user.name.first} {user.name.last}
          </button>
        )}
      )

    return (
    <div style={divStyle}>

      {usernames}
    </div>


    )


  }


export default UserSideList
