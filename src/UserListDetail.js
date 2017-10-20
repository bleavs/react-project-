import React from 'react'

class UserListDetail extends React.Component{
  constructor(props){
    super(props);
    console.log(props)

    this.state = {
      title: props.displayUser.name.title,
      firstName: props.displayUser.name.first,
      lastName: props.displayUser.name.last,

      img: props.displayUser.picture.large,

      gender: props.displayUser.gender,

      city: props.displayUser.location.city,
      postcode: props.displayUser.location.postcode,
      state: props.displayUser.location.state,
      street: props.displayUser.location.street

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
    const editStyle = {float: 'right', display: 'block'};

      if(this.props.showEdit === false){

        return (
          <div>
                <h6> Title: {this.state.title} </h6>
                <h6> First Name: {this.state.firstName} </h6>
                <h6> Last Name: {this.state.lastName} </h6>

                <img src={this.state.img} />

                <h6> Gender: {this.state.gender} </h6>

                <h6> City: {this.state.city} </h6>
                <h6> Postcode: {this.state.postcode} </h6>
                <h6> State: {this.state.state} </h6>
                <h6> Street: {this.state.street} </h6>

                <button onClick={this.props.editUser}> Edit User</button>

          </div>
        )
      }
        else {

      return(
      <div>
          <h6>Edit User</h6>

          <form onSubmit={this.handleSubmit}>

            <label>
              Title: <input name="title" type="text" value={this.state.title} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              First Name: <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              Last Name: <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              Gender: <input name="gender" type="text" value={this.state.gender} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              City: <input name="city" type="text" value={this.state.city} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              Postcode: <input name="postcode" type="text" value={this.state.postcode} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              State: <input name="state" type="text" value={this.state.state} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              Street: <input name="street" type="text" value={this.state.street} onChange={this.handleChange}/>
            </label>
            <br/>

            <label>
              Img: <input name="img" type="text" value={this.state.img} onChange={this.handleChange}/>
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
}




export default UserListDetail
