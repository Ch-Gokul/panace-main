import React, { useState } from 'react';
import './Profile.css';
import profile_img from './Profile.png'
const Profile = () => {
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    bloodGroup: 'O+',
    age: '',
    weight: '',
    height: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to the server
    console.log(userData);
  };

  return (
    <div className="container">
      <img
        className="profile-picture"
        src={profile_img}
        alt="User's Profile Picture"
      />
      <h1>Edit Profile</h1>
      <form className="user-details-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
        />
        <label htmlFor="bloodGroup">Blood Group:</label>
        <select
          id="bloodGroup"
          name="bloodGroup"
          value={userData.bloodGroup}
          onChange={handleInputChange}
        >
          <option value="O+">O+</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="AB+">AB+</option>
          <option value="O-">O-</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="AB-">AB-</option>
        </select>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          value={userData.age}
          onChange={handleInputChange}
        />
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="text"
          id="weight"
          name="weight"
          value={userData.weight}
          onChange={handleInputChange}
        />
        <label htmlFor="height">Height (cm):</label>
        <input
          type="text"
          id="height"
          name="height"
          value={userData.height}
          onChange={handleInputChange}
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
