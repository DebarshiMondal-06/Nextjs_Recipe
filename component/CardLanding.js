/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import classes from './CardLanding.module.css';
import Link from 'next/link';
import { createMainContext } from './Context';



const CardLanding = ({ recipes, text }) => {
  const [state, setState] = useState('');
  const { setText } = useContext(createMainContext);
  const router = useRouter();
  var path = router.pathname;


  var filterData = [];
  if (state) {
    filterData = recipes.filter((item) => {
      return item.category === state;
    });
  }
  else if (text && text.length > 2) {
    filterData = recipes.filter((item) => {
      return item.category === text;
    });
  } else {
    filterData = recipes;
  }


  return <main className="row mt-4 p-2 mb-5">
    {
      path !== '/'
        ? null
        : <> <h2 className="mb-5 text-capitalize">Popular Recipes : <span className="badge bg-info">{state}</span></h2>
          <div className={`col-md-2 ${classes.un_list}`}>
            <li onClick={() => setState('lunch')}>Lunch</li>
            <li onClick={() => setState('breakfast')}>Breakfast</li>
            <li className={classes.reset} onClick={() => setState('')}>Reset</li>
          </div>
        </>
    }
    <div className={`${path !== '/' ? 'col-md-12 justify-content-center' : 'col-md-10'} ${classes.cards}`}>
      {
        filterData.map((item, i) => {
          const { title, img, prep_time, id } = item;
          return <Link key={i} href="/recipe/view">
            <div className="card" onClick={() => setText(item)} style={{ width: '21rem', border: 'none', cursor: 'pointer' }}>
              <Image src={`${img}`} className={`${classes.card_image} p-3 card-img-top`}
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
