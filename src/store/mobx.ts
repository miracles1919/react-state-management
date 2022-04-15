import { onSnapshot } from 'mobx-state-tree';
import RootModel from '../models';
import data from '../data';

let initialState = RootModel.create({
  rootNode: data,
});

if (process.browser) {
  const data = localStorage.getItem('rootState');
  if (data) {
    const json = JSON.parse(data);
    if (RootModel.is(json)) {
      initialState = RootModel.create(json);
    }
  }
}

export const rootStore = initialState;

onSnapshot(rootStore, (snapshot) => {
  console.log('snapshot', snapshot);
});
