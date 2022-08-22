import React, { useState } from "react";
import Head from "next/head";

import IndexPage from "../../components/common/index-page";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import Contact from "../../components/contact";

function ContactPages() {
  return (
    <>
      <IndexPage />

      <Header />

      <Contact />

      <Footer />
    </>
  );
}

export default ContactPages;
