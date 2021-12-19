import { useState } from "react";
import { useRouter } from "next/router";

export default function user_card({user}) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);

  const deleteBooking = async (userId) => {
    setDeleting(true);

    try {
      await fetch(`/api/users/${userId}`, {
        method: "DELETE",
        body: userId,
        contentType: "application/json",
      });

      // reset the deleting state
      setDeleting(false);
      return router.push("/all_users");
    } catch (error) {
      // stop deleting state
      return setDeleting(false);
    }
  };
  return (
    <div className="row user-card">
      <div className="col-11">
        <div className="row">
          <h6 className="col-2">{user.name}</h6>
          <h6 className="col-2">{user.lastName}</h6>
          <h6 className="col-2">{user.adress}</h6>
          <h6 className="col-2">{user.personNummer}</h6>
          <h6 className="col-2">{user.password}</h6>
          <h6 className="col-2">{user.role}</h6>
        </div>
      </div>
      <div className="col-1">
        <div className="row">
          <button type="button" className="col-12 btn-danger"
          onClick={() => deleteBooking(user._id)}>
          {deleting ? "Ta bort" : "Ta bort"}
          </button>
        </div>
      </div>
    </div>
  );
}
