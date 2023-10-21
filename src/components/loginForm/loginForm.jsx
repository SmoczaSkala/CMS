// import React, { useRef, useState, useContext } from "react";
// import { AppContext } from "./../context/app.context";
// import { Link } from "react-router-dom";
// import "./loginForm.scss";

// const LoginForm = () => {
//   const { setLogged } = useContext(AppContext);
//   const userNameRef = useRef();
//   const userPasswordRef = useRef();
//   const [error, setError] = useState(false);

//   const login = () => {
//     setError(false);

//     const userName = userNameRef.current.value;
//     const userPassword = userPasswordRef.current.value;

//     if (userName === "admin" && userPassword === "admin123") {
//       setLogged(true);
//     } else {
//       setError(true);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <form className="login-form">
//             <h2>Login</h2>
//             <Link to="/" className="link-to-home">
//               Show home page
//             </Link>
//             <div className="form-group">
//               <label htmlFor="username">Username</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="username"
//                 ref={userNameRef}
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 ref={userPasswordRef}
//               />
//             </div>
//             {error && (
//               <div className="error-message">Invalid username or password</div>
//             )}
//             <button type="button" className="btn btn-primary" onClick={login}>
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
import React, { useRef, useState } from "react";
import { useSession } from "../../SessionProvider";
import "./loginForm.scss";
import Dashboard from "../dashboard/dashboard";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { login, isUserLogged } = useSession();
  const userNameRef = useRef();
  const userPasswordRef = useRef();

  const [error, setError] = useState(false);

  const handleLogin = () => {
    setError(false);

    const userName = userNameRef.current.value;
    const userPassword = userPasswordRef.current.value;

    if (userName === "admin" && userPassword === "admin123") {
      login();
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {isUserLogged() ? (
            <Dashboard />
          ) : (
            <form className="login-form">
              <h2>Login</h2>
              <Link to="/">Home page</Link>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  ref={userNameRef}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  ref={userPasswordRef}
                />
              </div>
              {error && (
                <div className="error-message">
                  Invalid username or password
                </div>
              )}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
