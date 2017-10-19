import React from 'react'


import UserSideList from './UserSideList'
import UserListDetail from './UserListDetail'

const UserList = (props) => {
  console.log(props)
  console.log(props.users)
  console.log(props.users[0].gender)

  console.log(props.displayUser)

  return (
    <div>
        <UserSideList users={props.users} showUser={props.showUser} displayUser={props.displayUser} showEdit={props.showEdit} editUser={props.editUser} handleSubmit={props.handleSubmit}/>

        {(props.displayUser !== null) ?
            <UserListDetail users={props.users} showUser={props.showUser} displayUser={props.displayUser} showEdit={props.showEdit} editUser={props.editUser} handleSubmit={props.handleSubmit}/>
            :
            <div></div>}




      </div>
  )
}

export default UserList
