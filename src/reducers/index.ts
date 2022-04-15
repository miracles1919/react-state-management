import { combineReducers } from 'redux';
import produce from 'immer';
import get from 'lodash.get';
import { CHANGE_NODE_VALUE } from '../actions';
import data from '../data';

const initialState = data;

const nodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NODE_VALUE: {
      const { id, payload } = action;

      return produce(state, (draft) => {
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

        traverse(draft);

        if (finalPath === '') {
          draft.value = payload;
        } else {
          get(draft, finalPath).value = payload;
        }
      });
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  rootNode: nodeReducer,
});

export default rootReducer;
