
const l1 = ['a', 'b', 'c'];
const l2 = [1, 2, 3];

function ziplist(list1, list2) {
  const newlist = [];
  for (let i = 0; i < list1.length; i++) {
    newlist.push(list1[i]);
    newlist.push(list2[i]);
  }
  return newlist;
}

console.log(ziplist(l1, l2));

const zipListTheSimpleWay = function (list1, list2) { return _.flatten(_.zip(list1, list2)); };

console.log(zipListTheSimpleWay(l1, l2));
