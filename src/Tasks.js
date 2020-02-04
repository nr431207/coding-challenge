import React from 'react';
import { totalCompletedTasks } from './detailsUtils';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';

const Tasks = props => {
  let keys = Object.keys(props.groups);

  return keys.map((_, index) => {
    let totalTaskNumber = props.groups[keys[index]].length, tasks = props.groups[keys[index]];
    index ++;
    return <ListGroup variant="flush">
        <ListGroup.Item action onClick={e => props.handleClickGroup(e)}>        
        <div>{`Task Group ${index} `}</div>
          <Badge pill variant="light">
            {`${totalCompletedTasks(tasks)} of ${totalTaskNumber} tasks complete`}
          </Badge>{' '}
          
        </ListGroup.Item>
      </ListGroup>    
  })
}

export default Tasks;