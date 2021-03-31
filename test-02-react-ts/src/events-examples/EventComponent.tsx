import React from 'react';

const EventComponent: React.FC = () => {
  // Seperating the onChange function causes TS to error out on `e` because it has an `any` type.
  // Thus, we must properly annotate `e`
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag Me!
      </div>
    </div>
  );
};

export default EventComponent;
