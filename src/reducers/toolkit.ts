import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import get from 'lodash.get';
import data from '../data';

function setState(state, id, value) {
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

  traverse(state);

  if (finalPath === '') {
    state.value = value;
  } else {
    get(state, finalPath).value = value;
  }
}

type Payload = {
  id: number;
  value: number;
};

const toolkitSlice = createSlice({
  name: 'rootNode',
  initialState: data,
  reducers: {
    setNodeValue(state, action: PayloadAction<Payload>) {
      const {
        payload: { id, value },
      } = action;

      setState(state, id, value)
    },
  },
});

export const { setNodeValue } = toolkitSlice.actions
export const toolkitActions = toolkitSlice.actions
export default toolkitSlice.reducer