/* eslint-disable @typescript-eslint/no-unused-vars */
import { Carousel, Row } from "antd";
import { heroCarousel, productCards, searchCategories } from "../../data/data";
import Footer from "../../components/layout/Footer/Footer";
import Header from "../../components/layout/Header/Header";
import "./Home.scss";
import Title from "../../components/Title/Title";
import Tabs from "../../components/Tabs/Tabs";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useContext, useEffect, useState } from "react";
import { IProductCardProps } from "../../types";
import { TabsContext } from "../../context/TabsProvider";

const Home = () => {
  const [products, setProducts] = useState<IProductCardProps[]>([]);
  const { setSelectedTab, selectedTab } = useContext(TabsContext);
  const filteredProducts =
    selectedTab === "All"
      ? products
      : products.filter((product) => product.category.label === selectedTab);
  console.log(filteredProducts);
  useEffect(() => {
    setProducts();
  });
  return (
    <>
      <Header />
      <div className="container">
        <section id="hero-carousel">
          <Carousel autoplay speed={1500} autoplaySpeed={5000} fade>
            {heroCarousel.map((slide) => (
              <div key={slide.id} className="slide-item">
                <div className="img-container">
                  <img src={slide.image} alt="hero-slide" />
                </div>
                <div className="slide-content">
                  <h2> {slide.heading}</h2>
                  <p className="before-description">
                    {" "}
                    {slide.beforeDescription}
                  </p>
                  <p className="description">{slide.description}</p>
                  <button>
                    <a href="#">
                      <span>Shop Now</span>
                      <span className="razzi-svg-icon">
                        <svg
                          aria-hidden="true"
                          role="img"
                          focusable="false"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="0" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </section>
      </div>
      <section id="categories">
        <div className="categories-cards">
          {searchCategories.slice(1).map((card) => (
            <div className="card" key={card.id}>
              <div className="card-image">
                <a href="#">
                  <img src={card.imageUrl} alt="category" />
                </a>
              </div>
              <div className="card-title">
                <a href="#">{card.label}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="products">
        <div className="container">
          <Title text={"Top month Sellers"} />
          <Tabs tabs={searchCategories} />
          <Row className="product-cards">
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                imageUrl={p.imageUrl}
                productTitle={p.productTitle}
                discount={p.discount}
                category={p.category}
              />
            ))}
          </Row>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
