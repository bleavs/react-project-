import React from 'react'

import UserGroupSideList from './UserGroupSideList'
import UserGroupListDetail from './UserGroupListDetail'

const GroupList = (props) => {

  console.log(props)
  console.log(props.groups)
  console.log(props.editUserGroups)
  console.log(props.displayUserGroups)

  return (
    <div>

        <UserGroupSideList

          groups={props.groups}
          selectedPerson={props.selectedPerson}

          displayUserGroups={props.displayUserGroups}
          selectedGroup={props.selectedGroup}
          shouldEditGroup={props.shouldEditGroup}

          editUserGroups={props.editUserGroups}
          showGroup={props.showGroup}
          editGroup={props.editGroup}
        />

        { (props.selectedGroup !== null) ?
              <UserGroupListDetail
              groups={props.groups}
              selectedPerson={props.selectedPerson}

              displayUserGroups={props.displayUserGroups}
              selectedGroup={props.selectedGroup}
              shouldEditGroup={props.shouldEditGroup}

              editUserGroups={props.editUserGroups}
              showGroup={props.showGroup}
              editGroup={props.editGroup}
                />
            :

              <div></div> }



      </div>
  )
}

export default GroupList
