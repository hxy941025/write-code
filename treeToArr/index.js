const tree = [
  {
    id: 1,
    name: "Root 1",
    children: [
      {
        id: 2,
        name: "Child 1-1",
        children: [
          { id: 3, name: "Child 1-1-1" },
          { id: 4, name: "Child 1-1-2" },
        ],
      },
      {
        id: 5,
        name: "Child 1-2",
      },
    ],
  },
  {
    id: 6,
    name: "Root 2",
    children: [{ id: 7, name: "Child 2-1" }],
  },
];

function treeToArr(tree) {
  let result = [];

  const traverse = (item) => {
    result.push(item);

    if (item.children) {
      item.children.forEach((element) => {
        traverse(element);
      });
    }
  };

  tree.forEach((root) => {
    traverse(root);
  });

  return result;
}

console.log(JSON.stringify(treeToArr(tree)));
