import './App.css';
import Template from './assets/login-pet.png';
import { BsFillPersonFill } from 'react-icons/bs';
import { CgLock } from 'react-icons/cg';
import Google from './assets/google.svg';
import Facebook from './assets/facebook.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // Removed unused import
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorUserName, setErrorUserName] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [userNameColor, setUserNameColor] = useState('');

  const validateForm = async (e) => {
    e.preventDefault();
  
    if (userName.length >= 3) {
      setErrorUserName('');
      setUserNameColor('green');
    } else {
      setErrorUserName('Please enter a valid username');
      setUserNameColor('red');
    }
  
    if (password.length > 8) {
      setErrorPassword('');
    } else {
      setErrorPassword('Passwords must have at least 8 characters');
    }
  
    try {
      const response = await axios.post('http://localhost:2000/auth/login', { userName, password });
      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      localStorage.setItem('token', token);
      console.log('Login successful. Token:', token);
      // Redirect or perform other actions here
    } catch (error) {
      console.error('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <form className="login-form" onSubmit={validateForm}>
            <h1 className="login-title">LOGIN</h1>
            <div className="form-control">
              <i>
                <BsFillPersonFill />
              </i>
              <input
                type="text"
                placeholder="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <small style={{ color: userNameColor }}>{errorUserName}</small>
            </div>
            <div className="form-control">
              <i>
                <CgLock />
              </i>
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <small style={{ color: 'red' }}>{errorPassword}</small>
            </div>
            <div className="btn-login">
              <button type="submit">
                <Link to="/home">Login Now</Link>
              </button>
              <button type="button">
                <Link to="/register">Register</Link>
              </button>
            </div>
            <p className="tag-social">Login with others</p>
            <div className="form-social">
              <Link to="">
                <img src={Google} alt="Google" />
                <p>Login with Google</p>
              </Link>
            </div>
            <div className="form-social">
              <Link to="">
                <img src={Facebook} alt="Facebook" />
                <p>Login with Facebook</p>
              </Link>
            </div>
          </form>
          <div className="template">
            <img src={Template} style={{ width: 387, height: 709 }} alt="template" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
