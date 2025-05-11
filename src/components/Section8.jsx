import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from '../assets/sec8-banner.png';
import trophyImg from '../assets/trophy.png';
import first from '../assets/sec8-first.png';
import second from '../assets/sec8-second.png';
import third from '../assets/sec8-third.png';
import fourth from '../assets/sec8-four.png';
import play from '../assets/play.png';
import styled from 'styled-components';

const PositionWrapper = styled.div`
  position: absolute;
  top: -100px;
  left: 13%;
  z-index: 10;
  color: white;

  @media (max-width: 991.98px) {
    left: 0;
    position: unset;
    color: black;
  }
`;

const PositionBottomWrapper = styled.div`
  position: absolute;
  bottom: -400px;
  right: 13%;
  z-index: 10;

  @media (max-width: 991.98px) {
    left: 0;
    position: unset;
  }
`;

const FeatureBox = styled.div`
  width: 120px;
  border-radius: 20px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  margin-top: 0.5rem;

  @media (max-width: 991.98px) {
    background: #99b81b;
    color: white;
  }
`;

const FeatureText = styled.p`
  font-size: 13px;
  margin-bottom: 0;
  font-weight: 300;
  color: black;

  @media (max-width: 991.98px) {
    color: white;
  }
`;

function Section8() {
  return (
    <>
      <style>{`
    @media (max-width: 991.98px) {
      .responsive-margin-top-1 {
        margin-top: 50px !important;
      }
        .responsive-margin-top-2 {
        margin-top: 80px !important;
      }
    }
   @media only screen and (max-width: 700px) {
      .specDiv {
        padding: 20px !important;
      }
      
    }


  `}</style>
      <div id='facilities' className='responsive-margin-top-1' style={{ marginTop: '100px' }}>
        <Container className='text-center text-lg-start'>
          <Row>
            <Col className='p-0'>
              <div>
                <p className='mb-0 fw-bold' style={{ fontSize: '36px' }}>
                  Facilities
                </p>
              </div>
              <div>
                <p className='mb-0 fw-light' style={{ fontSize: '16px' }}>
                  Lorem Ipsum has been the industry's standard <br /> dummy text
                  ever since the 1500s,
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Container
          fluid
          style={{ marginTop: '200px', position: 'relative' }}
          className='p-0 responsive-margin-top-2'
        >
          <div
            className=' text-center d-none d-lg-block'
            style={{
              backgroundImage: `url(${Banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '60px 15px',
              position: 'relative',
              overflow: 'hidden',
              height: '654px',
              zIndex: 1,
            }}
          >
            <img
              src={trophyImg}
              alt='Trophy'
              className='d-none d-md-block img-fluid'
              style={{
                position: 'absolute',
                right: 0,
                top: '0%',
                width: '25%',
                zIndex: 2,
              }}
            />
          </div>

          <PositionWrapper>
            <div className='d-flex gap-5 flex-column flex-lg-row w-100 align-items-center '>
              <div
                className='specDiv'
                style={{ maxWidth: '386px', widt: '100%' }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={first}
                    alt='image'
                    className='img-fluid'
                    style={{
                      width: '100%',
                    }}
                  />
                  <img
                    src={play}
                    alt='play'
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      height: '40px',
                      width: '40px',
                      cursor: 'pointer',
                    }}
                  />
                </div>

                <p
                  className='fw-medium mb-0 mt-2 text-center text-lg-start'
                  style={{ fontSize: '28px' }}
                >
                  Tennis
                </p>

                <div className='d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start'>
                  <FeatureBox>
                    <FeatureText>9 Clay Courts</FeatureText>
                  </FeatureBox>
                  <FeatureBox>
                    <FeatureText>4 Hard Courts</FeatureText>
                  </FeatureBox>
                </div>

                <p
                  className='mb-0 fw-lighter mt-3 text-center text-lg-start'
                  style={{ fontSize: '16px' }}
                >
                  Lorem Ipsum has been the industry's standard <br /> dummy text
                  ever since the 1500s,
                </p>
              </div>

              <div
                className='specDiv'
                style={{ maxWidth: '386px', widt: '100%' }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={second}
                    alt='image'
                    className='img-fluid'
                    style={{
                      width: '100%',
                    }}
                  />
                  <img
                    src={play}
                    alt='play'
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      height: '40px',
                      width: '40px',
                      cursor: 'pointer',
                    }}
                  />
                </div>

                <p
                  className='fw-medium mb-0 mt-2 text-center text-lg-start'
                  style={{ fontSize: '28px' }}
                >
                  Accommodation
                </p>

                <div className='d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start'>
                  <FeatureBox>
                    <FeatureText>9 Clay Courts</FeatureText>
                  </FeatureBox>
                  <FeatureBox>
                    <FeatureText>4 Hard Courts</FeatureText>
                  </FeatureBox>
                </div>

                <p
                  className='mb-0 fw-lighter mt-3 text-center text-lg-start'
                  style={{ fontSize: '16px' }}
                >
                  Lorem Ipsum has been the industry's standard <br /> dummy text
                  ever since the 1500s,
                </p>
              </div>
            </div>
          </PositionWrapper>

          <PositionBottomWrapper className='mt-4 mt-lg-0'>
            <div className='d-flex gap-5 flex-column flex-lg-row w-100 align-items-center align-items-lg-start mt-5 mt-md-0 '>
              <div
                className='specDiv'
                style={{ maxWidth: '386px', widt: '100%' }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={third}
                    alt='image'
                    className='img-fluid'
                    style={{
                      width: '100%',
                    }}
                  />
                  <img
                    src={play}
                    alt='play'
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      height: '40px',
                      width: '40px',
                      cursor: 'pointer',
                    }}
                  />
                </div>

                <p
                  className='fw-medium mb-0 mt-2 text-center text-lg-start'
                  style={{ fontSize: '28px' }}
                >
                  Fitness
                </p>

                <div className='d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start'>
                  <div
                    style={{
                      width: '120px',
                      borderRadius: '20px',
                      background: '#99B81B',
                    }}
                    className='d-flex h-100 justify-content-center  align-items-center py-2 mt-2'
                  >
                    <p
                      className='fw-light mb-0  text-white'
                      style={{ fontSize: '13px' }}
                    >
                      Spa
                    </p>
                  </div>
                  <div
                    style={{
                      width: '120px',
                      borderRadius: '20px',
                      background: '#99B81B',
                    }}
                    className='d-flex h-100 justify-content-center  align-items-center py-2 mt-2'
                  >
                    <p
                      className='fw-light mb-0  text-white'
                      style={{ fontSize: '13px' }}
                    >
                      Spa
                    </p>
                  </div>
                </div>
                <p
                  className='mb-0 fw-lighter mt-3 text-center text-lg-start'
                  style={{ fontSize: '16px' }}
                >
                  Lorem Ipsum has been the industry's standard <br /> dummy text
                  ever since the 1500s,
                </p>
              </div>
              <div
                className='specDiv'
                style={{ maxWidth: '386px', widt: '100%' }}
              >
                <div style={{ position: 'relative' }}>
                  <img
                    src={fourth}
                    alt='image'
                    className='img-fluid'
                    style={{
                      width: '100%',
                    }}
                  />
                  <img
                    src={play}
                    alt='play'
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      height: '40px',
                      width: '40px',
                      cursor: 'pointer',
                    }}
                  />
                </div>

                <p
                  className='fw-medium mb-0 mt-2 text-center text-lg-start'
                  style={{ fontSize: '28px' }}
                >
                  Recovery
                </p>

                <div className='d-flex gap-3 flex-wrap justify-content-center justify-content-lg-start'>
                  <div
                    style={{
                      width: '120px',
                      borderRadius: '20px',
                      background: '#99B81B',
                    }}
                    className='d-flex h-100 justify-content-center  align-items-center py-2 mt-2'
                  >
                    <p
                      className='fw-light mb-0  text-white'
                      style={{ fontSize: '13px' }}
                    >
                      Spa
                    </p>
                  </div>
                  <div
                    style={{
                      width: '120px',
                      borderRadius: '20px',
                      background: '#99B81B',
                    }}
                    className='d-flex h-100 justify-content-center  align-items-center py-2 mt-2'
                  >
                    <p
                      className='fw-light mb-0  text-white'
                      style={{ fontSize: '13px' }}
                    >
                      Spa
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PositionBottomWrapper>
        </Container>
      </div>
    </>
  );
}

export default Section8;
