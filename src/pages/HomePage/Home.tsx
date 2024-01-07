/* eslint-disable @typescript-eslint/no-unused-vars */
import { Carousel } from "antd";
import { IHeroCarouselSlide } from "../../types";
import image1 from "./images/home-accessories-slider1-scaled-1.jpg";
import image2 from "./images/home-accessories-slider2-scaled-1.jpg";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";
import "./Home.scss";
const heroCarousel: IHeroCarouselSlide[] = [
  {
    id: 1,
    image: image1,
    heading: "Favorite Items",
    beforeDescription: "Skullcandy Push Active True Wireless ",
    description:
      "Appear, dry there darkness they're seas, dry waters thing fly midst above. ",
  },
  {
    id: 2,
    image: image2,
    heading: "Trending",
    beforeDescription: "Charger Aluminum Pad & Watch Charger Station",
    description:
      "Appear, dry there darkness they're seas, dry waters thing fly midst above. ",
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
                  <a href="#">
                   <span>
                   Shop Now
                    </span> 
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
      </div>
      <Footer />
    </>
  );
};
export default Home;
