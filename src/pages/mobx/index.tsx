import { Provider } from './models';
import { MobxNode } from './node';
import { rootStore } from './store';

export default function MobxDemo() {
  return (
    <Provider value={rootStore}>
      <div className='section-redux-demo'>
        <h2>Mobx demo</h2>

        {/* @ts-ignore */}
        <MobxNode id='1-1' />
      </div>
    </Provider>
  );
}
