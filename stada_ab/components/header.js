function Header() {
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
                    <a className="nav-link" href="/hem">Hem</a>
                    <a className="nav-link" href="/tjanster">Tjänster</a>
                    <a className="nav-link" href="/about">Om oss</a>
                </div>
                <div className="navbar navbar-expand-sm navbar-light w-100 d-flex flex-row-reverse hr-underline">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/register">Registrera</a>
                        <a className="nav-link" href="/login">Logga in</a>
                    </div>
                </div>
            </nav>
            <hr/>
        </header >


    );
}

export default Header;