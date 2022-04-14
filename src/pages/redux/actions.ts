export const CHANGE_NODE_VALUE = 'CHANGE_NODE_VALUE';

export const setNodeValue = (id: string, payload: number) => ({
  type: CHANGE_NODE_VALUE,
  id,
  payload,
});
