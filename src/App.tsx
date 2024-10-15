import { useState } from 'react'
import './App.scss'
import Login from './Login';
import NewUser from './Newuser';
import { FaAddressBook } from "react-icons/fa6";
import { FaUnlockAlt } from "react-icons/fa";

function App() {

  const [ page, setPage ] = useState('main');

  return (
    <div className='corpo-app'>

      {
        page === 'main' &&
        <div className="pagina midle-screen">
          <h1> Login System 1.0 </h1>

          <button onClick={ ()=>{ setPage('login') } }    > 
            <FaUnlockAlt className='icone'/>
            <p className='texto'>
              Acessar Sistema 
            </p>
          </button>

          <button onClick={ ()=>{ setPage('new-user') } } > 
            <FaAddressBook className='icone'/>
            <p className='texto'>
              Criar Conta    
            </p> 
          </button>

        </div>
      }

      {
        page === 'login' &&
        <div className='pagina midle-screen'>
          <h1> Entrar agora </h1>
          <Login/>
          <button onClick={ ()=>{ setPage('main') } }    > Voltar </button>
        </div>
      }

      {
        page === 'new-user' &&
        <div className='pagina midle-screen'>
          <h1> Criar sua conta </h1>
          <NewUser/>
          <button onClick={ ()=>{ setPage('main') } }    > Voltar </button>
        </div>
      }

    </div>
  );
}

export default App
