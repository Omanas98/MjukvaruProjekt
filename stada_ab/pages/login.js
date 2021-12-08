function login() {
    return (
        <section className="login-page page-body">
            <form className="login-form">
                  <h1 className="mb-3">Logga In</h1>
                  <section className="mb-3">
                        <input id="firstname" type="text" placeholder=" " required></input>
                        <label htmlFor="firstname">förnamn</label>
                  </section>
                  
                  <section className="mb-3">
                        <input id="lastname" type="text" placeholder=" " required></input>
                        <label htmlFor="lastname">Efternamn</label>
                  </section>

                  <section className="mb-4">
                        <input id="password" type="password" placeholder=" " required></input>
                        <label htmlFor="password">Lösenord</label>
                  </section>
                  <button  className="w-100"type="submit">Login</button>
            </form>
      </section>
    );
}

export default login;