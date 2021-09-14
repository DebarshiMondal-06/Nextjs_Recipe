import { MongoClient } from 'mongodb';



const AddRecipes = async (req, res) => {
  if (req.method === 'POST') {
    var data = req.body;

    const MONGO_URI = 'mongodb+srv://mern-stack:mondal11@mern.zbgib.mongodb.net/Recipe';
    const client = await MongoClient.connect(MONGO_URI);
    var db = client.db();

    const createContact = db.collection('recipes');
    await createContact.insertOne(data);
    client.close();

    res.status(201).json({ message: 'Recipe Created' });
  }

}

export default AddRecipes;


