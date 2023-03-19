import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//login component
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line
  const [check, setcheck] = useState("");

  //Submit function
  const handleSubmit = (e) => {
    //preventing refresh after form submission
    e.preventDefault();
    if (password.length >= 6) {
      //after login navigating to the home component
      return navigate("/home");
    } else {
      //if credentials are not crrect then show alert message
      alert("Please enter right credentials");
    }
  };
  return (
    <div className="container main mt-3">
      <div className="row login-div">
        <div className="col-md-6 col-sm-6 col-xs-12 p-5">
          <div>
            <h1 className="log-heading">Welcome Back to Pretty Login</h1>
            <p className="mb-5">It's great to have you back!</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  PASSWORD
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-between mb-2">
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    required
                    onChange={(e) => setcheck(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me?
                  </label>
                </div>
                <p className="forgot">Forgot Password?</p>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-grid col-md-6 me-2">
                  <button type="submit" className="btn btn-primary">
                    LOGIN
                  </button>
                </div>
                <div className="d-grid col-md-6 ms-2">
                  <button type="button" className="btn btn-outline-primary">
                    CREATE ACCOUNT
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center mt-5">Or login with</p>
            <div className="col-md-4 mx-auto d-flex justify-content-between">
              <p className="text-primary">Facebook</p>
              <p className="text-primary">Google</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12 cover-img ps-3"></div>
      </div>
    </div>
  );
};

export default Login;
