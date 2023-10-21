import "./admin.scss";
import { useContext } from "react";
import Dashboard from "../../components/dashboard/dashboard";
import LoginForm from "../../components/loginForm/loginForm";
import { AppContext } from "../../components/context/app.context";

const Admin = () => {
  const { logged } = useContext(AppContext);

  return (
    <div className="admin-container">
      {logged ? <Dashboard /> : <LoginForm />}
    </div>
  );
};

export default Admin;
