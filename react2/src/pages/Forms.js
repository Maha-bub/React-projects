import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'


export default function Forms() {

  // single input field value handle functions


  // const [name, setName]=useState("");
  // console.log(name);

  // function handleChange(e){
  //   setName(e.target.value);



  // multiple input field handle function
  const [inputs, setInput] = useState({})
  console.log(inputs);


  function handleChange(e) {

    
    const value = e.target.value;
    const name = e.target.name;

    setInput(values => ({ ...values, [name]: value }))
  }



  return (
    <>
      <Header />
      <Nav />
      <h2>Explore react forms</h2>



      <form>
        <label>First name:
          <input
            type="text"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
          />
        </label>
        <label>Last name:
          <input
            type="text"
            name="lastname"
            value={inputs.lastname}
            onChange={handleChange}
          />
        </label>
        <p>Current values: {inputs.firstname} {inputs.lastname}</p>
      </form>

      <Footer />


    </>
  )
}
