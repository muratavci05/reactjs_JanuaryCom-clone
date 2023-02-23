import React from "react";
import "../../../Style/style.css"
import "../../buildComponent/style.css"

const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div className="header-wrapper">
          <a
            href="/"
            aria-current="page"
            className="header__logo-absolute w-inline-block w--current"
          >
            <img
              src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/6244b4078c12636060204702_januar-logo-iconmark-rgb-black.svg"
              loading="lazy"
              alt=""
              className="januar-logo"
            />
          </a>
          <div
            data-w-id="4a5f8186-9d9d-1cac-35f5-84dc27fdc664"
            className="header__mobil-nav-btn"
          >
            <div
              data-is-ix2-target="1"
              className="mobile-nav-image"
              data-w-id="1a6c929a-585c-aa25-7961-2e5288d97489"
              data-animation-type="lottie"
              data-src="https://assets.website-files.com/6242ff5ad84b05d9f34acd8a/6278f53cd9a5e787cf7173e6_63941-hamburger-icon-24px.json"
              data-loop="0"
              data-direction="1"
              data-autoplay="0"
              data-renderer="svg"
              data-default-duration="0.5"
              data-duration="0"
              data-ix2-initial-state="0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                preserveAspectRatio="xMidYMid meet"
                style={{
                  width: "100%",
                  height: "100%",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <defs>
                  <clipPath id="__lottie_element_8">
                    <rect width="24" height="24" x="0" y="0"></rect>
                  </clipPath>
                </defs>
                <g clip-path="url(#__lottie_element_8)">
                  <g
                    transform="matrix(1,0,0,1,12,12)"
                    opacity="1"
                    style={{ display: "block" }}
                  >
                    <g opacity="1" transform="matrix(1,0,0,1,0,7)">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(0,0,0)"
                        stroke-opacity="1"
                        stroke-width="1.5"
                        d=" M-10,0.00800000037997961 C-10,0.00800000037997961 10,0 10,0"
                      ></path>
                    </g>
                    <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(0,0,0)"
                        stroke-opacity="1"
                        stroke-width="1.5"
                        d=" M-10,-0.023000000044703484 C-10,-0.023000000044703484 10,0 10,0"
                      ></path>
                    </g>
                    <g opacity="1" transform="matrix(1,0,0,1,0,-7)">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="miter"
                        fill-opacity="0"
                        stroke-miterlimit="4"
                        stroke="rgb(0,0,0)"
                        stroke-opacity="1"
                        stroke-width="1.5"
                        d=" M-10,0.00800000037997961 C-10,0.00800000037997961 10,0 10,0"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="header__nav-container1">
            <div className="header__nav">
              <a
                href="/"
                aria-current="page"
                className="header__nav-link w--current"
              >
                Home
              </a>
              <a href="/newsroom" className="header__nav-link">
                Newsroom
              </a>
              <a
                href="/careers"
                target="_blank"
                className="header__nav-link"
              >
                Career
              </a>
            </div>
            <div className="header__buttons">
              <a
                href="/login"
                target="_blank"
                className="btn is-secondary w-inline-block"
              >
                <div className="btn__text-mask">
                  <div
                    className="btn__text-inner"
                    style={{
                      transform:
                        "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div>Login</div>
                    
                  </div>
                </div>
              </a>
              <a
                href="mailto:sales@fake.com?subject=Book%20demo"
                className="btn is-primary w-inline-block"
              >
                <div className="btn__text-mask">
                  <div
                    className="btn__text-inner"
                    style={{
                      transform:
                        "translate3d(0px, 0em, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div>Book demo</div>
                    
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="header__shadow" style={{ opacity: "1" }}></div>
        </div>
      </header>
    </React.Fragment>
  );
};
export default Header;
