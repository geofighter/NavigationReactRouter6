import {createContext, useContext, useState} from "react";
import {Navigate, useNavigate} from "react-router-dom";

const AuthContext = createContext('');

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState(null);
    const [ password, setPassword ] = useState(null);

    const loginN = ({ username, password }) => {
        setUser({username});
        setPassword({password});
        navigate('/profile');
    }
    const logoutN = () => {
        setUser(null);
        setPassword(null);
        navigate('/login');
    }
    // debugger
    const authApp = { user, password, loginN, logoutN };

    return(
        <AuthContext.Provider
            value={ authApp }
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
}

//funcional component
export const AuthRoute = ({ children }) =>{
    const {user} = useAuth();
    if (!user){
        alert("Inicia sesion primero")
        return <Navigate to="/login" />
    }
    return children;
}