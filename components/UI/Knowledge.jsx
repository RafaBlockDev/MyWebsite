import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Knowledge" />
            <h4 className="mt-4 mb-5">What do I know?</h4>

            <Slider {...settings}>
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/react-2.png"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>React & Next</h6>
                    <h6>Level: 8/10</h6>
                  </div>
                </div>

                <p>
                  I know react framework to create website, I have experience building
                  website applications for a lot of client, also for my own projects.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/eth.png"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Solidity & RUST</h6>
                    <h6>Level: 9/10</h6>
                  </div>
                </div>

                <p>
                  My strongest languages are Solidity and RUST, specially for the creation
                   of smart contracts in Ethereum or Solana.
                </p>
              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/java-script.png"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Javascript / Typescript</h6>
                    <h6>Level: 8/10</h6>
                  </div>
                </div>
                <p>
                  I also use Javascript and Typescript to build website applications
                   and also fo interact with the logic of the smart contract.
                </p>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
