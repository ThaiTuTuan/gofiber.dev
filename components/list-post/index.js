import React, { useState, useEffect } from "react";
import useSWR from "swr";
import ItemPost from "../common/item-post";
import BtnLoading from "../common/button/loading";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ListPosts(props) {
  const { data } = props;
  const [itemPosts, setItemPosts] = useState(16);

  var listPosts =
    data &&
    data.length > 0 &&
    data?.map((x) => ({
      title: x.title.rendered,
      image: x._embedded["wp:featuredmedia"][0].source_url,
      slug: x.slug,
    }));

  return (
    <>
      <div className="py-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="uppercase text-3xl font-bold text-center mb-0 py-4 lg:leading-snug lg:text-4xl">
            Tin tức mới cập nhật
          </h2>
          <div className="px-2 grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-4">
            {listPosts &&
              listPosts?.map((dt, index) => {
                if (index < itemPosts)
                  return <ItemPost data={dt} key={index} />;
              })}
          </div>
          {itemPosts >= listPosts.length ? (
            ""
          ) : (
            <div className="w-full text-center py-4">
              <button
                onClick={() => {
                  setItemPosts(itemPosts + 4);
                }}
                className="mx-auto whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Xem thêm
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
