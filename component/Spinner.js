import classes from './Spinner.module.css';
import Image from 'next/image';
import Spin from '../public/spinner.png';


const Spinner = () => {
  return <section className={`${classes.spinner}`}>
    <Image src={Spin} width="60" height="60" alt="some" />
  </section>
}

export default Spinner;
