import React from "react";
import Link from "next/link";

export default function SidebarPosts(props) {
  const { data } = props;
  return (
    <Link href={data.slug}>
      <a className="flex justify-start content-center py-2 border-b border-black-100">
        <span
          className="w-full rounded-md shrink-0 hover:scale-[1.005] ease-in duration-200 "
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: 90,
            height: 60,
          }}
        ></span>
        <h4 className="text-sm font-bold ml-4 ">{data.title}</h4>
      </a>
    </Link>
  );
}
