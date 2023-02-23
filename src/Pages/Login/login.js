import React from "react";


const Login = () => {
  return (
    <React.Fragment>
      <main className="cffb2f1fd login">
        <section className="c5911b0fa _prompt-box-outer c1540c7fd">
          <div className="c69fbbc3d cd0c81d7c">
            <div className="cff271ef8">
              <header className="c643079b1 cd28751a5 loginHeader">
                <div
                  title="Januar"
                  id="custom-prompt-logo"
                ></div>

                <img
                  className="c5f9b9d86 c1a85fa46"
                  id="prompt-logo-center"
                  src="https://assets.website-files.com/605cafd386800b11a2721486/6111188e50ce77186259a0fa_januar-logo-iconmark.svg"
                  alt="Januar"
                />

                <h1 className="cd96eecae c711e0544">Welcome</h1>

                <div className="c24fc0988 c14298159">
                  <p className="c28ebdb1f cbd72756c">
                    Log in to Januar to continue to Januar's Webapp.
                  </p>
                </div>
              </header>

              <div className="cf47a6c85 c477f2de7">
                <form method="POST" className="ccf897ecc c231705f1">
                  <input
                    type="hidden"
                    name="state"
                    value="hKFo2SBqc05iTDBWWFdKVTBFWDFNbXJNWGtDVGVneXpjSFpMMKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFhiZldfYWtVYUxyR29VUnlkZlhWMWdkX3JCR2JqQ2l0o2NpZNkgUEJDNWdYbVltelRObVZ0T2xZcnd2eElKRHdibUxqTlk"
                  />

                  <div className="ce35f23ce c795f4aa4">
                    <div className="cbc432d84">
                      <div className="input-wrapper _input-wrapper">
                        <div
                          className="c7d0eba33 c80c38bfa text c794b1dea c8e251403"
                          data-action-text=""
                          data-alternate-action-text=""
                        >
                          <label
                            className="ce3a78fd8 no-js c9ebbff9c c3173c5f3"
                            for="username"
                          >
                            Email address
                          </label>

                          <input
                            className="input c4ff097d6 c90ab1050"
                            inputmode="email"
                            name="username"
                            id="username"
                            type="text"
                            value=""
                            required=""
                            autocomplete="username"
                            autocapitalize="none"
                            spellcheck="false"
                            autofocus=""
                          />

                          <div
                            className="ce3a78fd8 js-required c9ebbff9c c3173c5f3"
                            data-dynamic-label-for="username"
                            aria-hidden="true"
                          >
                            Email address
                          </div>
                        </div>
                      </div>

                      <div className="input-wrapper _input-wrapper">
                        <div
                          className="c7d0eba33 c80c38bfa password ca955d9dd c8e251403"
                          data-action-text=""
                          data-alternate-action-text=""
                        >
                          <label
                            className="ce3a78fd8 "
                            for="password"
                          >
                            Password
                          </label>

                          <input
                            className="input"
                            name="password"
                            id="password"
                            type="password"
                            required=""
                            autocomplete="current-password"
                            autocapitalize="none"
                            spellcheck="false"
                          />

                          <div
                            className="ce3a78fd8 "
                            data-dynamic-label-for="password"
                            aria-hidden="true"
                          >
                            Password
                          </div>

                          <button
                            type="button"
                            className="ulp-button-icon "
                            data-action="toggle"
                          >
                           

                            <span
                              className="c44f14ef9 password "
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className=" ">
                    <a
                      className=" "
                      href="/reset-password"
                      >
                      Forgot password?
                    </a>
                  </p>

                  <div className="cf4658d39">
                    <button
                      type="submit"
                      name="action"
                      value="default"
                      className="c1d51edb7 c3e1f488b "
                    >
                      Continue
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Login;
