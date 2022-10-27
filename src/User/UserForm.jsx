import React, { useState } from 'react';
import './User.css'
const UserForm = () => {

  const API_URL = 'http://localhost:3000/';

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e){
    e.preventDefault();

    const data = {
      "user" :{
         "first_name": first,
         "last_name": last,
         "email": email,
         "phone": phone,
         "birth": date
      }
    };

    fetch(API_URL + 'users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label for="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" onChange={(e) => setFirst(e.target.value)}/><br />
        <label for="lname">Last name:</label><br />
        <input type="text" id="lname" name="lname" onChange={(e) => setLast(e.target.value)}/><br />
        <label for="email">Email:</label><br />
        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}/><br />
        <label for="Pnumber">Phone number:</label><br />
        <input type="tel" id="tel" name="tel" onChange={(e) => setPhone(e.target.value)}/><br />
        <label for="date">Date of birth:</label><br />
        <input type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)}/><br />
        <input type='submit' value="Submit"/> 
      </form>
    </div>
  )
}

export default UserForm;