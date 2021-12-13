import { useContext } from "react";
import { LoginContext } from "../pages/login";
import Link from "next/Link";

function Header() {
  const { inne } = useContext(LoginContext);
  console.log(inne);

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
            Bokade städningar
          </Link>
          <Link className="nav-link" href="/tjanster">
            Tjänster
          </Link>
          <Link className="nav-link" href="/newBooking">
            Boka städning
          </Link>
        </div>
        <div className="navbar navbar-expand-sm navbar-light w-100 d-flex flex-row-reverse hr-underline">
          {inne ? (
            <div className="navbar-nav">
              <a className="nav-link" href="/login">
                Logga ut
              </a>
            </div>
          ) : (
            <div className="navbar-nav">
              <Link className="nav-link " href="/register">
                Registrera
              </Link>
              <Link className="nav-link" href="/login">
                Logga in
              </Link>
            </div>
          )}
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
