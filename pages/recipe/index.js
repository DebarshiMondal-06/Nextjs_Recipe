/* eslint-disable @next/next/link-passhref */
import { MongoClient } from 'mongodb';
import Link from 'next/link';
import { useContext, useState } from 'react';
import CardLanding from '../../component/CardLanding';
import { createMainContext } from '../../component/Context';
import Footer from '../../component/Footer';
import Spinner from '../../component/Spinner';


const RecipeIndex = ({ recipes }) => {
  const { text } = useContext(createMainContext);
  const [state, setState] = useState(true);
  setTimeout(() => {
    setState(false);
  }, 2000);

  if (typeof window !== 'undefined') {
    document.body.style.backgroundImage = `none`;
    document.body.style.backgroundSize = 'none'
  }



  if (state) {
    return <Spinner />
  }
  return <section className="mt-5">
    <article style={{ textAlign: 'right' }}>
      <Link href="/recipe/add">
        <button className="btn btn-primary" style={{ width: 150 }}>Add Recipe</button>
      </Link>
    </article>
    <main className="w-100"  style={{marginBottom: '15%'}}>
      <CardLanding recipes={recipes} text={text} />
    </main>
    <Footer />
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
    },
    revalidate: 2,
  }
};


export default RecipeIndex;