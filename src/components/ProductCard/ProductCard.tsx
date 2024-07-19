import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import "./ProductCard.scss";
import { IProductCardProps } from "../../types";
import Button from "../Button/Button";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../features/cartItemsSlice";

const ProductCard = (props: IProductCardProps) => {
  const dispatch = useAppDispatch();

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
          <Button
            onClick={() =>
              dispatch(
                addToCart({
                  id: props.id,
                  name: props.productTitle,
                  quantity: 1,
                })
              )
            }
            text={"Add to cart"}
          ></Button>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
