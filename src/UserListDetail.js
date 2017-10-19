import React from 'react'

class UserListDetail extends React.Component{
  constructor(props){
    super(props);
    console.log(props)

    this.state = {
      title: props.displayUser.name.title,
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

  render(){
    const editStyle = {float: 'right', display: 'block'};

    if(this.props.displayUser !== null){

      if(this.props.showEdit === false){

        return (
          <div>
                <h6> Title: {this.props.displayUser.name.title} </h6>
                <h6> First Name: {this.props.displayUser.name.first} </h6>
                <h6> Last Name: {this.props.displayUser.name.last} </h6>

                <img src={this.props.displayUser.picture.large} />

                <h6> Gender: {this.props.displayUser.gender} </h6>

                <h6> City: {this.props.displayUser.location.city} </h6>
                <h6> Postcode: {this.props.displayUser.location.postcode} </h6>
                <h6> State: {this.props.displayUser.location.state} </h6>
                <h6> Street: {this.props.displayUser.location.street} </h6>

                <button onClick={this.props.editUser}> Edit User</button>

          </div>
        )
      }
        else {

      return(
      <div>
          <h6>Edit User</h6>

          <form onSubmit={this.props.handleSubmit}>

            <label>
              Title: <input name="title" type="text" value={this.props.displayUser.name.title} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              First Name: <input name="firstName" type="text" value={this.props.displayUser.name.first} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              Last Name: <input name="lastName" type="text" value={this.props.displayUser.name.last} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              Gender: <input name="gender" type="text" value={this.props.displayUser.gender} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              City: <input name="city" type="text" value={this.props.displayUser.location.city} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              Postcode: <input name="postcode" type="text" value={this.props.displayUser.location.postcode} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              State: <input name="state" type="text" value={this.props.displayUser.location.state} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              Street: <input name="street" type="text" value={this.props.displayUser.location.street} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              Picture: <input name="picture" type="text" value={this.props.displayUser.picture.large} onChange={this.handleChange}/>
            </label>
            <br/>


            <input type="submit" value="Submit" />

            <br/>

          </form>
          <br/>
          <br/>

          <button onClick={this.props.editUser}> Show User</button>

  </div>
  )
    }
  }

    else {
      return <div></div>
    }
    }

  }




export default UserListDetail
