import React from "react";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function NewsHighLight(props) {
  const { data } = props;

  const show_posts_newest = () => {
    var result = null;
    if (data && data.length > 0) {
      const newArray = [...data];
      result = newArray.map((dt, index) => {
        let embeded = dt._embedded;
        if (index === 0) {
          return (
            <Link href={`posts/${dt.slug}`} key={index}>
              <a>
                <div
                  className="thumbnail-post-large rounded-lg bg-no-repeat bg-center hover:scale-[1.005] ease-in duration-200"
                  style={{
                    backgroundImage: `url(${embeded["wp:featuredmedia"][0].source_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                ></div>
                <h4 className="text-xl font-bold py-2">{dt.title.rendered}</h4>
                <div
                  className="text-justify"
                  dangerouslySetInnerHTML={{ __html: dt.excerpt.rendered }}
                />
              </a>
            </Link>
          );
        }
      });
    }
    return result;
  };

  const show_posts_newest1 = () => {
    var result = null;
    if (data && data.length > 0) {
      const newArray = [...data];
      result = newArray.map((dt, index) => {
        let embeded = dt._embedded;
        if (index > 0) {
          return (
            <Link href={`posts/${dt.slug}`} key={index}>
              <a>
                <div
                  className="thumbnail-post-medium rounded-lg bg-no-repeat bg-center hover:scale-[1.005] ease-in duration-200"
                  style={{
                    backgroundImage: `url(${embeded["wp:featuredmedia"][0].source_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                ></div>
                <h4 className="text-lg font-bold py-2">{dt.title.rendered}</h4>
              </a>
            </Link>
          );
        }
      });
    }
    return result;
  };

  return (
    <>
      <div className="py-4 px-2">
        <div className="container mx-auto">
          <h3 className="text-4xl font-medium py-4">Tin Nổi Bật</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
            {show_posts_newest(data)}
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1 md:px-2 lg:gap-7">
              {show_posts_newest1(data)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsHighLight;
