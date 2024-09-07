import { useLocation } from 'react-router-dom';

function User() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username = params.get('username');

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Welcome, {username}!</h1>
      </div>
    </div>
  );
}

export default User;
