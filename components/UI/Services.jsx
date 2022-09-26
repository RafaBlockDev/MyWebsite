import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="Blockchain Development" icon="ri-apps-line" />

                <ServicesItem title="Blockchain Consult" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Blockchain Research"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Blockchain & Web3</h3>
            <h3 className="mb-4">Solutions 👨🏻‍💻</h3>
            <p>
              I solve blockchain or web3 issues, also create model business with Web3
              startups, also consult and develop projects that want to get inside web3 ecosystem,
               and also I do research for projects with ideas for a product and services.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
