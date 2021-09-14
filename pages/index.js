import Image from 'next/image';
import CardLanding from '../component/CardLanding';
import classes from '../styles/Home.module.css';


const HomePage = () => {
  return <section className={`${classes.home_section}`}>
    <article className={`shadow-lg ${classes.image_section}`}>
      <Image width="1300" height="350"
        src="https://res.cloudinary.com/dqdyvlpjx/image/upload/v1631547331/landing_image_ebvwzp.jpg"
        className={`img-fluid ${classes.image_landing}`} alt="Responsive" />
      <article className={`text-center ${classes.img_text}`}>
        <h1>Tasty & Juciy</h1>
        <p>Paving The Way For Delicious Burgers!</p>
      </article>
    </article>
    <main className="row p-2 mt-5 mb-3 w-100">
    <h2 className="mt-1 mb-5">Recipes</h2>
      <div className="col-md-2">
        <ul>
          <li>Hello</li>
          <li>Bye</li>
          <li>Hey Bro</li>
        </ul>
      </div>
      <div className={`col-md-10 ${classes.cards}`}>
        <CardLanding image="v1631555177/recipe01_tdg8ds.jpg" text={'PanCakes'} time="20" />
        <CardLanding image="v1631555727/recipe04_rg0c3o.jpg" text={'Moroccan Grilled'} time="10" />
        <CardLanding image="v1631555663/recipe03_mi7ro7.jpg" text={'Fired Chicken'} time="25" />
        <CardLanding image="v1631555532/recipe02_xeuirg.jpg" text={'Cup Cakes'} time="18" />
        <CardLanding image="v1631556038/recipe05_lu3mnb.jpg" text={'Chicken Briyani'} time="5" />
      </div>
    </main>
  </section>
}

export default HomePage;
