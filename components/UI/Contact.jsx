import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Find me in social media, and also book a call with me!
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>Mexico City - Mexico 🇲🇽</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <p>rafafuentesrangel@gmail.com</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="#">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="#">
                <i class="ri-twitter-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
