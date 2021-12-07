function login() {
    return (
        <section className="login-page">
            <form className="login-form">
                  <h1 className="mb-3">Sign Up</h1>
                  <section className="mb-3">
                        <input id="username" type="text" placeholder=" " required></input>
                        <label htmlFor="username">Username</label>
                  </section>

                  <section className="mb-4">
                        <input id="password" type="password" placeholder=" " required></input>
                        <label htmlFor="password">Password</label>
                  </section>
                  <button  className="w-100"type="submit">Login</button>
            </form>

      </section>
    );
}

export default login;