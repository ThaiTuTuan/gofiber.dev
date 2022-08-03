import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "../common/box-custom";

function NetworkSecurity() {
  const data = [
    {
      title: "Làm việc từ xa",
      img: "https://gofiber.b-cdn.net/icon-remote.png",
    },
    {
      title: "Học trực tuyến",
      img: "https://gofiber.b-cdn.net/icon-study.png",
    },
    {
      title: "Liên lạc, kết nối",
      img: "https://gofiber.b-cdn.net/icon-connect.png",
    },
    {
      title: "Giải trí",
      img: "https://gofiber.b-cdn.net/icon-entertainment.png",
    },
    {
      title: "Cẩm nang sử dụng iOS an toàn",
      img: "https://gofiber.b-cdn.net/icon-ios.png",
    },
    {
      title: "Cẩm nang sử dụng Android an toàn",
      img: "https://gofiber.b-cdn.net/icon-android.png",
    },
    {
      title: "Cẩm nang sử dụng Windows an toàn",
      img: "https://gofiber.b-cdn.net/icon-windows.png",
    },
    {
      title: "Cẩm nang sử dụng MacOs an toàn",
      img: "https://gofiber.b-cdn.net/icon-ios.png",
    },
  ];
  return (
    <>
      <div className="py-4 bg-slate-50">
        <div className="container mx-auto px-2">
          <h3 className="text-4xl font-medium py-4">
            Nâng cao kiến thức an toàn, an ninh mạng
          </h3>
          <Box data={data} />
        </div>
      </div>
    </>
  );
}

export default NetworkSecurity;
