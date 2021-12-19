function Booking({ booking, cleaners }) {
  async function addCleanerHandler(event) {
    event.preventDefault();
    console.log(event);

    let id = `${booking.id}`;
    let cleaner = `${event.target.value}`;

    let data = {
      id: id,
      cleaner: cleaner,
    };

    const response = await fetch("/api/bookings/Bookings", {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div className="row user-card">
      <div className="col-10">
        <div className="row">
          <h6 className="col-3">{booking.title}</h6>
          <h6 className="col-2">{booking.date}</h6>
          <h6 className="col-2">{booking.time}</h6>
          <h6 className="col-3">{booking.address}</h6>
        </div>
      </div>

      <div className="col-2 ">
        <div className="row ">
          <select
            onChange={addCleanerHandler}
            id="val"
            className=" col-12  btn-danger "
          >
            <option>
              {booking.cleaner == "" ? "Välj Städare" : booking.cleaner}
            </option>
            {cleaners.map((cleaner) => {
              return <option value={cleaner.name}>{cleaner.name}</option>;
            })}
          </select>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Booking;
