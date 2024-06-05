import { Card } from "antd";
import Meta from "antd/es/card/Meta";
// import React, { useState } from "react";
import "./ProductCard.scss";
import { IProductCardProps } from "../../types";
import Button from "../Button/Button";

const ProductCard = (props: IProductCardProps) => {
  return (
    <>
      <Card
        cover={
          <a href="#">
            <img alt="card" className="product-card-img" src={props.imageUrl} />
          </a>
        }
        className="product-card"
      >
        <p>
          {props.discount ? (
            <>
              <span className="price original-price">
                ${props.priceOriginal}
              </span>
              <span className="price price-on-discount">
                &nbsp; ${props.price}
              </span>
            </>
          ) : (
            <span className="price">${props.price}</span>
          )}
        </p>
        <a href="#">
          <Meta title={props.productTitle} className="product-title" />
        </a>
        <div className="btn-container">
          <Button text={"Add to cart"}></Button>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
