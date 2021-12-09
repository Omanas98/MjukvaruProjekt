function register() {
  const submitContact = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${event.target.name.value}`,
          lastName: `${event.target.lastname.value}`,
          adress: `${event.target.address.value}`,
          email: `${event.target.email.value}`,
          personNummer: `${event.target.cpr.value}`,
          password: `${event.target.password.value}`,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="login-page page-body">
      <form onSubmit={submitContact} className="login-form">
        <h1 className="mb-3">Skapa konto</h1>
        <section className="mb-3">
          <input id="name" type="text" placeholder=" " required></input>
          <label htmlFor="firstname">Förnamn</label>
        </section>

        <section className="mb-3">
          <input id="lastname" type="text" placeholder=" " required></input>
          <label htmlFor="lastname">Efternamn</label>
        </section>

        <section className="mb-3">
          <input id="address" type="text" placeholder=" " required></input>
          <label htmlFor="address">Address</label>
        </section>

        <section className="mb-3">
          <input id="email" type="text" placeholder=" " required></input>
          <label htmlFor="email">Email</label>
        </section>

        <section className="mb-3">
          <input id="cpr" type="text" placeholder=" " required></input>
          <label htmlFor="cpr">Personnummer 10 siffror</label>
        </section>

        <section className="mb-4">
          <input id="password" type="password" placeholder=" " required></input>
          <label htmlFor="password">Lösenord</label>
        </section>
        <button className="w-100" type="submit">
          Skapa Konto
        </button>
      </form>
    </section>
  );
}

export default register;
