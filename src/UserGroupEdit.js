import React from 'react';

  class UserGroupEdit extends React.Component{

      constructor(props){
        super(props);
        console.log(props)

        this.state = {
         name: this.props.selectedGroup.name,
          description: this.props.selectedGroup.description
        }
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.props.editUserGroups(this.state)
      }

      handleChange = (event) => {
        let name = event.target.name
        this.setState({
          [name]: event.target.value
        }, () => console.log(this.state))
      }

      componentWillReceiveProps(nextProps){

       this.setState({
         name: nextProps.selectedGroup.name,
         description: nextProps.selectedGroup.description

       });
     }


     render(){
      return (
        <div>

          <h6> The user will be able to view and add their groups in their userEdit component? </h6>

            <br/>
          <h6>Edit Group</h6>

          <form onSubmit={this.handleSubmit}>

            <label>
              Name: <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
            </label> <br/>
            <label>
              Description: <input name="description" type="text" value={this.state.description} onChange={this.handleChange}/>
            </label> <br/>


            <input type="submit" value="Submit" /> <br/>
          </form>

                <br/><br/>

          <button onClick={this.props.editGroup}> Show Group </button>

        </div>

      )
    }

  }

export default UserGroupEdit
