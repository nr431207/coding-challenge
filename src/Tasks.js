import React from 'react';

export default class Tasks extends React.Component {

  render(){
    return <div>
    <li onClick={this.props.click}>Task Group 1</li>
    <li onClick={this.props.click}>Task Group 2</li>
  </div>
  }

}

