import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/data.json')
      .then(res => {
        console.log(res)
        this.setState({items: res.data}, () => {console.log(this.state.items)})
    })
  }

  render() {
    return <div>test</div>
  }
}
