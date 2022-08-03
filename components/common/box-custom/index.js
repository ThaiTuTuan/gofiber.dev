import React from "react";
import Link from "next/link";
import Image from "next/image";

function BoxCustom(props) {
  const { data } = props;
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-3 ">
        {data.length > 0 &&
          data.map((item, index) => {
            return (
              <Link href="" key={index}>
                <a className="bg-white cursor-pointer single-about-us flex items-center justify-center flex-col h-44 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-2 shadow-lg shadow-slate-100 transform-gpu transition ease-in-out duration-300 hover:text-white">
                  <div className="icon">
                    <Image
                      alt=""
                      src={item.img}
                      width={60}
                      height={60}
                      layout="intrinsic"
                    />
                  </div>
                  <h3 className="text-md font-medium mt-2">{item.title}</h3>
                </a>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default BoxCustom;
