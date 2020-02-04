import React, { Component } from 'react';
import axios from 'axios'
import Tasks from './Tasks';
import Details from './Details';
import { getGroupIndex } from './detailsUtils';
import  Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import * as style from './App.css';

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
    this.handleBackClick = this.handleBackClick.bind(this);
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
    }).catch(error => {
      console.log(error)
    })
  }

  handleChange(e) {
    let updatedGroups = {...this.state.groups};
    if(e.currentTarget.checked) {
      for (let key in this.state.groups) {
        for(let i = 0; i < updatedGroups[key].length; i++) {
          if(updatedGroups[key][i].task === e.currentTarget.value) {
            updatedGroups[key][i].completedAt = true
          }
        }
      }
      this.setState({ groups: updatedGroups});    
    } else {
      for (let key in this.state.groups) {
        for(let i = 0; i < updatedGroups[key].length; i++) {
          if(updatedGroups[key][i].task === e.currentTarget.value) {
            updatedGroups[key][i].completedAt = null
          }
        }
      }
      this.setState({ groups: updatedGroups}); 
    }
  }

  
  handleClickGroup(e){
    const { isGroupClicked } = this.state;
    let index = getGroupIndex(e.currentTarget.textContent);
    this.setState({
      isGroupClicked: !isGroupClicked,
      groupIndex: index
    });
  }

  handleBackClick() {
    this.setState({ isGroupClicked: false})
  }

  render() {
    const {
      groups,
      isGroupClicked,
      groupIndex,
    } = this.state;

    if(isGroupClicked) {
      return <Container>
          <h3>Task Group {groupIndex+1}</h3>
          <div className={style.nav}>
          <Nav pullRight>
          <Nav.Link href="#home" onClick={this.handleBackClick}>ALL GROUPS</Nav.Link>
          </Nav>
          </div>
          <Details 
          groups={groups}
          groupIndex={groupIndex}
          handleChange={this.handleChange}
          />
        </Container>
      
    }
    
    return <Container>
        {!groups && <div>Loading ...</div>}
        <h3>Things To Do</h3>
        <Tasks 
        handleClickGroup={this.handleClickGroup}
        groups={groups}
        />
      </Container>   
  }
}
