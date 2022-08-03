import React from "react";
import Link from "next/link";
import Image from "next/image";

function ItemPost(props) {
  const { data } = props;
  return (
    <>
      <Link href={`posts/${data.slug}`}>
        <a>
          <div
            className="thumbnail-post-medium rounded-lg bg-no-repeat bg-center hover:scale-[1.005] ease-in duration-200"
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></div>
          <h4 className="text-md font-bold py-2">{data.title}</h4>
        </a>
      </Link>
    </>
  );
}

export default ItemPost;
