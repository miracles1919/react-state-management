import { createStore } from 'hox';
import { useImmer } from 'use-immer';
import data from '../data';
import { getNode } from '../utils/node';

export const [useNodeStore, NodeStoreProvider] = createStore(() => {
  const [state, setState] = useImmer(data);

  function setData(id, value) {
    setState((draft) => {
      const node = getNode(draft, id);
      node.value = value;
      console.log('node', node.value);
    });
  }
  console.log('state', state);

  return {
    data: state,
    setNodeValue: setData,
  };
});
