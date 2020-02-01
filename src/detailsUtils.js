
export const isPurchase = item => {
  if(item.group === 'Purchases') return true;
  return false
};

export const isPurchaseLocked = (item, completedAt) => {
  if(item.dependencyIds.length && !completedAt) return true;
  return false
};

export const completeTask = (task) => {
  task.completedAt = true
  console.log('task is: ', task)
}

export const getGroupIndex = str => {
  str = str.split(' ');
  return parseInt(str[str.length-1])-1
}
