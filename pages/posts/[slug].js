import React from "react";

import PostContent from "../post-content";

function PostContentPages({ posts }) {
  return (
    <>
      <PostContent data={posts} />
    </>
  );
}

export const getStaticPaths = async () => {
  console.log("\nGET STATIC PATHS");
  const response = await fetch(
    `${process.env.api_wp}/posts?per_page=${100}&_embed`
  );
  const data = await response.json();

  return {
    paths: data.map((data) => ({ params: { slug: data.slug } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  console.log("\nGET STATIC PROPS", context.params?.slug);
  const slug = context.params?.slug;
  // if (!slug) return { notFound: true };

  const response = await fetch(
    `${process.env.api_wp}/posts?slug=${slug}&_embed`
  );
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
    revalidate: 300,
  };
};

export default PostContentPages;
