
export const isPurchase = item => {
  if(item.group === 'Purchases') return true;
  return false
};

export const getGroupIndex = str => {
  str = str.split(' ');
  return parseInt(str[2])-1
};

export const isDependencyMet = (group, task) => {
  if(!task.dependencyIds.length) return true;
  let res = true
  for(let key in group) {
    for(let i = 0; i < group[key].length; i++) {
      for(let j = 0; j < task.dependencyIds.length; j++) {
        let depId = task.dependencyIds[j], item = group[key][i];
        if(depId === item.id) {
          if(!item.completedAt) res = false;
        }
      }
    }
  } 
 return res
};

export const totalCompletedTasks = tasks => {
  let res = 0;
  for(let i = 0; i<tasks.length; i++) {
    if(tasks[i].completedAt === true) res += 1
  }
  return res
};
