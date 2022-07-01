import { useRef, useEffect, useCallback, FC } from 'react';
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

export const HoxNode: FC<NodeProps> = (props) => {
  const { data, setNodeValue } = useNodeStore();

  const nodeRef = useRef<HTMLDivElement>(null);
  const { id } = props;
  const node = getNode(data, id);

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
                {/* @ts-ignore */} {/* 理想情况 */}
                <HoxNode id={child.id} {...child} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
