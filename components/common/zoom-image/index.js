import React, { useCallback, useState } from "react";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function ZoomImage(props) {
  return (
    <Zoom>
      <img
        className={props.className || ""}
        src={props?.src || ""}
        alt={props?.alt || "gofiber"}
        layout="responsive"
        style={{
          cursor: "pointer",
        }}
      />
    </Zoom>
  );
}

export default ZoomImage;
