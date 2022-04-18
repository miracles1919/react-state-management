import { Provider } from 'react-redux';
import { ToolkitNode } from '../../components/ToolkitNode';
import { store } from '../../store/toolkit';

export default function ToolkitDemo() {
  return (
    <Provider store={store}>
      <div className='section-redux-demo'>
        <h2>Toolkit demo</h2>

        {/* @ts-ignore */}
        <ToolkitNode id='1-1' />
      </div>
    </Provider>
  );
}
