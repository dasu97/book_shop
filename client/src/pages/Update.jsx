import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Await, useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [book,setBooks] = useState({
    title:"",
    description:"",
    price:null,
    cover:"",
  });

  const navigate = useNavigate()
  const location = useLocation()

  const bookId = location.pathname.split("/")[2];

  const handleChange = (e) =>{
    setBooks(prev=>({...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e =>{
    e.preventDefault()
    try {
      await axios.put("http://localhost:8800/books/" + bookId, book);
      //await axios.post{"http://localhost:8800/books",book}
      navigate("/")
    } catch (err) {
      console.log(err)
    }
  }

  console.log(book)
  return (
    <div className='form'>
      <h1>Update the Book</h1>
      <input type="text" placeholder='title' onChange={handleChange} name="title"/>
      <input type="text" placeholder='description' onChange={handleChange} name="description"/>
      <input type="number" placeholder='price' onChange={handleChange} name="price"/>
      <input type="text" placeholder='cover' onChange={handleChange} name="cover"/>

      <button className='formbutton' onClick={handleClick}>Update</button>
    </div>
  )
}

export default Update

