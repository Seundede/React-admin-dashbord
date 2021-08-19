import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroidOutlined, Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom';
import './User.css'
function User() {
    return (
      <div className="user">
        <div className="user__container">
          <h1 className="user__title">Edit User</h1>
          <Link to='/newuser'>
            <button className="user__button">Create</button>
          </Link>
        </div>
        <div className="user__content">
          <div className="user__show">
            <div className="user__showup">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneOA-JAEmtOYHVwPFVpyMWuSwoh-UHdswjQ&usqp=CAU"
                alt=""
              />
              <div className="user__showUpTitle">
                <span className="user__showUsername">Sheldon Cooper</span>
                <span className="user__showWork">Theoretical Physicist</span>
              </div>
            </div>
            <div className="user__showbottom">
              <span className="user__showtitle">Account Details</span>
              <div className="user__showContainer">
                <PermIdentity className="user__icon" />
                <span className="user__showInfo">shelly007</span>
              </div>
              <div className="user__showContainer">
                <CalendarToday className="user__icon" />
                <span className="user__showInfo">4.03.1990</span>
              </div>
              <div className="user__showContainer">
                <PhoneAndroidOutlined className="user__icon" />
                <span className="user__showInfo">+123456789</span>
              </div>
              <div className="user__showContainer">
                <MailOutline className="user__icon" />
                <span className="user__showInfo">sheldon@gmail.com</span>
              </div>
              <div className="user__showContainer">
                <LocationSearching className="user__icon" />
                <span className="user__showInfo">Alberta, Canada</span>
              </div>
            </div>
          </div>
          <div className="user__update">
            <span className="user__updateTitle">Edit</span>
            <form action="" className="user__updateForm">
              <div className="user__updateLeft">
                <div className="user__updateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder="Sheldon"
                    className="user__input"
                  />
                </div>
                <div className="user__updateItem">
                  <label>Full name</label>
                  <input
                    type="text"
                    placeholder="Sheldon Cooper"
                    className="user__input"
                  />
                </div>
                <div className="user__updateItem">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="sheldon@gmail.com"
                    className="user__input"
                  />
                </div>
                <div className="user__updateItem">
                  <label>Phone number</label>
                  <input
                    type="text"
                    placeholder="+123456789"
                    className="user__input"
                  />
                </div>
                <div className="user__updateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Alberta, Canada"
                    className="user__input"
                  />
                </div>
              </div>
              <div className="user__updateRight">
                <div className="user__updateUpload">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneOA-JAEmtOYHVwPFVpyMWuSwoh-UHdswjQ&usqp=CAU"
                    alt=""
                    className="user__updateImage"
                  />
                  <label htmlFor="file">
                    <Publish className="user__updateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button>Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default User
