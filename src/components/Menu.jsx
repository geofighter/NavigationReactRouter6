import {NavLink} from "react-router-dom";
import {useAuth} from "./auth.jsx";

export const Menu = () =>{
    const authApp = useAuth();
    return(
        <nav>
            <ul>
                {
                    routes.map(route => {
                        if (route.private && !authApp.user) return null;
                        if (route.publicOnly && authApp.user) return null;
                        return(
                            <li key={route.text}>
                                <NavLink
                                    style={({ isActive }) => ({
                                        color: isActive ? 'purple':'navy',
                                        fontWeight: "bold",
                                        fontSize: 25
                                    })}
                                    to={route.to}
                                >
                                    {route.text}
                                </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}
const routes = [];
routes.push({
    to: '/',
    text: 'HomePage',
    private: false
});
routes.push({
    to: '/blog',
    text: 'BlogPage',
    private: false
});
routes.push({
    to: '/profile',
    text: 'ProfilePage',
    private: true
});
routes.push({
    to: '/login',
    text: 'Login',
    private: false,
    publicOnly: true
});
routes.push({
    to: '/logout',
    text: 'Logout',
    private: true
});