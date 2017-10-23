import React from 'react'

class UserEdit extends React.Component{

  constructor(props){
    super(props);
    console.log(props)

    this.state = {
      title: this.props.displayUser.title,
      first: this.props.displayUser.first,
      last: this.props.displayUser.last,
      picture: this.props.displayUser.picture,
      gender: this.props.displayUser.gender,
      city: this.props.displayUser.city,
      postcode: this.props.displayUser.postcode,
      state: this.props.displayUser.state,
      street: this.props.displayUser.street,
      password: this.props.displayUser.password
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
     title: nextProps.displayUser.title,
     first: nextProps.displayUser.first,
     last: nextProps.displayUser.last,
     picture: nextProps.displayUser.picture,
     gender: nextProps.displayUser.gender,
     city: nextProps.displayUser.city,
     postcode: nextProps.displayUser.postcode,
     state: nextProps.displayUser.state,
     street: nextProps.displayUser.street,
     password: nextProps.displayUser.password
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
          First Name: <input name="first" type="text" value={this.state.first} onChange={this.handleChange}/>
        </label> <br/>
        <label>
          Last Name: <input name="last" type="text" value={this.state.last} onChange={this.handleChange}/>
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
          Img: <input name="picture" type="text" value={this.state.picture} onChange={this.handleChange}/>
        </label> <br/>
        <label>
          password: <input name="password" type="text" value={this.state.password} onChange={this.handleChange}/>
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
