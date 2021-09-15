import { MongoClient } from 'mongodb';
import Image from 'next/image';
import CardLanding from '../component/CardLanding';
import classes from '../styles/Home.module.css';



const HomePage = ({ recipes }) => {
  return <section className={`${classes.home_section}`}>
    <article className={`shadow-lg ${classes.image_section}`}>
      <Image width="1300" height="350"
        src={'https://res.cloudinary.com/dqdyvlpjx/image/upload/v1631547331/landing_image_ebvwzp.jpg'}
        className={`img-fluid ${classes.image_landing}`} alt="Responsive" />
      <article className={`text-center ${classes.img_text}`}>
        <h1>Tasty & Juciy</h1>
        <p>Paving The Way For Delicious Burgers!</p>
      </article>
    </article>
    <CardLanding recipes={recipes} />
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



export default HomePage;
