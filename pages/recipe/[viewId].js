import Image from "next/image";
import React, { useContext, useEffect } from 'react';
import { createMainContext } from '../../component/Context';
import { useRouter } from 'next/router';
import classes from './View.module.css';


const View = () => {
  const { text } = useContext(createMainContext);
  var router = useRouter();

  if (typeof window !== 'undefined' && !text.ingredients) {
    router.push('/recipe');
  }


  if (text.ingredients) {
    var arrIng = []
    arrIng = text.ingredients.split('.');
    arrIng.pop();
  };
  if (text.procedure) {
    var arrProc = []
    arrProc = text.procedure.split('.');
    arrProc.pop();
  };


  return <section className={`${classes.view_recipe} card mt-5 shadow`}>
    {
      !text.ingredients
        ? <section>Page Not Found</section>
        : <div>
          <main className="row">
            <div className="col-md-5" style={{padding: '10px 20px'}}>
              <Image src={`https://res.cloudinary.com/dqdyvlpjx/image/upload/${text.img}`}
                className={`${classes.recipe_img} rounded p-3 card-img-top`}
                alt="SOME" width="450" height="350" />
            </div>
            <div className={`col-md-6 mt-1 ${classes.recipe_body}`}>
              <h2>{text.title}</h2>
              <p>{text.description}
              </p>
              <article className="text-center">
                <h5>Cooking Time <br /> <span>{text.cook_time}min</span></h5>
                <h5>Prepration Time <br /> <span>{text.prep_time}min</span></h5>
              </article>
              <p className={`${classes.recipe_tags} h4 mt-4`}><b>Tags: </b>
                <span className="badge bg-info">{text.category}</span>
              </p>
            </div>
            <div className="col-md-1"></div>
          </main>
          <section className={`${classes.recipe_part} row mt-2`}>
            <div className="col-md-5 mb-4">
              <h2>Integrients</h2>
              <ul>
                {
                  arrIng && arrIng.map((items, i) => {
                    return <li key={i}>{items}</li>
                  })
                }
              </ul>
            </div>
            <div className="col-md-6">
              <h2>Procedure</h2>
              <ul>
                {
                  arrProc && arrProc.map((items, i) => {
                    return <li key={i}>{items}</li>
                  })
                }
              </ul>
            </div>
          </section>
        </div>
    }
  </section>
}

// export async function getStaticPaths() {
//   return {
//     fallback: false,
//     paths: [
//       {
//         params: {
//           viewId: '1'
//         }
//       },
//     ]
//   };
// };

// export async function getStaticProps() {

// }







export default View;