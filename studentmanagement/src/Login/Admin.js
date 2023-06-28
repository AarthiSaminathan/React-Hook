import React, { useState } from 'react';
import AdminDashboard from '../Menu/AdminDashboard';

const Admin = () => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loggedIn, setLoggedIn] = useState(false);

const handleUsernameChange = (e) => {
setUsername(e.target.value);
};

const handlePasswordChange = (e) => {
setPassword(e.target.value);
};

const handleSubmit = (e) => {
e.preventDefault();
if (username === 'admin' && password === 'password') {
setLoggedIn(true);
}
setUsername('');
setPassword('');
};

if (loggedIn) {
return <AdminDashboard/>;
}

return (
<div>
<h2>Login Page</h2>
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="username">Username:</label>
<input
type="text"
id="username"
value={username}
onChange={handleUsernameChange}
/>
</div>
<div>
<label htmlFor="password">Password:</label>
<input
type="password"
id="password"
value={password}
onChange={handlePasswordChange}
/>
</div>
<button type="submit">Login</button>
</form>
</div>
);
};

export default Admin;