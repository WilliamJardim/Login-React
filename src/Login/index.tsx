import { useState } from 'react';
import './Login.scss';

export default function Login(){

    const [ userName, setUserName ] = useState('');
    const [ password, setPassword ] = useState('');

    return (
        <div className='form-container'>
            <form className='formulario'>
                
                <div className='form-item'>
                    <label> User </label>
                    <input className="user"  
                           name="user"       
                           type="text"    
                           placeholder="Usuário" 
                           value={ userName } 
                           onChange={ (event:any)=>{ setUserName( event.target.value ) } } />
                </div>

                <div className='form-item'>
                    <label> Password </label>
                    <input className="passw" 
                           name="password"   
                           type="password" 
                           placeholder="Senha" 
                           value={ password } 
                           onChange={ (event:any)=>{ setPassword( event.target.value ) } } />
                </div>

                <div className='form-item botoes'>
                    <button> Entrar </button>
                </div>
            </form>
        </div>
    )
    
}