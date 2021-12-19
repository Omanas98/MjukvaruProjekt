import { MongoClient } from "mongodb";
import { useContext } from "react";
import { LoginContext } from "./login";
import { useRouter } from "next/router";
import Link from "next/link";

let currentAccount;

export default function tjanster(props) {
  const { inne, email, role, name } = useContext(LoginContext);
  const router = useRouter();
  currentAccount = email;
  console.log(name);

  let userBookings =
    role === "Cleaner"
      ? props.bookings.filter((booking) => booking.cleaner === name)
      : props.bookings.filter((booking) => booking.userName === currentAccount);

  return (
    <div className="row page-body">
      <h1>Dina bokningar</h1>
      {userBookings.map((booking) => {
        return (
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{booking.title}</h5>
                <p className="card-text">{booking.address}</p>
                <p className="card-text">{booking.date}</p>
                <Link href={`/${booking.id}`} class="btn btn-primary">
                  Details
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://Abbas:1111@cluster0.mdcz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const booknigsCollection = db.collection("bookings");

  const bookningar = await booknigsCollection.find({}).toArray();

  client.close();

  return {
    props: {
      bookings: bookningar.map((meetup) => ({
        title: meetup.title,
        address: meetup.adress,
        description: meetup.description,
        date: meetup.date,
        userName: meetup.userName,
        id: meetup._id.toString(),
      })),
    },
  };
}
