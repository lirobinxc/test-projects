import React, { CSSProperties } from 'react';

interface ChildProps {
  color: string;
  onClick?: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => {
  const colorStyle: CSSProperties = {
    color: `${color}`,
  };

  return (
    <div>
      <span style={colorStyle}>{color}</span>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// React.FC = Function Component, same as React.FunctionComponent
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  // What does the above tell us?
  // `Child` will be a React function component
  // `Child` might have props assigned to it like `propTypes` and `contextTypes`
  // `Child` will receive props of type `ChildProps`
  return <div>{color}</div>;
};
