import React from "react";
import Image from "next/image";
import { CalendarIcon } from "@heroicons/react/outline";

function formatDate(date) {
  var date = new Date(date);
  return (
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    date.getFullYear()
  );
}

function PostDetails(props) {
  const { data } = props;
  console.log("🚀 ~ file: index.js ~ line 7 ~ PostDetails ~ data", data);
  const createMarkup = () => {
    if (data && data.length > 0) {
      return { __html: data[0].content.rendered };
    } else {
      return { __html: "" };
    }
  };
  return (
    <>
      <div className="p-3">
        <Image
          className="rounded-md rounded-t"
          src={data && data[0]._embedded["wp:featuredmedia"][0].source_url}
          width="100%"
          height="50%"
          alt=""
          layout="responsive"
        />
        <h2 className="mt-10 mb-2 text-4xl font-bold">
          {data && data[0].title.rendered}
        </h2>
        <span className="flex justify-start content-center text-sm text-gray-600">
          <CalendarIcon className="h-[25px] w-[25px] mr-2" strokeWidth={1} />
          {data && formatDate(data[0].date)}
        </span>
        <div className="mt-4 mb-3 overflow-hidden">
          <div
            className="markdown bg-white"
            dangerouslySetInnerHTML={createMarkup()}
          ></div>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
