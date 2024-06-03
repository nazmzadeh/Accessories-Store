import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import "./ProductCard.scss";
import { IProductCardProps } from "../../types";

const ProductCard = (props: IProductCardProps) => {
  return (
    <>
      <Card
        cover={<img alt="example" src={props.imageUrl} />}
        className="product-card"
      >
        <Meta title={props.productTitle} className="product-title" />
        <button>Add to cart</button>
      </Card>
    </>
  );
};

export default ProductCard;
