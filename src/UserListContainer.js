import React from 'react'

import UserList from './UserList'

const UserListContainer = (props) => {
  console.log(props.users)
  console.log(props.users[0].first)

  console.log(props.displayUser)

  return (
    <div>

      <UserList
        users={props.users}
        showUser={props.showUser}
        displayUser={props.displayUser}
        showEdit={props.showEdit}
        editUser={props.editUser}
        handleSubmit={props.handleSubmit}  />

    </div> )}

export default UserListContainer
