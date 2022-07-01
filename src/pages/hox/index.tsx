import { HoxNode } from '../../components/HoxNode';
import { NodeStoreProvider } from '../../store/hox';

export default function HoxDemo() {
  return (
    <NodeStoreProvider>
      <div className='section-redux-demo'>
        <h2>Hox demo</h2>
        <HoxNode id='1-1' />
      </div>
    </NodeStoreProvider>
  );
}
