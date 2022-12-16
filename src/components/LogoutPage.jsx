import {useAuth} from "./auth.jsx";
import {Navigate} from "react-router-dom";

export const LogoutPage = () =>{
    const {logoutN} = useAuth();

    const logout = (e) => {
        e.preventDefault();
        console.log("Adios!");
        logoutN();
    }

    return(
        <>
        <h1>Logout</h1>
        <form>
            <div className="card">
                <div>
                    <div><center><label>Segur@ que deseas Salir?</label></center></div>
                </div>
                <br />
                <div>
                    <center>
                        <button
                            onClick={logout}
                        >
                            Salir
                        </button>
                    </center>
                </div>
            </div>
        </form>
    </>
    );
}