import Login from "./components/Login";
import Signup from "./components/Signup";
import Rectangle from "./components/Rectangle";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black" id="nav">
        <div className="container">
          <a href="#nav" className="navbar-brand">
            <img
              src="/logo192.png"
              alt=""
              className="img-fluid"
              style={{ height: "50px" }}
            />
          </a>
          <Login />
        </div>
      </nav>

      <div className="container-fluid text-light">
        <div className="container py-5">
          <div className="row">
            <aside className="col-12 col-md-6 col-lg-4">
              <Signup />
            </aside>
            <article className="col-12 col-md-6 col-lg-8">
              <Rectangle />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
