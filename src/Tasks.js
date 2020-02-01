import React from 'react';

const Tasks = props => {
  let keys = Object.keys(props.groups);

  return keys.map((_, index) => {
    index ++
    return (
      <div>
        <li onClick={e => props.handleClickGroup(e)}>{`Task Group ${index}`}</li>
      </div>
    )
  })

}

export default Tasks;