import React from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import Banner from "../../components/banner";
import Hiring from "../../components/hiring";

function HiringPages(props) {
  return (
    <>
      <Header />
      <Banner />

      <Hiring />

      <Footer />
    </>
  );
}

export default HiringPages;
