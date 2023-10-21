import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/home/home";
import Admin from "./views/admin/admin";
import { AppContextProvider } from "./components/context/app.context";
import LoginForm from "./components/loginForm/loginForm";
import { SessionProvider } from "./SessionProvider";

const App = () => {
  return (
    <div className="App">
      <AppContextProvider>
        <SessionProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Login" element={<LoginForm />} />
              <Route path="admin" element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </SessionProvider>
      </AppContextProvider>
    </div>
  );
};

export default App;
