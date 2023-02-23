import React from "react";
import Marquee from "react-fast-marquee"

import "../../../buildComponent/style.css"
import "../../../../Style/style.css"
import "./style.css";

const ContainerHero = (props) => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container is-hero">
          <div className="hero__content padding-vertical-base">
            <div className="hero__text-wrapper">
              <div className="margin-bottom-sm">
                <h1 className="h1" style={{
                  marginLeft:"50px"
                }}>The gate for EU crypto companies</h1>
              </div>
              <div className="margin-bottom-sm">
                <p style={{
                  marginLeft:"50px"
                }}>
                  Innovative EU crypto companies use Januar's payment account
                  solutions to accept payments and send payouts while
                  maintaining full compliance and stable business operations.
                </p>
              </div>
              <a 
                href="mailto:mail@fake.com?subject=Book%20demo"
                className="btn is-primary w-inline-block"
                
              >Book demo
               
              </a>
            </div>
            <div className="hero__dashboard">
              <img
                src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/62711e966d7b0c2f71f21e0a_Januar%20-%20dashboard.png"
                loading="lazy"
                srcset="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/62711e966d7b0c2f71f21e0a_Januar%20-%20dashboard-p-500.png 500w, 
             https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/62711e966d7b0c2f71f21e0a_Januar%20-%20dashboard-p-800.png 800w, 
             https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/62711e966d7b0c2f71f21e0a_Januar%20-%20dashboard-p-1080.png 1080w,
             https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/62711e966d7b0c2f71f21e0a_Januar%20-%20dashboard.png 3200w"
                sizes="(max-width: 479px) 88vw, (max-width: 767px) 83vw, (max-width: 991px) 75vw, 45vw"
                alt="Januar dashboard"
                className="hero__dahboard-image"
              />
              <img
                src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/627bbd3def4823f469c4ba26_account.png"
                loading="lazy"
                alt=""
                className="hero__cryptoaccount"
              />
              <img
                src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/62711e96eacfe12036c65350_quickpayments.png"
                loading="lazy"
                alt="Quick payments"
                className="hero__quickpaymets"
              />
            </div>
          </div>
          <div
            data-w-id="709cde3d-6d60-c790-5c10-9de9ab1f5faa"
            className="hero__feature-bar-wrapper"
          >
          <Marquee speed={50} gradientColor={[180,250,50]}>
            <div className="hero__feature-inner-container">
              <div
                className="hero__feature-content-holder"
              >
                <div className="hero__feature-text">IBAN Payment Account</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">
                  Collection &amp; Disbursement
                </div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">Multi Currency</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">EU Compliant</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
              </div>
              <div
                className="hero__feature-content-holder"
              >
                <div className="hero__feature-text">IBAN Payment Account</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">
                  Collection &amp; Disbursement
                </div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">Multi Currency</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">EU Compliant</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
              </div>
              <div
                className="hero__feature-content-holder"
              >
                <div className="hero__feature-text">IBAN Payment Account</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">
                  Collection &amp; Disbursement
                </div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">Multi Currency</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">EU Compliant</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
              </div>
              <div
              
                className="hero__feature-content-holder"
              >
                <div className="hero__feature-text">IBAN Payment Account</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">
                  Collection &amp; Disbursement
                </div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">Multi Currency</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
                <div className="hero__feature-text">EU Compliant</div>
                <div className="hero__feature-seperator">&nbsp;-&nbsp;</div>
              </div>
            </div>
            </Marquee>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContainerHero;
