import React from "react";
import Head from "next/head";

import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import Banner from "../../components/banner";
import Hiring from "../../components/hiring";

function HiringPages(props) {
  return (
    <>
      <Head>
        <title>Tuyển dụng</title>
      </Head>

      <Header />
      <Banner />

      <Hiring />

      <Footer />
    </>
  );
}

export default HiringPages;
