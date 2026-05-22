import React from "react";
import { FaMedal } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="gap footer-bg">
      <div className="container">
        <div className="flex space-bw footer-top">
          <div className="col-25">
            <h3 className="mb-15">Astra Clinic</h3>
            <p>Professional and human nursing care in Mirabel.</p>
          </div>
          <div className="col-25">
            <h4 className="mb-15">Contact</h4>
            <p className="mb-15">Phone: 438-373-7203</p>
            <p className="mb-15">Email: soinsinfirmiers@astraclinique.ca</p>
            <p>Mirabel, QC</p>
          </div>
          <div className="col-25">
            <h4 className="mb-15">Information</h4>
            <p className="mb-15">Opening hours</p>
            <p>Privacy Policy</p>
          </div>
          <div className="col-25">
            <h4 className="mb-15">Follow us</h4>
            <div className="social-icons flex">
              <div className="icon-box">
                <FaMedal size={18} />
              </div>

              <div className="icon-box">
                <HiOutlineMail size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-reserve">
        © 2026 Astra Clinic. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
