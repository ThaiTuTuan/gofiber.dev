import React, { useState, useEffect } from "react";
import useSWR from "swr";
import ItemPost from "../common/item-post";
import BtnLoading from "../common/button/loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ListPosts() {
  //   const [pageCurrent, setPageCurrent] = useState(1);
  const [itemPosts, setItemPosts] = useState(16);
  const [listPost, setListPost] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    getListPosts(itemPosts).then((items) => {
      if (mounted) {
        let listPosts =
          items &&
          items.length > 0 &&
          items.map((x) => ({
            title: x.title.rendered,
            image: x._embedded["wp:featuredmedia"][0].source_url,
            slug: x.slug,
          }));

        setListPost(listPosts);
        setLoading(false);
      }
    });

    // console.log(listPosts);
    return () => (mounted = false);
  }, [itemPosts]);

  async function getListPosts(itemPosts) {
    setLoading(true);
    const response = await fetch(
      `${process.env.api_wp}/posts?per_page=${itemPosts}&_embed`
    );
    const data = await response.json();
    return data;
  }

  return (
    <>
      <div className="py-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="uppercase text-4xl font-bold text-center mb-0 py-4 lg:leading-snug">
            Tin tức mới cập nhật
          </h2>
          <div className="px-2 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
            {listPost &&
              listPost.map((dt, index) => {
                return <ItemPost data={dt} key={index} />;
              })}
          </div>

          <div className="w-full text-center py-4">
            {loading ? (
              <BtnLoading />
            ) : (
              <button
                onClick={() => {
                  setItemPosts(itemPosts + 4);
                }}
                className="mx-auto whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Xem thêm
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
