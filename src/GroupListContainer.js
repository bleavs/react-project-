import React from 'react'

import GroupList from './GroupList'

const GroupListContainer = (props) => {
  console.log(props)
  console.log(props.groups)

  console.log(props.displayUserGroups)
  console.log(props.editUserGroups)

  return (
    <div>

      <GroupList
        groups={props.groups}
        selectedPerson={props.selectedPerson}

        displayUserGroups={props.displayUserGroups}
        selectedGroup={props.selectedGroup}
        shouldEditGroup={props.shouldEditGroup}

        editUserGroups={props.editUserGroups}
        showGroup={props.showGroup}
        editGroup={props.editGroup}

        />

    </div> )}

export default GroupListContainer
