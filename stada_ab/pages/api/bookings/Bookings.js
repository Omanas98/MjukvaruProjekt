import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Abbas:1111@cluster0.mdcz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();

    const bookingCollection = db.collection("bookings");
    const result = await bookingCollection.insertOne(data);
    client.close();

    res.status(201).json({ message: "Booking inserted!" });
    console.log(result);
  } else if (req.method === "Get") {
    // fetch data from an API
    const client = await MongoClient.connect(
      "mongodb+srv://Abbas:1111@cluster0.mdcz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    const db = client.db();

    const bookingCollection = db.collection("bookings");

    const bookings = await bookingCollection.find({
      userName: req.body.userName,
    });

    res.status(200).json({ success: true, data: bookings });

    client.close();
  }
}

export default handler;
