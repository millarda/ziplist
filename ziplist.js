// import * as _ from 'underscore';

function zipList(listA, listB) {
  const ret = [];
  for (let i = 0; i < listA.length; i++) {
    ret.push(listA[i]);
    ret.push(listB[i]);
  }
  return ret;
}

function zipListTheSimpleWay(listA, listB) {
  const zipped = _.zip(listA, listB);
  return _.flatten(zipped);
}

const A = ['A', 'B', 'C', 'D'];
const B = [1, 2, 3, 4];
console.log(zipList(A, B));
console.log(zipListTheSimpleWay(A, B));
