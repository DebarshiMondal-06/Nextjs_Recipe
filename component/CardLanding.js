/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import { useContext, useState } from 'react';
import classes from './CardLanding.module.css';
import Link from 'next/link';
import { createMainContext } from './Context';



const CardLanding = ({ recipes }) => {
  const [state, setState] = useState('');
  const { setText } = useContext(createMainContext);

  var filterData = [];
  if (state) {
    filterData = recipes.filter((item) => {
      return item.category === state;
    });
  } else {
    filterData = recipes;
  }


  return <main className="row p-2 mt-5 mb-5">
    <h2 className="mt-1 mb-5 text-capitalize">Popular Recipes : <span className="badge bg-info">{state}</span></h2>
    <div className={`col-md-2 ${classes.un_list}`}>
      <li onClick={() => setState('chicken')}>Chicken</li>
      <li onClick={() => setState('cakes')}>Cakes</li>
      <li className={classes.reset} onClick={() => setState('')}>Reset</li>
    </div>
    <div className={`col-md-10 ${classes.cards}`}>
      {
        filterData.map((item, i) => {
          const { title, img, prep_time, id } = item;
          return <Link key={i} href="/recipe/view">
            <div className="card" onClick={() => setText(item)} style={{ width: '21rem', border: 'none', cursor: 'pointer' }}>
              <Image src={`https://res.cloudinary.com/dqdyvlpjx/image/upload/${img}`} className={`${classes.card_image} p-3 card-img-top`}
                alt="SOME" width="300" height="200" />
              <div className="card-body" style={{ marginTop: -15 }}>
                <h4 className="h5 card-title p-0">{title}</h4>
                <p style={{ fontSize: 16, marginBottom: -5 }}>Cook: {prep_time} min</p>
              </div>
            </div>
          </Link>
        })
      }
    </div>
  </main>
}

export default CardLanding;
