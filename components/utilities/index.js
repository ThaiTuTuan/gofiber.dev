import React from "react";
import Link from "next/link";
import Image from "next/image";
import Box from "../common/box-custom";

function Utilities() {
  const data = [
    {
      title: "Bảo vệ tài khoản",
      img: "https://gofiber.b-cdn.net/icon-bao-ve-tai-khoan.png",
    },
    {
      title: "Tin lừa đảo",
      img: "https://gofiber.b-cdn.net/icon-tin-lua-dao.png",
    },
    {
      title: "Phần mềm hữu ích",
      img: "https://gofiber.b-cdn.net/icon-phan-mem-huu-ich.png",
    },
    {
      title: "Vinh danh",
      img: "https://gofiber.b-cdn.net/icon-vinh-danh.png",
    },
  ];
  return (
    <>
      <div className="py-4 px-2 bg-slate-50">
        <div className="container mx-auto">
          <h3 className="text-4xl font-medium py-4">Tiện ích, Vinh danh</h3>
          <Box data={data} />
        </div>
      </div>
    </>
  );
}

export default Utilities;
