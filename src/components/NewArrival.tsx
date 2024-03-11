"use client";
import React from "react";
import Container from "./Container";
import Product from "./Product";
import { ProductProps } from "../../type";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
interface Props {
  products: ProductProps[];
  bg: string;
}

const NewArrival = ({ products, bg }: Props) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Container className="-mt-60">
      <div className={`${bg}`}>
        <Slider {...settings}>
          {products?.map((item: ProductProps) => (
            <div key={item?._id} className="px-2">
              <Product product={item} key={item._id} bg={""} />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default NewArrival;
