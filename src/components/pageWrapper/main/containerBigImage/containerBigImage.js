import React from "react";
import Marqueee from "react-fast-marquee";

import "../../../buildComponent/style.css";
import "../../../../Style/style.css";
import "./style.css"

const ContainerBigImage = () => {

   
  return (
    <React.Fragment>
      <div className="section">
        <div className="container is-big-image">
          <div className="text-on-big-image">
            <h1
              data-w-id="ab294d5a-c9ee-08ae-5a85-f412d043b4a8"
              style={{ opacity: "1"}}
              className="h1 cryptoH1"
            >
              Crypto and web3 friendly solution for business payment accounts
            </h1>
          </div>
          <img
            src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/627ac78637c00260df2a15d5_Rasmus.jpg"
            loading="lazy"
            srcset="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/627ac78637c00260df2a15d5_Rasmus-p-500.jpeg 500w, 
            https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/627ac78637c00260df2a15d5_Rasmus-p-800.jpeg 800w,
             https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/627ac78637c00260df2a15d5_Rasmus-p-1080.jpeg 1080w, 
             https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/627ac78637c00260df2a15d5_Rasmus.jpg 1180w"
            sizes="(max-width: 479px) 96vw, (max-width: 767px) 98vw, (max-width: 991px) 95vw, 87vw"
            alt="Clients discussing the use of Januar"
            className="client__image"
          />
          <div
            data-w-id="d636a96f-6182-ef92-8ac5-b1a96580d8c8"
            className="hero__feature-bar-wrapper"
          >
             <Marqueee speed={50} gradientColor={[180,250,50]}>
            <div className="hero__feature-inner-container">
             
              <div
                
                className="hero__feature-content-holder"
              >
                <div className="hero__feature-text">
                  Innovative digital asset companies run their business with
                  Januar
                </div>
                <div className="hero__feature-seperator">-</div>
              </div>
              <div
               
                className="hero__feature-content-holder"
              >
                <div className="hero__feature-text">
                  Innovative digital asset companies run their business with
                  Januar
                </div>
                <div className="hero__feature-seperator">-</div>
              </div>
              <div
                
                className="hero__feature-content-holder"
              >
                <div className="hero__feature-text">
                  <span>Innovative digital asset companies run their business with
                  Januar</span>
                  
                </div>
                <div className="hero__feature-seperator">-</div>
              </div>
              <div
               
                className="hero__feature-content-holder"
              >
                <div className="hero__feature-text">
                <span>Innovative digital asset companies run their business with
                  Januar</span>
                 
                </div>
                <div className="hero__feature-seperator">-</div>
              </div>
              
            </div>
            </Marqueee>
          </div>
        </div>
        <div className="container padding-top-md"
        style={{marginLeft:"-30px"}}
        >
          <div
            data-w-id="f06ec201-2e1d-cd72-39f6-5fa7647af9be"
            className="tagcloud__wrapper"
          >
            <div
              
              className="tagcloud__item bigImageStyle"
            >
              Exchanges
            </div>
            <div
             
              className="tagcloud__item bigImageStyle"
            >
              Brokers
            </div>
            <div
             
              className="tagcloud__item bigImageStyle"
            >
              Investment funds
            </div>
            <div
              
              className="tagcloud__item bigImageStyle"
            >
              Family offices
            </div>
            <div
             
              className="tagcloud__item bigImageStyle"
            >
              Traders
            </div>
            <div
              
              className="tagcloud__item bigImageStyle"
            >
              Institutional investors
            </div>
            <div
             
              className="tagcloud__item bigImageStyle"
            >
              Digital asset service providers
            </div>
            <div
              
              className="tagcloud__item bigImageStyle"
            >
              Merchant services
            </div>
            <div
             
              className="tagcloud__item bigImageStyle"
            >
              OTC traders
            </div>
            <div
              className="tagcloud__item dotted bigImageStyleDotted"
              
            >
              NFT marketplaces
            </div>
            <div
              className="tagcloud__item dotted bigImageStyleDotted"
             
            >
              DAO’s
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContainerBigImage;
