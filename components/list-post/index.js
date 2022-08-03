import React from "react";
import useSWR from "swr";
import ItemPost from "../common/item-post";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ListPosts() {
  const { data, error } = useSWR(
    `${process.env.api_wp}/posts?per_page=16&_embed`,
    fetcher
  );

  if (error) return <div>failed to load</div>;

  let listPost =
    data &&
    data.length > 0 &&
    data.map((item) => ({
      title: item.title.rendered,
      image: item._embedded["wp:featuredmedia"][0].source_url,
      slug: item.slug,
    }));

  return (
    <>
      <div className="py-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="uppercase text-4xl font-bold text-center mb-0 py-4 lg:leading-snug">
            Tin tức mới cập nhật
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
            {listPost &&
              listPost.map((dt, index) => {
                return <ItemPost data={dt} key={index} />;
              })}
          </div>

          <div className="w-full text-center py-4">
            <button className="mx-auto whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              Xem thêm
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
