import React, { useState } from 'react';
import 'Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://res.cloudinary.com/damb1cmmd/image/upload/v1633288843/logo-amazon_jisdwn.png' 
                />
            </Link>

            <div className='login__container'>
                <h1>Iniciar Sesion</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Iniciar Sesion</button>
                </form>

                <p>
                Al iniciar sesión, acepta las condiciones de uso y venta de AMAZONAS. Por favor
                    consulte nuestro Aviso de privacidad, nuestro Aviso de cookies y nuestro Aviso de anuncios basados ​​en intereses.
                </p>

                <button onClick={register} className='login__registerButton'>Crea tu Cuenta Amazonas</button>
            </div>
        </div>
    )
}

export default Login