import { useRef, useEffect, useCallback, FC } from 'react';
import { createLine } from '../utils';
import { withStyle } from '../utils/style';
import { observer } from 'mobx-react-lite';
import { useModel } from './models';

export type NodeProps = {
  id?: string;
  value: string;
  children: NodeChild[];
};

export type NodeChild = {
  id?: string;
  level?: number;
  value: string;
};

const Size = 60;

export const MobxNode: FC<NodeProps> = observer((props) => {
  const { id } = props;

  const nodeRef = useRef<HTMLDivElement>(null);

  const rootModel = useModel();
  const node = rootModel.getNodeById(id);

  useEffect(() => {
    nodeRef.current.classList.add('rendered');

    setTimeout(() => {
      nodeRef.current.classList.remove('rendered');
    }, 500);
  });

  const handleClickChange = useCallback(() => {
    node.setNodeValue(String(Math.floor(Math.random() * 10000)));
  }, [node, id]);

  console.log(`MobxNode(${id}) render`);

  return (
    <div className='node-wrap'>
      <div className='node' ref={nodeRef}>
        <div>{id}</div>

        <div className='value'>{node.value}</div>

        <div className='action' onClick={handleClickChange}>
          change
        </div>
      </div>

      {!!node.children.length && (
        <div className='children-wrap'>
          {node.children.map((child, index) => {
            const style = withStyle(child, index);
            return (
              <div
                key={child.id}
                className='child-wrap'
                style={style}
                ref={(node) => {
                  if (node) {
                    const parent = nodeRef.current.getBoundingClientRect();
                    const childPosition = node.getBoundingClientRect();
                    createLine(
                      'redux-demo',
                      parent.x + Size,
                      parent.y + Size * 2,
                      childPosition.x + Size,
                      childPosition.y
                    );
                  }
                }}
              >
                {/* @ts-ignore */} {/* 理想情况 */}
                <MobxNode id={child.id} />
                {/* @ts-ignore */} {/* 实际情况 */}
                {/* <MobxNode id={child.id} style={{ color: 'red' }} /> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});
