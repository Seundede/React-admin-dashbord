import React from "react";
import "./Info.css";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";

function Info() {
  return (
    <div className="info">
      <div className="info__item">
        <span className="info__title">Revenue</span>
        <div className="info__container">
          <span className="info__money">$3,000</span>
          <span className="info__rate">
            -13.6
            <ArrowDownwardOutlinedIcon className="info__icon negative" />
          </span>
        </div>
        <div>
          <span className="info__sub">Compared to last month</span>
        </div>
      </div>

      <div className="info__item">
        <span className="info__title">Sales</span>
        <div className="info__container">
          <span className="info__money">$5,175</span>
          <span className="info__rate">
            -3.6
            <ArrowDownwardOutlinedIcon className="info__icon negative" />
          </span>
        </div>
        <div>
          <span className="info__sub">Compared to last month</span>
        </div>
      </div>

      <div className="info__item">
        <span className="info__title">Cost</span>
        <div className="info__container">
          <span className="info__money">$1,200</span>
          <span className="info__rate">
            +4.6
            <ArrowUpwardOutlinedIcon className="info__icon" />
          </span>
        </div>
        <div>
          <span className="info__sub">Compared to last month</span>
        </div>
      </div>
    </div>
  );
}

export default Info;
