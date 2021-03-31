import { Child, ChildAsFC } from './Child';

const onClick = () => console.log('clicked');

const Parent = () => {
  return (
    <div>
      <Child color="red" onClick={onClick} />
      <ChildAsFC color="blue" />
    </div>
  );
};

export default Parent;
