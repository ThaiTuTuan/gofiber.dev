import Head from "next/head";
import Homes from "./homes";
import IndexPage from "../components/common/index-page";

export default function Home({ posts }) {
  return (
    <div>
      <IndexPage />
      <Homes data={posts} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const response = await fetch(
    `${process.env.api_wp}/posts?per_page=${5}&_embed`
  );
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
};
