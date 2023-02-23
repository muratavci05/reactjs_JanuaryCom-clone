import React from "react";

const Symbols = () => {
  return (
    <React.Fragment>
      <div className="set-all-components-to-display-none-and-use-this-div-to-create-a-symbol">
        <div
          fs-cc="banner"
          className="fs-cc-banner_component"
          style={{display: "none", transform: "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d"}}
        >
          <div className="fs-cc-banner_container">
            <div className="fs-cc-banner_text">
              By clicking
              <strong>“Accept All Cookies”</strong>, you agree to the storing of
              cookies on your device to enhance site navigation, analyze site
              usage, and assist in our marketing efforts. View our{" "}
              <a href="/privacy-policy" className="fs-cc-banner_text-link">
                Privacy Policy
              </a>{" "}
              for more information.
            </div>
            <div className="fs-cc-banner_buttons-wrapper">
              <a
                fs-cc="open-preferences"
                href="#"
                className="fs-cc-banner_text-link"
                role="button"
                tabindex="0"
              >
                Preferences
              </a>
              <a
                fs-cc="deny"
                href="#"
                className="fs-cc-banner_button fs-cc-button-alt w-button"
                role="button"
                tabindex="0"
              >
                Deny
              </a>
              <a
                fs-cc="allow"
                href="#"
                className="fs-cc-banner_button w-button"
                role="button"
                tabindex="0"
              >
                Accept
              </a>
              <div
                fs-cc="close"
                className="fs-cc-banner_close"
                role="button"
                tabindex="0"
              >
                <div className="fs-cc-banner_close-icon w-embed">
                  <svg
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.414 8l4.293-4.293-1.414-1.414L8 6.586 3.707 2.293 2.293 3.707 6.586 8l-4.293 4.293 1.414 1.414L8 9.414l4.293 4.293 1.414-1.414L9.414 8z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div fs-cc="interaction" className="fs-cc-banner_trigger"></div>
        </div>
        <div
          fs-cc="manager"
          className="fs-cc-manager_component"
          style={{opacity:"0", transform: "translate3d(0px, 100%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d", display: "none"}}
        >
          <div
            fs-cc="open-preferences"
            className="fs-cc-manager_button"
            role="button"
            tabindex="0"
          >
            <img
              src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/628de9779389540f2e9330a9_streamline-icon-cookie%4026x26.SVG"
              loading="lazy"
              alt=""
              className="fs-cc-manager_icon"
            />
          </div>
          <div fs-cc="interaction" className="fs-cc-manager_trigger"></div>
        </div>
        <div
          fs-cc-scroll="disable"
          fs-cc="preferences"
          className="fs-cc-prefs_component w-form"
          style={{display: "none", transform: "translate3d(0px, 20px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d", opacity:" 0"}}
        >
          <form
            id="cookie-preferences"
            name="wf-form-Cookie-Preferences"
            data-name="Cookie Preferences"
            method="get"
            className="fs-cc-prefs_form"
            aria-label="Cookie Preferences"
            data-hs-cf-bound="true"
          >
            <div
              fs-cc="close"
              className="fs-cc-prefs_close"
              role="button"
              tabindex="0"
            >
              <div className="fs-cc-prefs_close-icon w-embed">
                <svg
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 16 24"
                >
                  <path d="M9.414 8l4.293-4.293-1.414-1.414L8 6.586 3.707 2.293 2.293 3.707 6.586 8l-4.293 4.293 1.414 1.414L8 9.414l4.293 4.293 1.414-1.414L9.414 8z"></path>
                </svg>
              </div>
            </div>
            <div className="fs-cc-prefs_content">
              <div className="fs-cc-prefs_space-small">
                <div className="fs-cc-prefs_title">
                  Privacy Preference Center
                </div>
              </div>
              <div className="fs-cc-prefs_space-small">
                <div className="fs-cc-prefs_text">
                  When you visit websites, they may store or retrieve data in
                  your browser. This storage is often necessary for the basic
                  functionality of the website. The storage may be used for
                  marketing, analytics, and personalization of the site, such as
                  storing your preferences. Privacy is important to us, so you
                  have the option of disabling certain types of storage that may
                  not be necessary for the basic functioning of the website.
                  Blocking categories may impact your experience on the website.
                </div>
              </div>
              <div className="fs-cc-prefs_space-medium">
                <a
                  fs-cc="deny"
                  href="#"
                  className="fs-cc-prefs_button fs-cc-button-alt w-button"
                  role="button"
                  tabindex="0"
                >
                  Reject all cookies
                </a>
                <a
                  fs-cc="allow"
                  href="#"
                  className="fs-cc-prefs_button w-button"
                  role="button"
                  tabindex="0"
                >
                  Allow all cookies
                </a>
              </div>
              <div className="fs-cc-prefs_space-small">
                <div className="fs-cc-prefs_title">
                  Manage Consent Preferences by Category
                </div>
              </div>
              <div className="fs-cc-prefs_option">
                <div className="fs-cc-prefs_toggle-wrapper">
                  <div className="fs-cc-prefs_label">Essential</div>
                  <div className="fs-cc-prefs_text">
                    <strong>Always Active</strong>
                  </div>
                </div>
                <div className="fs-cc-prefs_text">
                  These items are required to enable basic website
                  functionality.
                </div>
              </div>
              <div className="fs-cc-prefs_option">
                <div className="fs-cc-prefs_toggle-wrapper">
                  <div className="fs-cc-prefs_label">Marketing</div>
                  <label
                    className="w-checkbox fs-cc-prefs_checkbox-field"
                   
                  >
                    <input
                      type="checkbox"
                      id="marketing-2"
                      name="marketing-2"
                      data-name="Marketing 2"
                      fs-cc-checkbox="marketing"
                      className="w-checkbox-input fs-cc-prefs_checkbox"
                    />
                    <span
                      for="marketing-2"
                      className="fs-cc-prefs_checkbox-label w-form-label"
                    >
                      Essential
                    </span>
                    <div className="fs-cc-prefs_toggle" ></div>
                  </label>
                </div>
                <div className="fs-cc-prefs_text">
                  These items are used to deliver advertising that is more
                  relevant to you and your interests. They may also be used to
                  limit the number of times you see an advertisement and measure
                  the effectiveness of advertising campaigns. Advertising
                  networks usually place them with the website operator’s
                  permission.
                </div>
              </div>
              <div className="fs-cc-prefs_option">
                <div className="fs-cc-prefs_toggle-wrapper">
                  <div className="fs-cc-prefs_label">Personalization</div>
                  <label
                    className="w-checkbox fs-cc-prefs_checkbox-field"
                  >
                    <input
                      type="checkbox"
                      id="personalization-2"
                      name="personalization-2"
                      data-name="Personalization 2"
                      fs-cc-checkbox="personalization"
                      className="w-checkbox-input fs-cc-prefs_checkbox"
                    />
                    <span
                      for="personalization-2"
                      className="fs-cc-prefs_checkbox-label w-form-label"
                    >
                      Essential
                    </span>
                    <div className="fs-cc-prefs_toggle" ></div>
                  </label>
                </div>
                <div className="fs-cc-prefs_text">
                  These items allow the website to remember choices you make
                  (such as your user name, language, or the region you are in)
                  and provide enhanced, more personal features. For example, a
                  website may provide you with local weather reports or traffic
                  news by storing data about your current location.
                </div>
              </div>
              <div className="fs-cc-prefs_option">
                <div className="fs-cc-prefs_toggle-wrapper">
                  <div className="fs-cc-prefs_label">Analytics</div>
                  <label
                    className="w-checkbox fs-cc-prefs_checkbox-field"
                   
                  >
                    <input
                      type="checkbox"
                      id="analytics-2"
                      name="analytics-2"
                      data-name="Analytics 2"
                      fs-cc-checkbox="analytics"
                      className="w-checkbox-input fs-cc-prefs_checkbox"
                    />
                    <span
                      for="analytics-2"
                      className="fs-cc-prefs_checkbox-label w-form-label"
                    >
                      Essential
                    </span>
                    <div className="fs-cc-prefs_toggle" ></div>
                  </label>
                </div>
                <div className="fs-cc-prefs_text">
                  These items help the website operator understand how its
                  website performs, how visitors interact with the site, and
                  whether there may be technical issues. This storage type
                  usually doesn’t collect information that identifies a visitor.
                </div>
              </div>
              <div className="fs-cc-prefs_buttons-wrapper">
                <a
                  fs-cc="submit"
                  href="#"
                  className="fs-cc-prefs_button w-button"
                  role="button"
                  tabindex="0"
                >
                  Confirm my preferences and close
                </a>
              </div>
              <input
                type="submit"
                value="Submit"
                data-wait="Please wait..."
                className="fs-cc-prefs_submit-hide w-button"
              />
              <div className="w-embed">
                
              </div>
            </div>
          </form>
          <div
            className="w-form-done"
            tabindex="-1"
            role="region"
            aria-label="Cookie Preferences success"
          ></div>
          <div
            className="w-form-fail"
            tabindex="-1"
            role="region"
            aria-label="Cookie Preferences failure"
          ></div>
          <div fs-cc="close" className="fs-cc-prefs_overlay"></div>
          <div fs-cc="interaction" className="fs-cc-prefs_trigger"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Symbols;
