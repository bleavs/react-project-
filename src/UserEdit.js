import React from 'react'

class UserEdit extends React.Component{

  constructor(props){
    super(props);
    console.log(props)

    this.state = {
      title: this.props.displayUser.name.title,
      firstName: this.props.displayUser.name.first,
      lastName: this.props.displayUser.name.last,
      img: this.props.displayUser.picture.large,
      gender: this.props.displayUser.gender,
      city: this.props.displayUser.location.city,
      postcode: this.props.displayUser.location.postcode,
      state: this.props.displayUser.location.state,
      street: this.props.displayUser.location.street
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (event) => {
    let name = event.target.name
    this.setState({
      [name]: event.target.value
    }, () => console.log(this.state))
  }

  componentWillReceiveProps(nextProps){

   this.setState({
     title: nextProps.displayUser.name.title,
     firstName: nextProps.displayUser.name.first,
     lastName: nextProps.displayUser.name.last,
     img: nextProps.displayUser.picture.large,
     gender: nextProps.displayUser.gender,
     city: nextProps.displayUser.location.city,
     postcode: nextProps.displayUser.location.postcode,
     state: nextProps.displayUser.location.state,
     street: nextProps.displayUser.location.street
   });
 }

 render(){
  return (

  <div>

      <h6>Edit User</h6>

      <form onSubmit={this.handleSubmit}>

        <label>
          Title: <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
        </label> <br/>
        <label>
          First Name: <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange}/>
        </label> <br/>
        <label>
          Last Name: <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}/>
        </label> <br/>
        <label>
          Gender: <input name="gender" type="text" value={this.state.gender} onChange={this.handleChange}/>
        </label> <br/>
        <label>
          City: <input name="city" type="text" value={this.state.city} onChange={this.handleChange}/>
        </label> <br/>
        <label>
          Postcode: <input name="postcode" type="text" value={this.state.postcode} onChange={this.handleChange}/>
        </label> <br/>
        <label>
          State: <input name="state" type="text" value={this.state.state} onChange={this.handleChange}/>
        </label> <br/>
        <label>
          Street: <input name="street" type="text" value={this.state.street} onChange={this.handleChange}/>
        </label> <br/>
        <label>
          Img: <input name="img" type="text" value={this.state.img} onChange={this.handleChange}/>
        </label> <br/>

        <input type="submit" value="Submit" /> <br/>
      </form>

      <br/><br/>

    <button onClick={this.props.editUser}> Show User</button>

  </div>

  )
}
}

export default UserEdit
