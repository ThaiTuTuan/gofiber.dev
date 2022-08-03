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

function Home({ posts }) {
  return (
    <>
      <Header />
      <Banner />
      <NewsHighLight />
      <CheckTools />
      <Solutions />
      <Utilities />
      <NetworkSecurity />
      <Footer />
    </>
  );
}

// export async function getStaticProps() {
//   console.log("getStaticProps");
//   const response = await fetch(
//     `https://gofiber.dev/wp-json/wp/v2/posts?per_page=1&_embed`
//   );
//   const data = await response.json();
//   return {
//     props: {
//       posts: data,
//     },
//   };
// }

export default Home;
