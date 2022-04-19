import { atomFamily } from 'recoil';
import data from '../data';
import { getNode } from '../utils/node';

export const nodeTreeState = atomFamily({
  key: 'Tree',
  default: (id) => getNode(data, id),
});
