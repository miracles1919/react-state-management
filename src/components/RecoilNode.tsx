import { useRef, useEffect, useCallback, FC, memo } from 'react';
import { createLine } from '../utils';
import { withStyle } from '../utils/style';
import { useRecoilState } from 'recoil';
import { nodeTreeState } from '../state/recoil';
import { setNodeValueImmer } from '../utils/node';

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

export const RecoilNode: FC<NodeProps> = memo((props) => {
  const { id } = props;

  const nodeRef = useRef<HTMLDivElement>(null);
  const [node, setNode] = useRecoilState(nodeTreeState(id));

  useEffect(() => {
    nodeRef.current.classList.add('rendered');

    setTimeout(() => {
      nodeRef.current.classList.remove('rendered');
    }, 500);
  });

  const handleClickChange = useCallback(() => {
    const newNode = setNodeValueImmer(
      node,
      id,
      String(Math.floor(Math.random() * 10000))
    );
    setNode(newNode);
  }, [node, id]);

  console.log(`RecoilNode(${id}) render`);

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
                      'recoil-demo',
                      parent.x + Size,
                      parent.y + Size * 2,
                      childPosition.x + Size,
                      childPosition.y
                    );
                  }
                }}
              >
                {/* @ts-ignore */} {/* 理想情况 */}
                <RecoilNode id={child.id} />
                {/* @ts-ignore */} {/* 实际情况 */}
                {/* <RecoilNode id={child.id} style={{ color: 'red' }} /> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});
