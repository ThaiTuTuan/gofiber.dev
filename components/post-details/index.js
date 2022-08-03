import React from "react";
import Image from "next/image";

function PostDetails(props) {
  const { data } = props;
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
        <span className=" text-sm text-gray-600">18/07/2022</span>
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
