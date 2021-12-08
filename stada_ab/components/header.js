import Link from 'next/link';

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
                    <div>
                        <Link href="/" passHref>
                            <a>Hem</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/tjanster" passHref>
                            <a>Tjänster</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/about" passHref>
                            <a>Om oss</a>
                        </Link>
                    </div>
                </div>
                <div className="navbar navbar-expand-sm navbar-light w-100 d-flex flex-row-reverse hr-underline">
                    <div className="navbar-nav">
                        <div>
                            <Link href="/register" passHref>
                                <a>Registrera</a>
                            </Link>
                        </div><div>
                            <Link href="/login" passHref>
                                <a>Logga in</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            <hr />
        </header >


    );
}

export default Header;