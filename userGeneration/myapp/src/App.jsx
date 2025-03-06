import React, { useEffect, useState } from 'react'
import "./App.css"
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { FaRandom } from "react-icons/fa";
import { IoMdFemale } from "react-icons/io";
import { IoMdMale } from "react-icons/io";
import axios from 'axios';

const App = () => {

  const[user,setuser]=useState([])

  const handelInput = (gender) => {
    let url = "https://randomuser.me/api/";
    if (gender !== "random") {
      url += `?gender=${gender}`;
    }

    axios.get(url)
      .then(response => {
        setuser(response.data.results);
      })
  };
  useEffect(() => {
    handelInput("random")  }, []); 



  return (
  <>
  <div className="all">

    
  <div className="card">
    <div className="container">
      <img src={user[0]?.picture.large} />
      <div className="texts">
        <h1 className="name">{user[0]?.name.title} {user[0]?.name.first} {user[0]?.name.last}</h1>
        <p className='age'><FaCalendarDays color='rgb(87, 86, 86)'/> {user[0]?.dob?.date.split("T")[0]} ({user[0]?.dob.age}years old)</p>
        <p className='email'><FaEnvelope color='rgb(87, 86, 86)'/> {user[0]?.email}</p>
        <p className='phone'><FaPhone color='rgb(87, 86, 86)' /> {user[0]?.cell}</p>
        <p className='contry'><FaGlobe color='rgb(87, 86, 86)'/> {user[0]?.location.country}</p>

      </div>
    </div>
  </div>
  <div className="buttons">
    <button onClick={() => handelInput("random")}><FaRandom color='white' size="1.3rem"/></button>
    <button onClick={() => handelInput("female")}>
  <IoMdFemale color="white" size="1.5rem" />
</button>
<button onClick={() => handelInput("male")}>
  <IoMdMale color="white" size="1.4rem" />
</button>
  </div>
  
  </div>
  </>
  )
}

export default App