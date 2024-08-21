const arr = [
  { id: 1, name: "Root 1", parentId: null },
  { id: 2, name: "Child 1-1", parentId: 1 },
  { id: 3, name: "Child 1-2", parentId: 1 },
  { id: 4, name: "Child 2-1", parentId: 2 },
  { id: 5, name: "Root 2", parentId: null },
  { id: 6, name: "Child 2-2", parentId: 5 },
];

function arrToTree(arr) {
  const map = {};
  const res = [];

    arr.forEach((element) => {
      map[element.id] = { ...element, children: [] };
    });

    arr.forEach((node) => {
      if (node.parentId) {
        map[node.parentId].children.push(node);
      } else {
        res.push(map[node.id]);
      }
    });

//   arr.forEach((element) => {
//     if (!map[element.id]) {
//       map[element.id] = { ...element, children: [] };
//     } else {
//       map[element.id] = { ...map[element.id], ...element };
//     }

//     const mapEl = map[element.id];

//     if (!element.parentId) {
//       res.push(mapEl);
//     } else {
//       if (map[element.parentId]) {
//         map[element.parentId].children.push(mapEl);
//       } else {
//         map[element.parentId].children = [];
//       }
//     }
//   });

  return res;
}

console.log(JSON.stringify(arrToTree(arr)));
