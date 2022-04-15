import { Provider } from 'react-redux';
import { ReduxNode } from '../../components/ReduxNode';
import store from '../../store/redux';

export default function ReduxDemo() {
  return (
    <Provider store={store}>
      <div className='section-redux-demo'>
        <h2>Redux demo</h2>

        {/* @ts-ignore */}
        <ReduxNode id='1-1' />
      </div>
    </Provider>
  );
}
