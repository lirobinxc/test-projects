import { useState } from 'react';

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );

  const users = [
    {
      name: 'Sara',
      age: 20,
    },
    {
      name: 'Mia',
      age: 12,
    },
    {
      name: 'Bob',
      age: 30,
    },
  ];

  const onClick = () => {
    const foundUser = users.find(
      (ele) => ele.name.toLowerCase() === name.toLowerCase()
    );
    setUser(foundUser);
  };

  return (
    <div>
      <h3>User Search</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Search</button>
      <div>
        {user && <h3>{user.name}</h3>}
        {user && <p>Age: {user.age}</p>}
      </div>
    </div>
  );
};

export default UserSearch;
