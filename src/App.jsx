import {HashRouter, Routes, Route, Navigate, useNavigate} from "react-router-dom";
import {HomePage} from "./components/HomePage.jsx";
import {BlogPage} from "./components/BlogPage";
import {ProfilePage} from "./components/ProfilePage";
import {Menu} from "./components/Menu";
import {NotFound} from "./pages/NotFound";
import {BlogPost} from "./components/BlogPost";
import {LoginPage} from "./components/LoginPage.jsx";
import {LogoutPage} from "./components/LogoutPage";
import {AuthProvider, AuthRoute, useAuth} from "./components/auth.jsx";

function App() {
  debugger
  const {user} = useAuth();
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path="/" element={ <HomePage/> } />
            {/*nested routes*/}
            <Route path="/blog" element={ <BlogPage/> }>
              <Route path=":slug" element={ <BlogPost/> } />
            </Route>
            <Route path="/login" element={<LoginPage />}/>
            <Route
                path="/logout"
                element={
                  <AuthRoute>
                    <LogoutPage />
                  </AuthRoute>
                }
            />
            <Route
                path="/profile"
                element={
                  <AuthRoute>
                    <ProfilePage />
                  </AuthRoute>
                }
            />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
      // <h1>Hey There!</h1>
  )
}

export default App
