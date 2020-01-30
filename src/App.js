import React, { Component } from 'react'
import Tasks from './Tasks';
import Details from './Details';
import axios from 'axios'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      isGroupClicked : false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/data.json')
      .then(res => {
        console.log(res)
        this.setState({items: res.data}, () => {console.log(this.state.items)})
    })
  }
  
  handleClick(){
    this.setState({isGroupClicked: !this.state.isGroupClicked})
  }

  render() {
    const {items, isGroupClicked} = this.state;
    if(isGroupClicked) return <Details/>
    return (
      <div>
        {!items && <div>Loading ...</div>}
        Things To Do
        <Tasks click={this.handleClick}/>

      </div>
    )
  }
}
