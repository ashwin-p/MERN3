import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setUserData(data);
        } else if (typeof data === 'object') {
          setUserData(Object.values(data));
        } else {
          console.error('Error: Data is not in a usable format');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dummy Data</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="user-table">
          <thead>
            <tr>
              <th>Sno</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>E-mail</th>
              <th>Username</th>
              <th>Domain</th>
              <th>IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
