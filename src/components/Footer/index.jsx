import React from "react";
import FB from "../../assets/images/icon-facebook.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_end">
        <div className="footer_item">
          <h1>Esay bank</h1>
          <div className="footer_icon_list">
            <img src={FB} alt="" />
            <img src={FB} alt="" />
            <img src={FB} alt="" />
            <img src={FB} alt="" />
            <img src={FB} alt="" />
          </div>
        </div>

        <ul className="footer_item">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
        <ul className="footer_item">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
        </ul>
      </div>

      <div className="footer_item">
        <button className="btn_main">Request invite</button>
        <small>Lorem ipsum dolor sit.</small>
      </div>
    </div>
  );
};

export default Footer;
