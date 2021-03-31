import React, { useState } from 'react';

const PartyGuests: React.FC = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName('');
  };

  return (
    <div>
      <h3>Party Guests</h3>
      <div>
        {guests.map((ele) => {
          return <li>{ele}</li>;
        })}
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default PartyGuests;
