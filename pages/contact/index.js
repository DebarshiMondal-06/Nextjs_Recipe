import { useState } from 'react';
import { useRouter } from 'next/router';
import classes from '../../styles/input.module.css';
import axios from 'axios';


const ContactIndex = () => {
  const router = useRouter();
  const [value, setValue] = useState({
    email: '',
    firstname: '',
    lastname: '',
    message: ''
  });
  const { email, firstname, lastname, message } = value;


  const submit_data = () => {
    if (email && firstname && lastname && message) {
      axios({
        method: 'POST',
        url: '/api/contact',
        data: value
      }).then(() => {
        setValue({ email: '', firstname: '', lastname: '', message: '' });
        setTimeout(() => {
          router.push('/');
        }, 1000);
      })
        .catch(() => { });
    };
  };



  return <section className={`${classes.contact_main}`}>
    <form className={`card shadow ${classes.contact_card}`}>
      <h2>Contact Here</h2>
      <section className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">First</label>
          <input type="text" className="form-control"
            onChange={(e) => setValue({ ...value, firstname: e.target.value })} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Last</label>
          <input type="text" className="form-control"
            onChange={(e) => setValue({ ...value, lastname: e.target.value })} />
        </div>
      </section>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" className="form-control"
          onChange={(e) => setValue({ ...value, email: e.target.value })} />
      </div>
      <div className="mb-3">
        <label className="form-label">Message</label>
        <textarea type="text" className="form-control"
          onChange={(e) => setValue({ ...value, message: e.target.value })}></textarea>
      </div>
      <button type="button" className={`btn btn-primary ${classes.contact_btn}`}
        onClick={() => submit_data()}
      >Submit Here</button>
    </form>
  </section>
}

export default ContactIndex;