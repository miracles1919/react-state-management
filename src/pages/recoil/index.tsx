import { RecoilNode } from '../../components/RecoilNode';
import { RecoilRoot } from 'recoil'

export default function RecoilDemo() {
  return (
    <RecoilRoot>
      <div className='section-redux-demo'>
        <h2>Recoil demo</h2>

        {/* @ts-ignore */}
        <RecoilNode id='1-1' />
      </div>
    </RecoilRoot>
  );
}
