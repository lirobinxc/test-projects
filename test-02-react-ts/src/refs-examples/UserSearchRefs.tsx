import { useState, useRef, useEffect } from 'react';

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

const UserSearchRefs: React.FC = () => {
  // We annotate `inputRef` with null as well because when it is initiated, React has not rendered the DOM yet
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );

  useEffect(() => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  }, []);

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
        ref={inputRef}
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

export default UserSearchRefs;
