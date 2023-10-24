
function validateBinaryTreeNodes(n, leftChild, rightChild) {

  const rootNodes = getRootNodes(n, leftChild, rightChild);
  if (rootNodes.length !== 1) {
    return false;
  }

  const singleTree = isSingleTree(n, leftChild, rightChild, rootNodes[0]);
  return singleTree;
}

console.log(validateBinaryTreeNodes(4, [3, -1, 1, -1], [-1, -1, 0, -1]));

function getRootNodes(n, leftChild, rightChild) {
  const rootNodes = [];
  const trackerArr: object[] = [];
  for (let i = 0; i < n; i++) {
    trackerArr[i] = {
      parentCount: 0,
    };
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const leftNode = leftChild[j];
      const rightNode = rightChild[j];

      if (leftNode === i) {
        console.log("PARENT FOUND LEFT", i, j);
        trackerArr[i].parentCount++;
      } else if (rightNode === i) {
        console.log("PARENT FOUND RIGHT", i, j);
        trackerArr[i].parentCount++;
      }
    }
  }

  for (let i = 0; i < trackerArr.length; i++) {
    const trackerObj = trackerArr[i];
    if (trackerObj.parentCount === 0) {
      rootNodes.push(i);
    }
  }
  console.log("ROOTNODES: ", rootNodes);
  return rootNodes;
}

function isSingleTree(n, leftChild, rightChild, rootNode) {
  const trackerArr: number[] = new Array(n);
  for (let i = 0; i < n; i++) {
    trackerArr[i] = 0;
  }

  traverseTree(leftChild, rightChild, rootNode, trackerArr);

  for (let i = 0; i < trackerArr.length; i++) {
    const trackerNum = trackerArr[i];
    if (trackerNum !== 1) {
      return false;
    }
  }
  return true;
}

function traverseTree(leftChild, rightChild, nodeIndex, trackerArr) {
  if (trackerArr[nodeIndex] > 1) {
    return;
  }
  trackerArr[nodeIndex]++;
  const leftNode = leftChild[nodeIndex];
  const rightNode = rightChild[nodeIndex];

  if (leftNode !== -1) {
    traverseTree(leftChild, rightChild, leftNode, trackerArr);
  }

  if (rightNode !== -1) {
    traverseTree(leftChild, rightChild, rightNode, trackerArr);
  }
}
