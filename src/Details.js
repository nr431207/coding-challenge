import React from 'react';
import {isDependencyMet } from './detailsUtils';
import { ReactComponent as LockLogo } from './locked.svg';
import style from './App.css'

const Details = (props) => {
  if(!props) return <div>Loading ...</div>

  const { groups, groupIndex, handleChange } = props;

  let keys = Object.keys(groups);

  for(let key in groups) {
    if(key === keys[groupIndex]) {
      return groups[key].map(item => {
        if(isDependencyMet(groups, item)) {
          return <div className={style.list}>
            <ul>
              <li><input type="checkbox" value={item.task} onChange={e => handleChange(e)}/>{item.task}</li>
            </ul>
          </div>           
        }       
        return<div>
          <ul>
            <li><span><LockLogo/> {item.task}</span></li>
          </ul>
        </div>
      })
    }
  }  
}
export default Details;