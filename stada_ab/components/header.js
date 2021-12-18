import { useContext } from "react";
import { LoginContext } from "../pages/login";
import Link from "next/Link";

function Header() {
  const { inne, role } = useContext(LoginContext);

  return (
    <header>
      <div className="p-5 text-center header_image">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div>
            <h2 className="mb-3 header-title">Städa AB</h2>
          </div>
        </div>
      </div>

      <nav className=" navigation navbar navbar-expand-sm navbar-light">
        <div className="navbar-nav w-100">
          <Link className="nav-link" href="/">
            Hem
          </Link>
        </div>
        <div className="navbar navbar-expand-sm navbar-light w-100 d-flex flex-row-reverse hr-underline">
          {loginRole(role)}
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Header;

function loginRole(role) {
  switch (role) {
    case "Admin":
      return (
        <div className="navbar-nav">
          <Link className="nav-link" href="/newBooking">
            Boka städning
          </Link>
          <Link className="nav-link" href="/admin">
            Admin
          </Link>
          <Link className="nav-link" href="/my_bookings">
            Mina Städningar
          </Link>
          <Link className="nav-link" href="/users_all'">
            Lista Användarna
          </Link>
          <a href="/login">Logga ut</a>
        </div>
      );
      break;
    case "Customer":
      return (
        <div className="navbar-nav">
          <Link className="nav-link" href="/newBooking">
            Boka städning
          </Link>
          <Link className="nav-link" href="/my_bookings">
            Mina Städningar
          </Link>
          <a href="/login">Logga ut</a>
        </div>
      );
      break;
    case "Cleaner":
      return (
        <div className="navbar-nav">
          <Link className="nav-link" href="/newBooking">
            Boka städning
          </Link>
          <Link className="nav-link" href="/my_bookings">
            Mina Städningar
          </Link>
          <a href="/login">Logga ut</a>
        </div>
      );
      break;
    default:
      return (
        <div className="navbar-nav">
          <Link className="nav-link " href="/register">
            Registrera
          </Link>
          <Link className="nav-link" href="/login">
            Logga in
          </Link>
        </div>
      );
      break;
  }
}
