import {useState} from "react";
import {useAuth} from "./auth.jsx";
import {Navigate} from "react-router-dom";

export const LoginPage = () =>{
    const authApp  = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if (authApp.user){
        return <Navigate to="/profile"/>
    }

    const login = (e) => {
        e.preventDefault();
        console.log(`has hecho login!! con las credenciales user: ${username} y passwd: ${password}`)
        authApp.loginN({ username, password });
    }

    return(
        <>
            <h1>Login</h1>
            <form>
                <div className="card">
                    <div>
                        <div><center><label>Username</label></center></div>
                        <input
                            value={username}
                            onChange={ (e => setUsername(e.target.value)) }
                            placeholder="Escribe tu username"
                        />
                    </div>
                    <br />
                    <div>
                        <div><center><label>Password</label></center></div>
                        <input
                            value={password}
                            onChange={ (e => setPassword(e.target.value)) }
                            placeholder="Escribe tu contraseña"
                        />
                    </div>
                    <br/>
                    <div>
                        <center>
                            <button
                                onClick={login}
                            >
                                Entrar
                            </button>
                        </center>
                    </div>
                </div>
            </form>
        </>

    );
}