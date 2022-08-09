import React, { useState } from "react";
import Head from "next/head";

import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import Contact from "../../components/contact";

function ContactPages() {
  return (
    <>
      <Head>
        <title>Liên Hệ</title>
      </Head>

      <Header />

      <Contact />

      <Footer />
    </>
  );
}

export default ContactPages;
