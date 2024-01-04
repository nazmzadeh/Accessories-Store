/* eslint-disable @typescript-eslint/no-unused-vars */
import { Carousel } from "antd";
import { IHeroCarouselSlide } from "../../types";
import image1 from "./images/apple-watch.jpg";
import image2 from "./images/tv.jpg";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import "./Home.scss";
const heroCarousel: IHeroCarouselSlide[] = [
  {
    id: 1,
    image: image1,
    heading: "New Arrivals",
    beforeDescription: "Your New Apple Watch Series 9",
    description:
      "Super version lorem ipsum dolor , harum dignissimos commodi, quae consectetur esto. ",
  },
  {
    id: 2,
    image: image2,
    heading: "Trending",
    beforeDescription: "Your New TV",
    description:
      "The most advanced TV system ever on iOS. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Carousel autoplay speed={1500} autoplaySpeed={5000} fade>
          {heroCarousel.map((slide) => (
            <div key={slide.id} className="slide-item">
              <div className="img-container">
                <img src={slide.image} alt="hero-slide" />
              </div>
              <div className="slide-content">
                <h2> {slide.heading}</h2>
                <p className="before-description"> {slide.beforeDescription}</p>
                <p className="description">{slide.description}</p>
                <button>
                  <a href="#">Shop Now</a>
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default Home;
