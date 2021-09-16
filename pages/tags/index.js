/* eslint-disable @next/next/link-passhref */
import { MongoClient } from 'mongodb';
import { useContext } from 'react';
import classes from './Tags.module.css';
import Link from 'next/link';
import { createMainContext } from '../../component/Context';



const IndexTags = ({ recipes }) => {
  const { setText } = useContext(createMainContext);


  let filterChars = [];
  filterChars = recipes.filter((c, index) => {
    return recipes.indexOf(c) === index;
  });




  return <section className={`${classes.tags_section}`}>
    <article className={`${classes.tags}`}>
      {
        filterChars.map((item, i) => {
          return <Link key={i} href="/recipe">
            <div className="shadow" onClick={() => setText(item)}>
              {item}
            </div>
          </Link>
        })
      }
    </article>
  </section>
}


export async function getStaticProps() {
  const MONGO_URI = 'mongodb+srv://mern-stack:mondal11@mern.zbgib.mongodb.net/Recipe';
  const client = await MongoClient.connect(MONGO_URI);
  var db = client.db();

  const createContact = db.collection('recipes');
  const recipes = await createContact.find().toArray();
  client.close();

  var arr = [];
  recipes.map((el) => {
    return arr.push(el.category);
  });

  return {
    props: {
      recipes: arr
    },
    revalidate: 1,
  }
};



export default IndexTags;
