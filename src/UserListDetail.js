import React from 'react'

import UserEdit from './UserEdit'
import UserShow from './UserShow'

class UserListDetail extends React.Component{

  render(){


    return (

      <div style={{float: 'right'}}>

      { (this.props.showEdit === false) ?

            <UserShow
            users={this.props.users}
            showUser={this.props.showUser}
            displayUser={this.props.displayUser}
            showEdit={this.props.showEdit}
            editUser={this.props.editUser}
            selectedPersonsGroups={this.props.selectedPersonsGroups}
            handleSubmit={this.props.handleSubmit} />
             :

              <UserEdit
                  users={this.props.users}
                  showUser={this.props.showUser}
                  displayUser={this.props.displayUser}
                  showEdit={this.props.showEdit}
                  editUser={this.props.editUser}
                  handleSubmit={this.props.handleSubmit} />
            }

            </div>
        )
  }

}

export default UserListDetail
