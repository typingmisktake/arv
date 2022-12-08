import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div className="text-white bg-gradient-to-b from-sky-500 to-sky-600">
          <div className="container flex items-center justify-between p-5">
            <Link to="/">
              <h1 className="text-2xl">Home</h1>
            </Link>
            <Link to="/students">Students</Link>
          </div>
        </div>
      </header>
      <main className="flex flex-auto">
        <div className="flex-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
