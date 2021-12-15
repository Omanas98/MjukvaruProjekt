import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/user";

dbConnect();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const user = await User.find({});

        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const user = await User.create(req.body);

        /* const client = await MongoClient.connect(
          "mongodb+srv://Abbas:1111@cluster0.mdcz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
        );
        const db = client.db();

        const bookingCollection = db.collection("bookings");
        const result = await bookingCollection.insertOne(data);
        client.close();
 */
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
