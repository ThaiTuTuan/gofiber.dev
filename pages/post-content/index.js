import React from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import PostDetails from "../../components/post-details";
import SidebarPosts from "../../components/sidebar-post";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function PostContent(props) {
  const { data } = props;

  const { data: listPost, error } = useSWR(
    `${process.env.api_wp}/posts?per_page=10&_embed`,
    fetcher
  );

  let dataSidebar =
    listPost &&
    listPost.length > 0 &&
    listPost.map((item) => ({
      title: item.title.rendered,
      image: item._embedded["wp:featuredmedia"][0].source_url,
      slug: item.slug,
    }));

  return (
    <>
      <Header />

      <div className="py-4 px-2">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3 col-span-1 bg-white border p-0 mb-3 rounded-lg">
              <PostDetails data={data} />
            </div>
            <div className="">
              <h3 className="mb-6 text-left text-4xl font-bold">
                Tin liên quan
              </h3>
              {dataSidebar &&
                dataSidebar.map((dt, index) => {
                  return <SidebarPosts data={dt} key={index} />;
                })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default PostContent;
