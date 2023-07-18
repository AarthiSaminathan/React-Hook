import React, {  useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import StudentDashboard from '../Menu/StudentDashboard';


const Student = () => {
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error,setError]=useState('');
    
    const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setError('');
    };
    
    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError('');
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    
    if (username === 'n@me' && password === 'password') {
    setLoggedIn(true);
    }else{
      setError("Incorrect username or password");
    }
    
    setUsername('');
    setPassword('');
    };
    
    if (loggedIn) {
    return <StudentDashboard/>;
    }
    
    
    return (
        <div>
            <center>
        <div class="row">
  <div class="col s12 m8 l4 offset-m2 offset-l4">
    <div class="card">

      <div class="card-action  green darken-3 white-text">
      <i class="material-icons medium prefix">account_circle</i>
         <h3>Login Form</h3>
      </div>
        <form onSubmit={handleSubmit}>
      <div class="card-content">
      <div styles={{textAlign:"center"}}>
         {error && <p className="error-message" >{error}</p>}
         </div>
      <div class="form-field">
          <label for="username">Username</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange}/>
        </div>

        <div class="form-field">
          <label for="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange}/>
        </div>

        <div class="form-field">
          <input type="checkbox" id="remem"/>
          <label for="remem">Rememeber me</label>
          
        </div>

        <div class="form-field">
          <button class="btn-large waves-effect waves-dark  green darken-3" type='submit' styles="width:50%;">Login</button>
        </div>
      </div>
    </form>
    </div>
  </div>
</div>
</center>
</div>
    );
};

export default Student;