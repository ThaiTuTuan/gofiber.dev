import React from "react";
import { useRouter } from "next/router";

import Header from "../../components/common/header";
import Banner from "../../components/banner";
import NewsHighLight from "../../components/news-highlight";
import CheckTools from "../../components/check-tools";
import Solutions from "../../components/solutions";
import Utilities from "../../components/utilities";
import NetworkSecurity from "../../components/network-security";
import Footer from "../../components/common/footer";

function Homes(props) {
  const { data } = props;
  return (
    <>
      <Header />
      <Banner />
      <NewsHighLight data={data} />
      <CheckTools />
      <Solutions />
      <Utilities />
      <NetworkSecurity />
      <Footer />
    </>
  );
}

export default Homes;