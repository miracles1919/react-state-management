import get from 'lodash.get';
import produce from 'immer';

export function getNode(rootNode, id) {
  let targetNode;

  function traverse(no) {
    if (no.id !== id) {
      no.children.forEach((n) => {
        traverse(n);
      });
    } else {
      targetNode = no;
    }
  }

  traverse(rootNode);

  return targetNode;
}

export function setNodeValue(node, id, value) {
  let traverseEnd = false;
  let finalPath = '';
  function traverse(node, path = '') {
    if (traverseEnd) {
      return;
    }

    if (node.id === id) {
      traverseEnd = true;

      finalPath = path;
    } else {
      for (let i = 0; i < node.children.length; i++) {
        traverse(
          node.children[i],
          path ? `${path}.children[${i}]` : `children[${i}]`
        );
      }
    }
  }

  traverse(node);

  if (finalPath === '') {
    node.value = value;
  } else {
    get(node, finalPath).value = value;
  }
}

export function setNodeValueImmer(node, id, value) {
  return produce(node, (draft) => {
    setNodeValue(draft, id, value);
  });
}
