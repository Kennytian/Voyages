import { diff } from 'deep-object-diff';

const isDiff = (thisProps: any, nextProps: any, thisState: any, nextState: any) => {
  const diffProps = diff(thisProps, nextProps);
  const diffState = diff(thisState, nextState);
  // console.log('diff props ======', diffProps);
  // console.log('diff state ======', diffState);
  const propsLength = Object.values(diffProps).length;
  const stateLength = Object.values(diffState).length;
  return propsLength > 0 || stateLength > 0;
};

export { isDiff };
