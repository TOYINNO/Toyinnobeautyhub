import React from "react";
import Product from "./Product";
import { ProductProps } from "../../type";
import Heading from "./Heading";
import Container from "./Container";

interface Props {
  products: ProductProps[];
  title?: string;
}
const Dailydeals = ({ products, title }: any) => {
  return (
    <Container className="w-full pb-20">
      <Heading heading={title} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products?.map((item: ProductProps) => (
          <Product key={item?._id} product={item} bg="#fff" />
        ))}
      </div>
    </Container>
  );
};

export default Dailydeals;
