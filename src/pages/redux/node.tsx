import { useRef, useEffect, useCallback, FC, ReactNode } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setNodeValue } from './actions';
import { createLine } from '../utils';

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

const Node: FC<NodeProps> = (props) => {
  const { id, ...node } = props;

  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    nodeRef.current.classList.add('rendered');

    setTimeout(() => {
      nodeRef.current.classList.remove('rendered');
    }, 500);
  });

  const dispatch = useDispatch();

  const handleClickChange = useCallback(() => {
    dispatch(setNodeValue(id, Math.floor(Math.random() * 10000)));
  }, [dispatch, id]);

  console.log(`ReduxNode(${id}) render`);

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
            const style: any = {};

            if (child.level === 2) {
              switch (index) {
                case 0: {
                  style.left = -400 + 'px';
                  style.transform = 'translateX(-100%)';

                  break;
                }
                case 1: {
                  style.left = 0;
                  style.transform = 'translateX(0)';

                  break;
                }
                case 2: {
                  style.left = 400 + 'px';
                  style.transform = 'translateX(100%)';

                  break;
                }
              }
            } else if (child.level === 3) {
              switch (child.id) {
                case '3-1': {
                  style.left = -50 + 'px';
                  style.transform = 'translateX(-100%)';

                  break;
                }
                case '3-2': {
                  style.left = 150 + 'px';
                  style.transform = 'translateX(0)';

                  break;
                }
                case '3-3': {
                  style.left = -150 + 'px';
                  style.transform = 'translateX(0)';

                  break;
                }
                case '3-4': {
                  style.left = 150 + 'px';
                  style.transform = 'translateX(0)';

                  break;
                }
                case '3-5': {
                  style.left = -150 + 'px';
                  style.transform = 'translateX(0)';

                  break;
                }
                case '3-6': {
                  style.left = 150 + 'px';
                  style.transform = 'translateX(0)';

                  break;
                }
              }
            }

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
                {/* @ts-ignore */}
                <ReduxNode id={child.id} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

type State = {
  rootNode: any;
};

const mapStateToProps = (state: State, props: NodeProps) => {
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
};

export const ReduxNode = connect(mapStateToProps)(Node);
