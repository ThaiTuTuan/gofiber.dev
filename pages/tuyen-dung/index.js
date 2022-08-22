import React from "react";

import IndexPage from "../../components/common/index-page";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import Banner from "../../components/banner";
import Hiring from "../../components/hiring";

function HiringPages(props) {
  return (
    <>
      <IndexPage />

      <Header />
      <Banner />

      <Hiring />

      <Footer />
    </>
  );
}

export default HiringPages;
