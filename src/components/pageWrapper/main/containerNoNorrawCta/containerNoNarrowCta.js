import React from "react";

import "../../../buildComponent/style.css";
import "../../../../Style/style.css";

const ContainerNoNarrowCta = () => {
  return (
    <React.Fragment>
      <div className="section">
        <div className="container no-narrow padding-bottom-base">
          <div className="w-layout-grid grid-cta">
            <div
              id="w-node-f3d2786a-016c-164a-4bc1-d2420e4aa48a-0e4aa487"
              className="ctabox__item-wrap is-gradient"
            >
              <h3>Ready to run your crypto business with Januar?</h3>
              <a
                href="mailto:mail@gmail.com?subject=Book%20demo"
                className="btn is-secondary w-inline-block"
              >
                <div className="btn__text-mask">
                  <div
                    className="btn__text-inner"
                    style={{transform: "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", 
                        transformStyle: "preserve-3d"}}
                  >
                    <div>Book demo</div>
                  </div>
                </div>
              </a>
            </div>
            <div
              id="w-node-f3d2786a-016c-164a-4bc1-d2420e4aa48e-0e4aa487"
              className="ctabox__item-wrap is-dark"
            >
              <h2 className="h2">Sign up to our newsletter and get updates</h2>
              <div className="formblock w-form">
                <form
                  id="wf-form-EMAIL"
                  name="wf-form-wf-form-EMAIL"
                  data-name="wf-form-EMAIL"
                  method="get"
                  className="newsletter-form"
                  aria-label="wf-form-EMAIL"
                  data-hs-cf-bound="true"
                >
                  <input
                    type="email"
                    className="text-input w-input"
                    maxlength="256"
                    name="email"
                    data-name="email"
                    placeholder="Your business e-mail"
                    id="email"
                  />
                  <input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    className="btn is-primary w-button"
                    style={{cursor:"pointer"}}
                  />
                </form>
                <div
                  className="success-message w-form-done"
                  tabindex="-1"
                  role="region"
                  aria-label="wf-form-EMAIL success"
                >
                 
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContainerNoNarrowCta;
