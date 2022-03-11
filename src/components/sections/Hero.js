import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

  /*import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.css';*/


const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section {...props} className={outerClasses} id="heroSection">
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1
              className="mt-0 mb-16 reveal-from-bottom"
              data-reveal-delay="200"
            >
              Find top colleges in{" "}
              <span className="text-color-primary">India</span>
            </h1>
            <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="400" style={{visibility:"hidden" ,fontWeight: "bold"}}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas congue, odio non posuere semper, lectus erat pulvinar
                leo.
              </p>
              {/*<div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Dropdown>
                    <Dropdown.Toggle color="primary" id="dropdown-basic">
                      Course Name
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Engineering</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Medical</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Commerce</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Location
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Bangalore</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Mumbai</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Delhi</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://cruip.com/"
                  >
                    Get started
                  </Button>
                </ButtonGroup>
              </div>*/}
              <div class="input-group">
  <div class="form-outline">

    <input id="search-input" type="search" class="form-control" placeholder="Search..."/>
    <button class="btn" form="form1" >Search</button>
  </div>
  
</div>
            </div>
          </div>
          {/*<div
            className="hero-figure reveal-from-bottom illustration-element-01"
            data-reveal-value="20px"
            data-reveal-delay="800"
          >
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require("./../../assets/images/video-placeholder.jpg")}
                alt="Hero"
                width={896}
                height={504}
              />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
          videoTag="iframe" />*/}
        </div>
      </div>
    </section>
    
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
