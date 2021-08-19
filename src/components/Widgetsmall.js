import React from "react";
import "./Widgetsmall.css";
import VisibilityIcon from "@material-ui/icons/VisibilityOutlined";

function Widgetsmall() {
  return (
    <div className="widgetsmall">
      <span className="widgetsmall__member">New Members</span>
      <ul className="widgetsmall__list">
        <li className="widgetsmall__listItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneOA-JAEmtOYHVwPFVpyMWuSwoh-UHdswjQ&usqp=CAU"
            alt=""
            className="widgetsmall__image"
          />
          <div className="widgetsmall__user">
            <span className="widgetsmall__username">Sheldon Cooper</span>
            <span className="widgetsmall__title">Theoretical Physicist</span>
          </div>
          <button className="widgetsmall__button">
            <VisibilityIcon className="widgetsmall__icon" /> Display
          </button>
        </li>
        <li className="widgetsmall__listItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneOA-JAEmtOYHVwPFVpyMWuSwoh-UHdswjQ&usqp=CAU"
            alt=""
            className="widgetsmall__image"
          />
          <div className="widgetsmall__user">
            <span className="widgetsmall__username">Sheldon Cooper</span>
            <span className="widgetsmall__title">Theoretical Physicist</span>
          </div>
          <button className="widgetsmall__button">
            <VisibilityIcon className="widgetsmall__icon" /> Display
          </button>
        </li>
        <li className="widgetsmall__listItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneOA-JAEmtOYHVwPFVpyMWuSwoh-UHdswjQ&usqp=CAU"
            alt=""
            className="widgetsmall__image"
          />
          <div className="widgetsmall__user">
            <span className="widgetsmall__username">Sheldon Cooper</span>
            <span className="widgetsmall__title">Theoretical Physicist</span>
          </div>
          <button className="widgetsmall__button">
            <VisibilityIcon className="widgetsmall__icon" /> Display
          </button>
        </li>
        <li className="widgetsmall__listItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneOA-JAEmtOYHVwPFVpyMWuSwoh-UHdswjQ&usqp=CAU"
            alt=""
            className="widgetsmall__image"
          />
          <div className="widgetsmall__user">
            <span className="widgetsmall__username">Sheldon Cooper</span>
            <span className="widgetsmall__title">Theoretical Physicist</span>
          </div>
          <button className="widgetsmall__button">
            <VisibilityIcon className="widgetsmall__icon" /> Display
          </button>
        </li>
        <li className="widgetsmall__listItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSneOA-JAEmtOYHVwPFVpyMWuSwoh-UHdswjQ&usqp=CAU"
            alt=""
            className="widgetsmall__image"
          />
          <div className="widgetsmall__user">
            <span className="widgetsmall__username">Sheldon Cooper</span>
            <span className="widgetsmall__title">Theoretical Physicist</span>
          </div>
          <button className="widgetsmall__button">
            <VisibilityIcon className="widgetsmall__icon" /> Display
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Widgetsmall;
