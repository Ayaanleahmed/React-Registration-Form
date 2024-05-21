



import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [displayEmail, setDisplayEmail] = useState('');
  const [displayAge, setDisplayAge] = useState('');
  const [displayAddress, setDisplayAddress] = useState('');


  const handleRegister = (e) => {
    e.preventDefault();
    if (name !== '' && email !== '' && age !== '' && address !== '') {
      setDisplayName(name);
      setDisplayEmail(email);
      setDisplayAge(age);
      setDisplayAddress(address);
      console.log(name, email, age, address);

      setName('');
      setEmail('');
      setAge('');
      setAddress('');
    } else {
      alert('Please fill the plank space.');
    }
  }
  const clrInformation =()=>{
    setDisplayName('');
    setDisplayEmail('');
    setDisplayAge('');
    setDisplayAddress('');            
  }

  return (
    <div className="fullInfo">
      <form>
        <div className="main">
          <div className="leftSide">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)
              }
              
              style={{
                marginTop: '30px',
                marginLeft: '10px',
                width: '60%',               
                padding: '10px 10px',         
                border: '1px solid #ccc',
                borderRadius: '10px',
               
              }}
            />
            <br />
            <label>Address:</label>
            <input
              list="Address"
              name="address"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
           
              style={{
                marginTop: '30px',
                marginLeft: '10px',
                width: '60%',               
                padding: '10px 10px',         
                border: '1px solid #ccc',
                borderRadius: '10px',
               
              }}
            />
            <datalist id="Address">
              <option value="Yaqshid" />
              <option value="Karaan" />
              <option value="Hodan" />
              <option value="Waabari" />
              <option value="Kaxda" />
            </datalist>
          </div>

          <div className="rightSide">
            <label>Age:</label>
            
            <select
              id="Ages"
              name="Ages"
              value={age}
              onChange={(e) => setAge(e.target.value)}

              style={{
                marginTop: '30px',
                marginLeft: '10px',
                width: '50%',               
                padding: '10px 10px',         
                border: '1px solid #ccc',
                borderRadius: '10px',
               
              }}
            >
              <option value="18-20">18-20</option>
              <option value="20-22">20-22</option>
              <option value="22-24">22-24</option>
              <option value="24-26">24-26</option>
            </select>
            <br />
            <br />
            <label>Email:</label>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                marginLeft: '10px',
                width: '60%',               
                padding: '10px 10px',         
                border: '1px solid #ccc',
                borderRadius: '10px',
               
              }}
            />
          </div>
        </div>

        <button type="submit" onClick={handleRegister}>Submit</button>

        <fieldset>
          <legend>Information:</legend>
          <div className="middle">
            <div className="left">
              <h4>Name:   {   displayName}</h4>
              <h4>Address:   {   displayAddress}</h4>
            </div>
            <div className="right">
              <h4>Email:   {   displayEmail}</h4>
              <h4>Age:   {   displayAge}</h4>
            </div>
          </div>
          <button type="submit" className='clearInfo' onClick={clrInformation}> Clear Information</button>
        </fieldset>
      </form>
    </div>
  );
}

export default Register;