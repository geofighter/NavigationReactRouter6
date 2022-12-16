import {useAuth} from "./auth.jsx";
import {Navigate} from "react-router-dom";

export const ProfilePage = () =>{
    const { user } = useAuth();

    return(
        <>
            <h1>Profile</h1>
            <h3>Hola { user.username } Este es tu perfil!</h3>
        </>
    );
}