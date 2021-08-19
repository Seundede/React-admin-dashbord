import React from 'react'
import './NewUser.css'

function NewUser() {
    return (
      <div className="newUser">
        <h1 className="newUser__title">New User</h1>
        <form className="newUser__form">
          <div className="newUser__item">
            <label>Username</label>
            <input type="text" placeholder="Sheldon" />
          </div>
          <div className="newUser__item">
            <label>Full name</label>
            <input type="text" placeholder="Sheldon Cooper" />
          </div>
          <div className="newUser__item">
            <label>Email</label>
            <input type="email" placeholder="sheldon@gmail.com" />
          </div>
          <div className="newUser__item">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="newUser__item">
            <label>Phone number</label>
            <input type="text" placeholder="+123456789" />
          </div>
          <div className="newUser__item">
            <label>Address</label>
            <input type="text" placeholder="Alberta, Canada" />
          </div>
          <div className="newUser__item">
            <label>Active</label>
            <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
          </div>
          <button className='newuser__button'>Create</button>
        </form>
      </div>
    );
}

export default NewUser
