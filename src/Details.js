import React from 'react';
import Tasks from './Tasks';
// import { isPurchaseLocked, isGroupOne, completeTask } from './detailsUtils';

const Details = (props) => {
  if(!props) return <div>Loading ...</div>
  let keys = Object.keys(props.groups);

  for(let key in props.groups) {
    if(key === keys[props.groupIndex]) {
      return props.groups[key].map(item => {
        return <div>{item.task}</div>
      })
    }
  }
  
}
export default Details
