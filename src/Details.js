import React from 'react';

const Details = (props) => {
  if(!props) return <div>Loading...</div>
  return props.tasks.map(task => {
    return <div>{task.task}</div>
  })  
}

export default Details;