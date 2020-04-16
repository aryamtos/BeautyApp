import React, {useState} from 'react';
import api from './services/api';
import './App.css';

//import logo from './assets/logo.ico';
function App() {

  const[email,setEmail] = useState('');
  const[nome,setName] = useState('');
  const[senha,setSenha] = useState('');
  async function handleSubmit(event){

    event.preventDefault();

//const response2 = await api.post('/User', {nome}); 
const response = await api.post('/User',{nome, email,senha });
    
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
          type = "nome"
          id= "nome"
          placeholder = "Nome"
          value = {nome}
          onChange = { event => setName(event.target.value)}
          />
        
          <input
           type="email"
           id= "email" 
           placeholder="Seu melhor e-mail"
           value = {email}
           onChange = { event => setEmail(event.target.value)}
           />
           <input
           type = "password"
           id ="password"
           placeholder="senha"
           value ={senha}
           onChange = {event => setSenha(event.target.value)}
           />
          <button className="btn" type="submit">Cadastrar</button>
          <div>
          <p>Do you have an account? <strong> Log in</strong></p>
          </div>
          
        </form>

      </div>
    </div>
  );
}

export default App;
