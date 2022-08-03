import React from "react";
import Custom404 from "../404";
import useSWR from "swr";
import { useRouter } from "next/router";

import PostContent from "../post-content";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function PostContentPages(props) {
  const router = useRouter();
  var slug = router.query;

  const { data, error } = useSWR(
    `${process.env.api_wp}/posts?slug=${slug.postId}&_embed`,
    fetcher
  );

  if (error) return <Custom404 />;

  return (
    <>
      <PostContent data={data} />
    </>
  );
}

export default PostContentPages;
