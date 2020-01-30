import React, { Component } from 'react'
import axios from 'axios'
import Tasks from './Tasks';
import Details from './Details';
import { isPurchase } from './detailsUtils';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items : [],
      purchases: [],
      makePlane: [],
      isGroupOneClicked : false,
      isGroupTwoClicked : false
    }
    this.handleClickGroup1 = this.handleClickGroup1.bind(this);
    this.handleClickGroup2 = this.handleClickGroup2.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:3000/data.json')
      .then(res => {
        this.setState({items: res.data})
    })
  }
  
  handleClickGroup1(){
    const {items, isGroupOneClicked} = this.state;
    this.setState({isGroupOneClicked: !isGroupOneClicked});
    let purchase = []
    items.forEach(item => {
      if(isPurchase(item)) purchase.push(item)
    })
    this.setState({purchases: [...purchase]})
  }

  handleClickGroup2(){
    const {items,isGroupTwoClicked} = this.state;
    this.setState({isGroupTwoClicked: !isGroupTwoClicked});
    let build = []
    items.forEach(item => {
      if(!isPurchase(item)) build.push(item)
    })
    this.setState({makePlane: build})
  }

  render() {
    const {purchases, makePlane, items, isGroupOneClicked, isGroupTwoClicked} = this.state;
    if(isGroupOneClicked) return <Details tasks={purchases}/>
    if(isGroupTwoClicked) return <Details tasks={makePlane}/>
    return (
      <div>
        {!items && <div>Loading ...</div>}
        Things To Do
        <Tasks clickGroup1={this.handleClickGroup1} clickGroup2={this.handleClickGroup2} />

      </div>
    )
  }
}
