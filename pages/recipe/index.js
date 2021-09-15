/* eslint-disable @next/next/link-passhref */
import { MongoClient } from 'mongodb';
import Link from 'next/link';
import CardLanding from '../../component/CardLanding';


const RecipeIndex = ({ recipes }) => {
  return <section className="mt-5">
    <article  style={{ textAlign: 'right'}}>
      <Link href="/recipe/add">
        <button className="btn btn-primary" style={{ width: 150 }}>Add Recipe</button>
      </Link>
    </article>
    <main className="mt-5 w-100">
      <CardLanding recipes={recipes} />
    </main>
  </section>
}

export async function getStaticProps() {
  const MONGO_URI = 'mongodb+srv://mern-stack:mondal11@mern.zbgib.mongodb.net/Recipe';
  const client = await MongoClient.connect(MONGO_URI);
  var db = client.db();

  const createContact = db.collection('recipes');
  const recipes = await createContact.find().toArray();
  client.close();

  return {
    props: {
      recipes: recipes.map((el) => ({
        title: el.title,
        img: el.url,
        prep_time: el.p_time,
        cook_time: el.c_time,
        category: el.category,
        id: `${el._id}`,
        description: el.description,
        ingredients: el.ingredients,
        procedure: el.procedure
      }))
    }
  }
};


export default RecipeIndex;