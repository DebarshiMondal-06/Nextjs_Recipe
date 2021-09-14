import Image from 'next/image';
import classes from './CardLanding.module.css';


const CardLanding = ({ image, text, time }) => {


  return <div className="card" style={{ width: '21rem', border: 'none' }}>
    <Image src={`https://res.cloudinary.com/dqdyvlpjx/image/upload/${image}`} className={`${classes.card_image} p-3 card-img-top`}
      alt="SOME" width="300" height="200" />
    <div className="card-body" style={{ marginTop: -15 }}>
      <h4 className="h5 card-title p-0">{text}<span className="mt-1"
        style={{ float: 'right', fontSize: 16 }}>Cook: {time} min</span> </h4>
    </div>
  </div>
}

export default CardLanding;
