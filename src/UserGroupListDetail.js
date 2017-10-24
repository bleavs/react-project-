import React from 'react'

import UserGroupEdit from './UserGroupEdit'
import UserGroupShow from './UserGroupShow'

class UserGroupListDetail extends React.Component{

  render(){


    return (

      <div>

      { (this.props.shouldEditGroup === false) ?

            <UserGroupShow
              groups={this.props.groups}
              selectedPerson={this.props.selectedPerson}

              displayUserGroups={this.props.displayUserGroups}
              selectedGroup={this.props.selectedGroup}
              shouldEditGroup={this.props.shouldEditGroup}

              editUserGroups={this.props.editUserGroups}
              showGroup={this.props.showGroup}
              editGroup={this.props.editGroup}

           />
             :

              <UserGroupEdit
                groups={this.props.groups}
                selectedPerson={this.props.selectedPerson}

                displayUserGroups={this.props.displayUserGroups}
                selectedGroup={this.props.selectedGroup}
                shouldEditGroup={this.props.shouldEditGroup}

                editUserGroups={this.props.editUserGroups}
                showGroup={this.props.showGroup}
                editGroup={this.props.editGroup}

               />
            }

            </div>
        )
  }

}

export default UserGroupListDetail
