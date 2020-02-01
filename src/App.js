import React, { Component } from 'react';
import axios from 'axios'
import Tasks from './Tasks';
import Details from './Details';
import { getGroupIndex } from './detailsUtils';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups : {},
      tasks : [],
      isGroupClicked : false,
      groupIndex: null
    }
    this.handleClickGroup = this.handleClickGroup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let groups = {};
    axios.get('http://localhost:3000/data.json')
      .then(res => {
        res.data.map(item => {
          if(groups[item.group]) {
            groups[item.group].push(item)
          } else {
            groups[item.group] = [item]
          }
        })
        this.setState({groups})
    })
  }

  handleChange() {
    this.state.items.map(item => {
      if(!item.completedAt) item.completedAt = !item.completedAt
    })
    console.log(this.state.items)
  }
  
  handleClickGroup(e){
    const { isGroupClicked } = this.state;
    let index = getGroupIndex(e.currentTarget.textContent);
    this.setState({
      isGroupClicked: !isGroupClicked,
      groupIndex: index
    });
  }

  render() {
    const {
      groups,
      isGroupClicked,
      groupIndex
    } = this.state;

    if(isGroupClicked) {
      return (
        <Details 
        groups={groups}
        groupIndex={groupIndex}
        handleChange={this.handleChange}
        />
      )
    }
    
    return (
      <div>
        {!groups && <div>Loading ...</div>}
        <h3>Things To Do</h3>
        <Tasks 
        handleClickGroup={this.handleClickGroup}
        groups={groups}
        />
      </div>
    )
  }
}
