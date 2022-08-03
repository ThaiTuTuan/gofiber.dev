import React from "react";
import Link from "next/link";
import Image from "next/image";

import Box from "../common/box-custom";

function CheckTools() {
  const data = [
    {
      title: "Mã độc trong mạng",
      img: "https://gofiber.b-cdn.net/icon-ma-doc.png",
    },
    {
      title: "Lộ lọt thông tin",
      img: "https://gofiber.b-cdn.net/icon-lo-thong-tin.png",
    },
    {
      title: "Lừa đảo trực tuyến",
      img: "https://gofiber.b-cdn.net/icon-lua-dao-truc-tuyen.png",
    },
    {
      title: "Trắc nghiệm an toàn",
      img: "https://gofiber.b-cdn.net/icon-trac-nghiem-an-toan.png",
    },
  ];

  return (
    <>
      <div className="py-4 px-2 bg-slate-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-medium py-4">Công cụ kiểm tra</h3>
          <Box data={data} />
        </div>
      </div>
    </>
  );
}

export default CheckTools;
