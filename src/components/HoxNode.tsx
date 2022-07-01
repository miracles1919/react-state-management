import { useRef, useEffect, useCallback, FC, memo } from 'react';
import { useNodeStore } from '../store/hox';
import { createLine } from '../utils';
import { withStyle } from '../utils/style';
import { getNode } from '../utils/node';

const Size = 60;

export type NodeProps = {
  id?: string;
  value?: string;
  children?: NodeChild[];
};

export type NodeChild = {
  id?: string;
  level?: number;
  value: string;
};

export const HoxNode: FC<NodeProps> = memo((props) => {
  const { id } = props;
  const { data, setNodeValue } = useNodeStore((store) => [
    getNode(store.data, id),
  ]);
  const node = getNode(data, id);
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    nodeRef.current.classList.add('rendered');

    setTimeout(() => {
      nodeRef.current.classList.remove('rendered');
    }, 500);
  });

  const handleClickChange = useCallback(() => {
    setNodeValue(id, Math.floor(Math.random() * 10000));
  }, [id]);

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
                      'hox-demo',
                      parent.x + Size,
                      parent.y + Size * 2,
                      childPosition.x + Size,
                      childPosition.y
                    );
                  }
                }}
              >
                {/* 理想情况 */}
                <HoxNode {...props} id={child.id} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});
