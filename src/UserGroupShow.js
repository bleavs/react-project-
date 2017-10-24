import React from 'react';

const UserGroupShow = (props) => {
  console.log(props)


  return (
    <div>

      <h6>Name: {props.selectedGroup.name}</h6>
      <h6>Description: {props.selectedGroup.description}</h6>
        <br />

      <h6> List of associated users: </h6>

      <h6> The user will be able to view and add their groups in their userEdit component? </h6>

      <button onClick={props.editGroup}> Edit Group</button>
    </div>

  )
}

export default UserGroupShow
