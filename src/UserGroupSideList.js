import React from 'react'

const UserGroupSideList = (props) => {

  console.log(props)

  console.log(props.groups.map((group, index) => {
    return (group.last) }))

  const divStyle = {float: 'right'};
  const buttonStyle = {display: 'block'};

  // showUser = (e) => {
  //   e.preventDefault()
  //   console.log(key)
  // }

  const groupnames = props.groups.map((group, index) => {

      return ( <button
        style={buttonStyle}
        type='button'
        group={group}
        key={index}
        value={index}
        onClick={props.showGroup}>
          {group.name}
          </button>
        )}
      )


    return (
    <div style={divStyle}>

      {groupnames}
    </div>

    )


  }


export default UserGroupSideList
