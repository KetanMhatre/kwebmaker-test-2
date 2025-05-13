import React from 'react';
import styled from 'styled-components';
import background from '../assets/secFourBack2.jpeg';
import arrow from '../assets/rightArrow.png';
import firstImg from '../assets/fourFirst.png';
import secondImg from '../assets/fourSecond.png';
import { Col, Container, Row } from 'react-bootstrap';

const dataOne = [
  'First venue in the world',
  'First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium',
  'First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location',
  'First tennis academy in the world to have capabilities to stage WTA & ATP events too',
  'First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius',
  'First one stop tennis academy in Asia Pacific',
];
const dataTwo = [
  'First venue in the world',
  'First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium',
  'First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location',
  'First tennis academy in the world to have capabilities to stage WTA & ATP events too',
  'First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius',
  'First one stop tennis academy in Asia Pacific',
];

const SectionWrapper = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  @media (max-width: 991px) {
    background-image: none;
  }
`;

const ImageCol = styled(Col)`
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  img {
    object-fit: cover;
    height: 500px;
    width: 100%;

    @media (max-width: 768px) {
      height: auto;
      max-height: 300px;
    }
  }
`;

const Section4 = () => {
  return (
    <SectionWrapper>
      <Container style={{ paddingTop: '200px' }}>
        <Row>
          <Col md={8}>
            <div className='d-flex flex-column justify-content-center'>
              <p className='fs-2 fw-bolder mb-0'>Key Features</p>
              <p className='mb-0 mt-3'>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <button
              style={{
                background: '#99B81B',
                borderRadius: '20px',
                marginTop: '40px',
              }}
              className='px-5 py-3 border-0 text-white float-end'
            >
              Register Now
            </button>
          </Col>
        </Row>
        <Row className='pt-5'>
          <Col md={6} className='p-4'>
            <div style={{ maxWidth: '480px' }}>
              {dataOne.map((data, idx) => {
                return (
                  <div key={idx} className='mb-3 d-flex'>
                    <span>
                      <img src={arrow} alt='arrow' />
                    </span>
                    <p className='mb-0 text-content ms-2 fs-6'>{data}</p>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col md={6} className='p-4'>
            <div style={{ maxWidth: '480px' }}>
              {dataTwo.map((data, idx) => {
                return (
                  <div key={idx} className='mb-3 d-flex'>
                    <span>
                      <img src={arrow} alt='arrow' />
                    </span>
                    <p className='mb-0 text-content ms-2 fs-6'>{data}</p>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '80px' }}>
          <Col>
            <Row className='d-flex justify-content-between align-items-center'>
              <Col md={6}>
                <p className='fs-2 fw-bold mb-0'>A Glimpse of Excellence</p>
                <p className='mb-0 mt-2'>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </Col>
              <Col md={6}>
                <button
                  style={{
                    background: '#99B81B',
                    borderRadius: '20px',
                    marginTop: '40px',
                  }}
                  className='px-5 py-3 border-0 text-white float-end'
                >
                  Register Now
                </button>
              </Col>
            </Row>

            <Row className='mt-5' style={{ paddingTop: '50px' }}>
              <ImageCol md={4}>
                <img src={firstImg} alt='first image' className='img-fluid' />
              </ImageCol>
              <ImageCol md={8} className='mt-5 mt-md-0'>
                <img src={secondImg} alt='second image' className='img-fluid' />
              </ImageCol>
            </Row>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Section4;
