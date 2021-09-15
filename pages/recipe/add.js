import axios from 'axios';
import React, { useState } from 'react'
import classes from '../../styles/input.module.css';
import { useRouter } from 'next/router';


const Add = () => {
  const router = useRouter();
  const [value, setValue] = useState({
    title: '', category: '', p_time: '', c_time: '',
    procedure: '', description: '', ingredients: '', url: ''
  });


  const add_recipe = () => {
    if (Object.keys(value).every((item) => value[item])) {
      axios({
        method: 'POST',
        url: '/api/addrecipe',
        data: value
      }).then(() => {
        setTimeout(() => {
          router.push('/');
        }, 1000);
      }).catch(() => { });
    }
  };



  return <section className={`${classes.contact_main}`}>
    <form className={`card shadow ${classes.contact_card}`} style={{ width: '80%' }}>
      <h2>Add Recipe</h2>
      <section className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input type="text" className="form-control"
            onChange={(e) => setValue({ ...value, title: e.target.value })} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Category</label>
          <input type="text" className="form-control"
            onChange={(e) => setValue({ ...value, category: e.target.value })} />
        </div>
      </section>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Prepration Time</label>
          <input type="email" className="form-control"
            onChange={(e) => setValue({ ...value, p_time: e.target.value })} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Cooking Time</label>
          <input type="email" className="form-control"
            onChange={(e) => setValue({ ...value, c_time: e.target.value })} />
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Procedure</label>
        <textarea type="text" className="form-control"
          onChange={(e) => setValue({ ...value, procedure: e.target.value })}></textarea>
      </div>
      <div className="row mb-3">
        <div className="col-md-6">
          <label className="form-label">Ingredients</label>
          <textarea type="text" className="form-control"
            onChange={(e) => setValue({ ...value, ingredients: e.target.value })}></textarea>
        </div>
        <div className="col-md-6">
          <label className="form-label">Description</label>
          <textarea type="text" className="form-control"
            onChange={(e) => setValue({ ...value, description: e.target.value })}></textarea>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input type="email" className="form-control"
          onChange={(e) => setValue({ ...value, url: e.target.value })} />
      </div>
      <button type="button" className={`btn btn-primary ${classes.contact_btn}`}
        onClick={() => add_recipe()}>Submit Here</button>
    </form>
  </section>
}

export default Add;
