import React from "react";
import "../../../buildComponent/style.css";
import "../../../../Style/style.css";
import Accordion from "./component/accordion";

const ContainerCompliance = () => {

  

  
  return (
    <React.Fragment>
      <section className="section">
        <div className="container padding-vertical-lg">
          <div className="text-center">
            <h1 className="display">Easy. Safe. Compliant.</h1>
            <p className="max-width-40">
              With a local EU and trusted IBAN account you can focus on
              customers and growing your business. Finally.
            </p>
          </div>
        </div>
        <div className="container is-compliance">
          <div className="w-layout-grid grid-compliance">
            <div
              id="w-node-f54eecd0-fdbd-f333-4103-5e9b568a6235-afc4317b"
              className="compliance__item-wrap"
              
            >
              <div className="compliance__heading"
              
              >
                <h2 className="h2">
                  Compliance <br />
                  stack
                </h2>
                <p className="paragraph">
                  Our <strong>compliance-first</strong> approach enables crypto
                  and digital asset service providers to innovate while ensuring
                  a legal foothold within the traditional financial framework.
                </p>
              </div>
            </div>
            <div
              id="w-node-_0eedb1b7-16bb-fbb1-19a7-667aaab7eef1-afc4317b"
              className="compliance__item-wrap accordian"
             >
                           
             <Accordion 
             Licensed_with_the_Danish_FSA="Licensed with he Danish FSA"
             Compliant_with_EU_5AMLD="Compliant with EU 5AMLD"
             Transaction_Monitoring="Transaction Monitoring"
             Seamless_Digital_Onboarding="Seamless Digital Onboarding"
             
             
             />
            
             
            </div>
            <div
              id="w-node-_588963dc-df7c-7a55-7ad7-ac34b297d5ae-afc4317b"
              data-w-id="588963dc-df7c-7a55-7ad7-ac34b297d5ae"
              className="compliance__item-wrap dark"
            >
              <img
                src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/6271280f9987b1bda59ec553_Stack.svg"
                loading="lazy"
                data-w-id="c0a9b274-0ec2-38d6-c232-3f24a18ac0d4"
                alt=""
                className="image-2"
                style={{transform: "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                 transformStyle: "preserve-3d; filter: grayscale(0%)", opacity: "1"}}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContainerCompliance;
