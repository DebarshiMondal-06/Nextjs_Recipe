import { MongoClient } from 'mongodb';



const AddContact = async (req, res) => {
  if (req.method === 'POST') {
    console.log('Hello');

    var data = req.body;
    console.log(data);

    const MONGO_URI = 'mongodb+srv://mern-stack:mondal11@mern.zbgib.mongodb.net/Recipe';
    const client = await MongoClient.connect(MONGO_URI);
    var db = client.db();

    const createContact = db.collection('contacts');
    await createContact.insertOne(data);
    client.close();

    res.status(201).json({ message: 'Contact Created' });
  }

}

export default AddContact;


