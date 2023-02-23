import React from "react";

import "../../../buildComponent/style.css";
import "../../../../Style/style.css";

const ContainerFooter = () => {
  return (
    <React.Fragment>
      <div className="section">
        <footer className="footer">
          <img
            src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/6244b4078c12636060204702_januar-logo-iconmark-rgb-black.svg"
            loading="lazy"
            id="w-node-_1599d94a-434b-6b69-9417-de2d4dee4b61-4dee4b5f"
            alt=""
            className="januar-logo"
          
          />
          <p className="text-center">©2022 Januar ApS - All rights reserved</p>
          <div className="footer__social">
            <a href="https://api-doc.januar.com/#introduction" target="_blank">
              API&nbsp;Documentation
            </a>
            <a href="/privacy-policy">Privacy Policy </a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/62726157dccf88ec2371a1d8_Twitter.svg"
                loading="lazy"
                id="w-node-_1599d94a-434b-6b69-9417-de2d4dee4b6a-4dee4b5f"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="w-inline-block"
            >
              <img
                src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/62726157fcbd8d0542b692e2_Linkedin.svg"
                loading="lazy"
                alt=""
              />
            </a>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
};

export default ContainerFooter;
