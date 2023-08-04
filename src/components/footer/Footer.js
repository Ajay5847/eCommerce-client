import React from "react";
import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import './Footer.scss'
import creditImg from '../../assets/credit-card-image-removebg-preview.png'

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="content">
          <div className="footer-left">
            <h3 className="title">Follow us</h3>
            <ul className="follow">
              <li className="hover-link center" id="fb">
                <AiFillFacebook />
              </li>
              <li className="hover-link center">
                <AiOutlineInstagram />
              </li>
              <li className="hover-link center">
                <BsTwitter />
              </li>
              <li className="hover-link center">
                <AiOutlineMail />
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="title">Company</h3>
            <ul className="company">
              <li className="hover-link">Contact us</li>
              <li className="hover-link">Privacy Policy</li>
              <li className="hover-link">Return and Exchange Policy</li>
              <li className="hover-link">Shipping Policy</li>
              <li className="hover-link">Terms & Conditions</li>
            </ul>
          </div>
        </div>
        <div className="subfooter">
            <div className="credit-card-image">
                <img src={creditImg} alt="credit card" />
            </div>
            <p className="copyright">Copyright {new Date().getFullYear()} © <strong>Posterz.</strong> </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
