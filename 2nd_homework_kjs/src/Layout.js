import { Link, Outlet } from 'react-router-dom';



const Layout = () => {
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
      <table>
      <td></td><Link to="/" style={{ textDecoration: "none" }} >Home</Link>
      <td></td><Link to="/about" style={{ textDecoration: "none" }}>About</Link>
      <td></td><Link to="/profiles/Kjs" style={{ textDecoration: "none" }}>김지수의 프로필</Link>
      </table>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;