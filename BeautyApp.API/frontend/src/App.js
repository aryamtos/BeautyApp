import React, {useState} from 'react';
import api from './services/api';
import './App.css';

//import logo from './assets/logo.ico';
function App() {

  const[email,setEmail] = useState('');
  async function handleSubmit(event){

    event.preventDefault();

    const response = await api.post('/login',{ email });
      console.log(response);
  }
  return (
    <div className="container">
    
      <div className="content">
        <p>
          <strong>Login in to your account
          </strong>
        </p>
        <form onSubmit = {handleSubmit}>

        
          <input
           type="email"
           id= "email" 
           placeholder="Seu melhor e-mail"
           value = {email}
           onChange = { event => setEmail(event.target.value)}
           />
           <input
           type="password"
           id="password"
           placeholder="senha"
          />

          <button className="btn" type="submit">Log in</button>
          <div>
          <p>Don't have an account? <strong> Sign up</strong></p>
          </div>
          
        </form>

      </div>
    </div>
  );
}

export default App;
