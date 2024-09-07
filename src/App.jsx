import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [username, setUsername] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = inputRef.current.value;
    setUsername(user);
    navigate(`/user?username=${user}`);
  };

  return (
    <>
      <div className="h-screen bg-zinc-500 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ref={inputRef}
          />
          <button
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
