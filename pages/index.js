import Head from "next/head";
import Homes from "./homes";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Gofiber.dev</title>
        <meta name="description" content="Gofiber.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
