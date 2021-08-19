import React from "react";
import "./Header.css";
import LanguageIcon from "@material-ui/icons/Language";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SettingsIcon from "@material-ui/icons/Settings";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <span className="header__logo">Admin</span>
        </div>
        <div className="header__right">
          <div className="header__icons">
            <NotificationsIcon />
            <span className="header__badge">2</span>
          </div>
          <div className="header__icons">
            <LanguageIcon />
            <span className="header__badge">2</span>
          </div>
          <div className="header__icons">
            <SettingsIcon />
          </div>
          <AccountCircleIcon className="header__avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
