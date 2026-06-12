import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import axios from 'axios'


export default function Forms() {

  // single input field value handle functions


  // const [name, setName]=useState("");
  // console.log(name);

  // function handleChange(e){
  //   setName(e.target.value);



  // multiple input field handle function
  const [inputs, setInputs] = useState({})
  console.log(inputs);


  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    setInputs(values => ({ ...values, [name]: value }))
  }

  // handleSubmit Function for post data to user_info database
  function handleSubmit(e) {
    e.preventDefault();
    const response= axios.post("http://localhost/React-projects/api/user_create.php", inputs)
    .then(res => { alert(res.message) });
  };

  return (
    <>
      <Nav />
      <Header />
      <h2>Explore react forms</h2>



      <form>
        <label>FullName:<br />
          <input
            type="text"
            name="firstname"
            value={inputs.firstname}
            onChange={handleChange}
          />
        </label> <br /> <br />
        <h5>Your Gender:</h5>
        Male: <input type="radio" name='gender' value="Male" checked={inputs.gender === 'Male'} onChange={handleChange} />
        Female: <input type="radio" name='gender' value="Female" checked={inputs.gender === 'Female'} onChange={handleChange} />
        <h2>Select a District:</h2>
        <select name="district" value={district} onChange={handleChange} id="">

          <option value="Dhaka">Dhaka</option>
          <option value="Rangpur">Rangpur</option>
          <option value="Mymonsing">Mymonsing</option>
          <option value="Sylhet">Sylhet</option>
          <option value="Barisal">Barisal</option>
        </select><br /><br />
        <label>Address:<br />
          <textarea name="address" onChange={handleChange} id="">{inputs.address}</textarea>
          {/* <input
            type="text"
            name="lastname"
            value={inputs.lastname}
            onChange={handleChange}
          /> */}
        </label> <br />

        <h3>Current values:</h3>
        <p> {inputs.firstname} comes from  {inputs.address}</p> <br />

        <button onClick={handleSubmit} type="submit">Submit</button>

      </form>




      <Footer />


    </>)};
