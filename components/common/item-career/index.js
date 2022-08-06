import React from "react";
import ZoomImage from "../../common/zoom-image";

function ItemCareer(props) {
  const { data } = props;
  const mailTo = "789banca@gmail.com";
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-10 ">
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="item-career my-3 relative rounded-md cursor-pointer hover:shadow-blue-900"
            >
              <ZoomImage src={item.img} className="rounded-md cursor-pointer" />
              <a
                href={`mailto:${mailTo}`}
                className="md:hidden btn-apply-now bg-gradient-to-r from-cyan-500 to-blue-500 py-2 px-4 absolute left-1/2 -translate-x-1/2 bottom-0 font-medium text-white rounded-md mb-12 shadow-lg shadow-cyan-500/50"
              >
                Ứng tuyển ngay
              </a>
              <h5 className="text-lg font-medium mt-2">{`Vị trí: ${item.position}`}</h5>
            </div>
          );
        })}
    </div>
  );
}

export default ItemCareer;
