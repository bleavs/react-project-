import React from 'react'

import UserEdit from './UserEdit'
import UserShow from './UserShow'

class UserListDetail extends React.Component{

  render(){
  

    return (

      <div>

      { (this.props.showEdit === false) ?

            <UserShow
            users={this.props.users}
            showUser={this.props.showUser}
            displayUser={this.props.displayUser}
            showEdit={this.props.showEdit}
            editUser={this.props.editUser}
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
