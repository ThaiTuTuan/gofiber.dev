import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FireIcon,
  ShieldExclamationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

function Solutions() {
  return (
    <>
      <div className="bg-white px-2">
        <div
          className="container mx-auto"
          style={{
            backgroundImage: "url(https://gofiber.b-cdn.net/bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <h3 className="text-4xl font-medium py-4">Giải pháp của chúng tôi</h3>
          <div className="flex justify-around items-center flex-col lg:flex-row">
            <div className="">
              <Image
                className=""
                src="https://gofiber.b-cdn.net/key-solution.gif"
                alt=""
                width="500"
                height="500"
                // layout="responsive"
              />
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
              <div className="flex flex-col lg:mt-14">
                <Link href="">
                  <a className=" bg-white cursor-pointer single-about-us flex items-center justify-center flex-col h-56 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-2  shadow-lg shadow-slate-100 transform-gpu transition ease-in-out duration-300 w-full p-6 hover:text-white lg:w-56">
                    <div className="icon">
                      <FireIcon className="h-[60px] w-[60px]" strokeWidth={1} />
                    </div>
                    <h3 className="text-md font-normal mt-2 text-center">
                      Hệ thống Bug Bounty & Vulnerability Disclosure
                    </h3>
                  </a>
                </Link>
                <Link href="">
                  <a className="mt-8 bg-white cursor-pointer single-about-us flex items-center justify-center flex-col h-56 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-2  shadow-lg shadow-slate-100 transform-gpu transition ease-in-out duration-300 w-full p-6 hover:text-white lg:w-56">
                    <ShieldExclamationIcon
                      className="h-[60px] w-[60px]"
                      strokeWidth={1}
                    />
                    <h3 className="text-md font-normal mt-2 text-center">
                      Hệ thống cảnh báo điểm yếu và rà soát lỗ hổng bảo mật tự
                      động
                    </h3>
                  </a>
                </Link>
              </div>
              <div className="flex flex-col">
                <Link href="">
                  <a className=" bg-white cursor-pointer single-about-us flex items-center justify-center flex-col h-56 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-2  shadow-lg shadow-slate-100 transform-gpu transition ease-in-out duration-300 w-full p-6 hover:text-white lg:w-56">
                    <div className="icon">
                      <GlobeAltIcon
                        className="h-[60px] w-[60px]"
                        strokeWidth={1}
                      />
                    </div>
                    <h3 className="text-md font-normal mt-2 text-center">
                      Hệ thống gắn nhãn Website Tín nhiệm mạng
                    </h3>
                  </a>
                </Link>
                <Link href="">
                  <a className="mt-8 bg-white cursor-pointer single-about-us flex items-center justify-center flex-col h-56 rounded-md hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:-translate-y-2 shadow-lg shadow-slate-100 transform-gpu transition ease-in-out duration-300 w-full p-6 hover:text-white lg:w-56">
                    <div className="icon">
                      <LightningBoltIcon
                        className="h-[60px] w-[60px]"
                        strokeWidth={1}
                      />
                    </div>
                    <h3 className="text-md font-normal mt-2 text-center">
                      Hệ thống phân tích và chia sẻ nguy cơ tấn công mạng
                    </h3>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solutions;
