
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arr = [];
  for (i = 0; i < matrix.length; i++) {
    if(i % 2 !== 0){matrix[i].reverse(); arr.push(matrix[i]);}
    else{arr.push(matrix[i]);}
  }
  return [].concat(...arr);
}