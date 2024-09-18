import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>

      <ul className="ro container pt-1">
        <li> <Link to='/' className="text-decoration-none ms-3">
          <div className="m d-flex">
            <h1 className="text-white p-2 rounded ms-4" style={{ backgroundColor: '#6610f2' }}>TR</h1>
            <h1 className="fs-5 w-50 ps-1 mt-2 me-4" style={{ color: '#6610f2' }}>Travel Reservation</h1>
          </div>
        </Link> </li>

        <div className="f">
          <li> <Link to='pricing' style={{ color: 'gray', textDecoration: 'none' }}>price</Link></li>
          <li><Link to='about' style={{ color: 'gray', textDecoration: 'none' }}>about</Link> </li>
          <li> <Link to='blog' style={{ color: 'gray', textDecoration: 'none' }}>blog</Link> </li>
          <li> <Link to='login' style={{ color: 'gray', textDecoration: 'none' }} > login</Link> </li>

        </div>
      </ul>

      <Outlet />

    </div>
  )
}

export default Layout;
