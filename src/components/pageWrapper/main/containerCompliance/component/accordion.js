import React from "react";
import "../style.css";

const Accordion = ({
    Licensed_with_the_Danish_FSA,
    Compliant_with_EU_5AMLD,
    Transaction_Monitoring,
    Seamless_Digital_Onboarding,
    
                            
}) => {

  return (
    <React.Fragment>
   
      <div
        data-hover="false"
        data-delay="0"
        data-w-id="634048aa-f2f7-8a7c-207d-24dcced0c831"
        className="accordion-item w-dropdown"
        id="toogle_0"
        >
        <div
          className="accordion-toggle w-dropdown-toggle"
          id="w-dropdown-toggle-0"
          aria-controls="w-dropdown-list-0"
          aria-haspopup="menu"
          aria-expanded="false"
          role="button"
          tabindex="0"
             >
          <div className="cp__number">
            <div>1</div>
          </div>
          <div className="h3">{Licensed_with_the_Danish_FSA}</div>
        </div>
        <nav
                className="dropdown-list w-dropdown-list"
                id="w-dropdown-list-0"
                aria-labelledby="w-dropdown-toggle-0"
                >
                <p>
                    First-of-its-kind Payment Service Provider License for
                    crypto-related payments, approved by the Danish Financial
                    Supervisory Authority.
                </p>
        </nav>
      </div>


      <div
        data-hover="false"
        data-delay="0"
        data-w-id="9f88c479-3b72-55be-ff96-b61734faad6d"
        className="accordion-item w-dropdown"
        id="toogle_1"
      >
        <div
          className="accordion-toggle w-dropdown-toggle"
          id="w-dropdown-toggle-1"
          aria-controls="w-dropdown-list-1"
          aria-haspopup="menu"
          aria-expanded="false"
          role="button"
          tabindex="0"
        >
          <div className="cp__number">
            <div>2</div>
          </div>
          <div className="h3">{Compliant_with_EU_5AMLD}</div>
        </div>
        <nav
          
          className="dropdown-list w-dropdown-list"
          id="w-dropdown-list-1"
          aria-labelledby="w-dropdown-toggle-1"
        >
          <p>
            Januar has well-established Know-Your-Business and Anti-Money
            Laundering policies and procedures. Compliant with EU law.
          </p>
        </nav>
      </div>



      <div
        data-hover="false"
        data-delay="0"
        data-w-id="8641e905-e635-6e91-364e-3b404721f2ac"
        className="accordion-item w-dropdown"
        id="toogle_2"
      >
        <div
          className="accordion-toggle w-dropdown-toggle"
          id="w-dropdown-toggle-2"
          aria-controls="w-dropdown-list-2"
          aria-haspopup="menu"
          aria-expanded="false"
          role="button"
          tabindex="0"
        >
          <div
            
            className="cp__number"
          >
            <div>3</div>
          </div>
          <div className="h3">{Transaction_Monitoring}</div>
        </div>
        <nav
          
          className="dropdown-list w-dropdown-list"
          id="w-dropdown-list-2"
          aria-labelledby="w-dropdown-toggle-2"
        >
          <p>
            Crypto-related payments specialists. We have the expertise, tools
            and processes to monitor both fiat and crypto transactions. The
            future is multi-rails.
          </p>
        </nav>
      </div>


      <div
        data-hover="false"
        data-delay="0"
        data-w-id="1864cb01-3779-b7ef-63c1-9cb21a81b394"
        className="accordion-item w-dropdown"
        id="toogle_3"
      >
        <div
          className="accordion-toggle w-dropdown-toggle"
          id="w-dropdown-toggle-3"
          aria-controls="w-dropdown-list-3"
          aria-haspopup="menu"
          aria-expanded="false"
          role="button"
          tabindex="0"
        >
          <div
            
            className="cp__number"
          >
            <div>4</div>
          </div>
          <div className="h3">{Seamless_Digital_Onboarding}</div>
        </div>
        <nav
          
          className="dropdown-list w-dropdown-list"
          id="w-dropdown-list-3"
          aria-labelledby="w-dropdown-toggle-3"
        >
          <p>
            We’ve thrown Excel sheets out of the window! Our onboarding flow is
            digital, smooth and fast!
          </p>
        </nav>
      </div>


    </React.Fragment>
  );
};

export default Accordion;
