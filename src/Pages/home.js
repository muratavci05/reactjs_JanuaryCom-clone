import React from "react";
import "../Style/style.css";
import "../../src/components/buildComponent/style.css";

import Symbol from "../components/buildComponent/symbols";
import ContainerHero from "../components/pageWrapper/main/containerHero/containerHero";
import ContainerPaddingVertical from "../components/pageWrapper/main/containerPv/containerPaddingVertical";
import ContainerProduct from "../components/pageWrapper/main/containerProduct/containerProduct";
import ContainerUCW from "../components/pageWrapper/main/containerUpsContentWrap/containerUCW";
import ContainerBigImage from "../components/pageWrapper/main/containerBigImage/containerBigImage";
import ContainerCompliance from "../components/pageWrapper/main/containerCompliance/containerCompliance";
import ContainerNoNarrow from "../components/pageWrapper/main/containerNoNarrow/containerNoNarrow";
import ContainerNoNarrowCta from "../components/pageWrapper/main/containerNoNorrawCta/containerNoNarrowCta";
import ContainerFooter from "../components/pageWrapper/main/containerFooter/containerFooter";

const Home = () => {
  return (
    <React.Fragment>
      <main
        data-w-id="a7cb9748-5574-ef1d-dba2-d13e1a1b6a30"
        className="main-wrapper"
      >
        <section >
          <Symbol />
        </section>

        <section >
          <ContainerHero />
        </section>

        <section >
          <ContainerPaddingVertical />
        </section>

        <section >
          <ContainerProduct />
        </section>

        <section >
          <ContainerUCW />
        </section>
        <section>
          <ContainerBigImage />
        </section>
        <section>
          <ContainerCompliance/>
        </section>
        <section>
          <ContainerNoNarrow/>
        </section>
        <section>
          <ContainerNoNarrowCta/>
        </section>
        <section>
          <ContainerFooter/>
        </section>
      </main>
    </React.Fragment>
  );
};

export default Home;
