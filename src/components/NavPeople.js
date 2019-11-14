import React from 'react'


class NavPeople extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="nav-people">
        <button name="previous" onClick={(e) => this.props.handleChange(e.target.name)}>{`< Previous`}</button>
        <div className="button-group">
          <button>Edit</button>
          <button>Delete</button>
          <button>New</button>
        </div>
        <button name="next" onClick={(e) => this.props.handleChange(e.target.name)}>{`Next >`}</button>
      </div>
    )
  }


}


export default NavPeople