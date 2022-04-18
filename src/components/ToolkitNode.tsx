import { useRef, useEffect, useCallback, FC, memo } from 'react';
import { useAppDispatch, useAppSelector } from '../store/toolkit';
import { setNodeValue } from '../reducers/toolkit';
import { createLine } from '../utils';
import { withStyle } from '../utils/style';

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

export const ToolkitNode: FC<NodeProps> = memo((props) => {
  const selector = useAppSelector((state) => {
    const rootNode = state.rootNode;
    let targetNode;

    function traverse(no) {
      if (no.id !== props.id) {
        no.children.forEach((n) => {
          traverse(n);
        });
      } else {
        targetNode = no;
      }
    }

    traverse(rootNode);

    return targetNode;
  });

  const { id, ...node } = selector;

  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    nodeRef.current.classList.add('rendered');

    setTimeout(() => {
      nodeRef.current.classList.remove('rendered');
    }, 500);
  });

  const dispatch = useAppDispatch();

  const handleClickChange = useCallback(() => {
    dispatch(
      setNodeValue({
        id,
        value: Math.floor(Math.random() * 10000),
      })
    );
  }, [dispatch, id]);

  console.log(`ToolkitNode(${id}) render`);

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
                <ToolkitNode id={child.id} />
                {/* @ts-ignore */} {/* 实际情况 */}
                {/* <ToolkitNode id={child.id} style={{ color: 'red' }} /> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
});
