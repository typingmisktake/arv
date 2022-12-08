import { useState } from "react";

const Login = () => {
  const [isLoggedIn, setLogin] = useState(false);
  const [user, setUser] = useState({ username: "", pass: "" });

  const login = (e) => {
    e.preventDefault();
    if (user.username !== "admin" && user.pass !== "admin") {
      alert("Invalid username or password");
      return;
    }
    setLogin(true);
  };

  const logout = () => {
    setUser({ username: "", pass: "" });
    setLogin(false);
  };

  return (
    <>
      {!isLoggedIn && (
        <form className="d-flex gap-1" onSubmit={login}>
          <input
            type="text"
            name="username"
            className="form-control rounded-0"
            id="username"
            value={user.username}
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
            placeholder="Username"
          />
          <input
            type="password"
            className="form-control rounded-0"
            name="password"
            id="password"
            value={user.pass}
            onChange={(e) => {
              setUser({ ...user, pass: e.target.value });
            }}
            placeholder="Password"
          />
          <input
            type="submit"
            value="Login"
            className="btn btn-primary rounded-0"
          />
        </form>
      )}
      {isLoggedIn && (
        <div className="d-flex align-items-center text-light gap-2">
          <h3 className="h3 m-0">Hello, Admin</h3>
          <button className="btn btn-danger rounded-0" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
