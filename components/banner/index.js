import React from "react";
import Image from "next/image";

import img_banner from "../../assets/images/banner.png";

function BannerComponent(props) {
  return (
    <>
      <div className="bg-blue-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center flex-col p-2 lg:flex-row">
            <div className="w-full lg:w-[50%]">
              <article className="prose prose-sm lg:prose-lg md:mx-auto">
                <h1 className="uppercase text-center mb-0 lg:text-left lg:leading-snug ">
                  Công Ty Công Nghệ Phần Mềm Gobiber
                </h1>
                <p className="text-justify m-0">
                  Công ty Công nghệ phần mềm Gofiber là công ty cung cấp đầy đủ
                  các dịch vụ website về cá cược online đảm bảo tiêu chuẩn chất
                  lượng số 1 châu Á.
                </p>
              </article>
            </div>
            <div className="w-full px-10 py-10 lg:w-[50%] ">
              <Image
                className="animate-[ani1_2s_linear_infinite]"
                src={img_banner}
                alt=""
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BannerComponent;
