import React from 'react'
import './Sidebar.css'
import LineStyleIcon from "@material-ui/icons/LineStyle";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AssessmentOutlinedIcon from "@material-ui/icons/AssessmentOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import DynamicFeedOutlinedIcon from "@material-ui/icons/DynamicFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ReportOutlinedIcon from "@material-ui/icons/ReportOutlined";
import { Link } from 'react-router-dom';
function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar__container">
          <div className="sidebar__menu">
            <h3 className="sidebar__title">Dashboard</h3>
            <ul className="sidebar__ullist">
              <Link to ='/' className='link'>
                <li>
                  <LineStyleIcon className="sidebar__icon" />
                  Home
                </li>
              </Link>
              <li>
                <TimelineIcon className="sidebar__icon" />
                Analytics
              </li>
              <li>
                <TrendingUpIcon className="sidebar__icon" />
                Sales
              </li>
            </ul>
          </div>
          <div className="sidebar__menu">
            <h3 className="sidebar__title">Quick Menu</h3>
            <ul className="sidebar__ullist">
              <Link to="/users" className="link">
                <li>
                  <PersonIcon className="sidebar__icon" />
                  Users
                </li>
              </Link>
              <li>
                <AccountBalanceIcon className="sidebar__icon" />
                Transactions
              </li>
              <li>
                <AssessmentOutlinedIcon className="sidebar__icon" />
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebar__menu">
            <h3 className="sidebar__title">Staff</h3>
            <ul className="sidebar__ullist">
              <li>
                <ReportOutlinedIcon className="sidebar__icon" />
                Reports
              </li>
            </ul>
          </div>
          <div className="sidebar__menu">
            <h3 className="sidebar__title">Notifiactions</h3>
            <ul className="sidebar__ullist">
              <li>
                <MailOutlineOutlinedIcon className="sidebar__icon" />
                Mail
              </li>
              <li>
                <DynamicFeedOutlinedIcon className="sidebar__icon" />
                Feedback
              </li>
              <li>
                <ChatBubbleOutlineOutlinedIcon className="sidebar__icon" />
                Messages
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default Sidebar
