import _ from "lodash";
import React from "react";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
};
export const Artists = ({ artists }) => {
  console.log("artists", artists);
  if (_.isEmpty(artists)) {
    return <div>Some thing wrong with data</div>;
  }
  return (
    <div>
      <div className="mb-[20px]">
        <div className="flex items-center justify-between">
          <div className="font-medium text-lg capitalize font-mono">
            {artists?.title}
          </div>
          <div className="text-sm capitalize font-mono">Tất cả</div>
        </div>
        {/* <div className="grid grid-cols-5 gap-3 lg:grid-cols-3">
          {artists &&
            artists?.items
              .filter((ele, index) => index <= 4)
              .map((item) => {
                return (
                  <div className="relative" key={item.id}>
                    <div>
                      <img
                        src={item?.thumbnail}
                        alt=""
                        className="object-cover rounded-xl"
                      />
                    </div>
                    <div className="p-2 absolute bottom-0 text-center left-0 right-0 rounded-b-xl text-white bg-black/50 w-full font-mono">
                      {item?.name}
                    </div>
                  </div>
                );
              })}
        </div> */}
      </div>
      <Slider {...settings}>
        {artists &&
          artists?.items.map((item) => {
            return (
              <div className="relative" key={item.id}>
                <div>
                  <img
                    src={item?.thumbnail}
                    alt=""
                    className="object-cover rounded-xl"
                  />
                </div>
                <div className="p-2 absolute bottom-0 text-center left-0 right-0 rounded-b-xl text-white bg-black/50 w-full font-mono">
                  {item?.name}
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};
