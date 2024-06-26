import {
  FacebookFilled,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "../Footer/Footer.scss";
import { Col, Row } from "antd";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <Row justify={"space-evenly"} className="footer-row">
          <Col lg={6} md={12} xs={24} className="footer-col">
            <div className="logo">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="84.032"
                  height="23.52"
                  fill="#fff"
                  viewBox="0 0 84.032 23.52"
                >
                  <path
                    d="M2.336-21.344V0H7.264V-8.416L13.024,0H19.04L12.48-8.736a6.716,6.716,0,0,0,2.976-1.632A5.839,5.839,0,0,0,17.12-14.72a6.435,6.435,0,0,0-1.856-4.768,7.635,7.635,0,0,0-5.44-1.856ZM7.264-17.5H8.416a4.815,4.815,0,0,1,2.72.672,2.59,2.59,0,0,1,.992,2.176,2.873,2.873,0,0,1-.8,2.08,4.053,4.053,0,0,1-2.944.928H7.264ZM31.84-12.672a5.354,5.354,0,0,0-4.48-2.08A6.881,6.881,0,0,0,22.4-12.8a8.127,8.127,0,0,0-2.208,5.76A7.552,7.552,0,0,0,22.272-1.7,6.764,6.764,0,0,0,27.616.48,4.756,4.756,0,0,0,31.84-1.728V0h4.608V-14.272H31.84Zm-3.328,1.888a3.856,3.856,0,0,1,2.56.992,3.619,3.619,0,0,1,1.056,2.624,3.625,3.625,0,0,1-1.12,2.688,3.413,3.413,0,0,1-2.4.992,3.785,3.785,0,0,1-2.72-1.12,3.681,3.681,0,0,1-.96-2.56A3.566,3.566,0,0,1,25.984-9.76,3.633,3.633,0,0,1,28.512-10.784Zm25.312-3.488H39.744v3.84h6.3L38.624,0h14.56V-3.84H46.432Zm15.968,0H55.712v3.84h6.3L54.592,0h14.56V-3.84H62.4Zm2.5,0V0H76.9V-14.272Zm-.384-6.08a2.663,2.663,0,0,0,2.688,2.688,2.663,2.663,0,0,0,2.688-2.688,2.663,2.663,0,0,0-2.688-2.688A2.663,2.663,0,0,0,71.9-20.352ZM80.544-2.9A2.88,2.88,0,0,0,83.456.01,2.88,2.88,0,0,0,86.368-2.9a2.88,2.88,0,0,0-2.912-2.91A2.88,2.88,0,0,0,80.544-2.9Z"
                    transform="translate(-2.336 23.04)"
                  ></path>
                </svg>
              </a>
            </div>
            <ul>
              <li>
                <a href="#">
                  <FacebookFilled className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <TwitterOutlined className="social-icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <InstagramOutlined className="social-icon" />
                </a>
              </li>
              <li>
                <a href="whatsapp://send?&phone=+994551234567&text=Hello!">
                  <WhatsAppOutlined className="social-icon" />
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={6} md={12} xs={24} className="footer-col">
            <span>Support</span>
            <div className="footer-link">
              <div>
                <a href="#">Contact Us</a>
              </div>
              <div>
                <a href="#">FAQs</a>
              </div>
              <div>
                <a href="#">Size Guide</a>
              </div>
              <div>
                <a href="#">Shipping & Returns</a>
              </div>
            </div>
          </Col>

          <Col lg={6} md={12} xs={24} className="footer-col">
            <span>Company</span>
            <div className="footer-link">
              <div>
                <a href="#">Our Story</a>
              </div>
              <div>
                <a href="#">Careers</a>
              </div>
              <div>
                <a href="#">Terms & Conditions</a>
              </div>
              <div>
                <a href="#">Privacy & Cookie policy</a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={12} xs={24} className="footer-col">
            <span>Contact</span>
            <div className="footer-link">
              <div>
                <a href="tel:1-888-923-8044">1-888-923-8044</a>
              </div>
              <div>
                <a href="tel:1-888-923-8055">1-888-923-8055</a>
              </div>
              <div>
                <a href="mailto:help@allbirds.com">help@allbirds.com</a>
              </div>
            </div>
          </Col>
        </Row>
        <Row></Row>
      </div>
    </div>
  );
};

export default Footer;
