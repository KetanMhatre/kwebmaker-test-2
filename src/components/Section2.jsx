import React from 'react';
import secTwo from '../assets/secTwo.png';
import { Col, Container, Row } from 'react-bootstrap';
import first from '../assets/colOne.png';
import second from '../assets/colTwo.png';
import third from '../assets/colThree.png';
import fourth from '../assets/colFour.png';
import styled from 'styled-components';
const ContentWrapper = styled.div`
  padding: 200px 120px 120px 120px;

  @media (max-width: 991px) {
    padding: 0px;
    margin-top: 50px;
    margin-bottom: 70px;
  }
`;
function Section2() {
  return (
    <div style={{ marginBottom: '100px' }} id='about-us'>
      <Container fluid style={{ padding: 0, margin: 0 }}>
        <Row className='justify-content-around w-100'>
          <Col md={4} className='d-none d-lg-block'>
            <div style={{ padding: 0, margin: 0 }}>
              <img
                src={secTwo}
                alt=''
                style={{ display: 'block', margin: 0, padding: 0 }}
              />
            </div>
          </Col>
          <Col
            md={8}
            className='d-flex flex-column justify-content-center align-items-lg-start align-items-center text-center mt-5 mt-lg-0 '
          >
            <div>
              <div>
                <p
                  className='mb-0 fw-normal text-dark'
                  style={{ fontSize: '24px' }}
                >
                  <span className='d-block '>
                    To be the first venue in the world to have{' '}
                    <span className='fw-bold' style={{ color: '#99B81B' }}>
                      60 multi surface courts
                    </span>
                  </span>
                  <span className='d-block'>
                    at one location and establish first one stop tennis academy
                  </span>
                  <span className='d-block'>
                    in the Asia Pacific producing grand slam champions.
                  </span>
                </p>
              </div>
              <div
                className='fw-semibold d-flex gap-5 flex-wrap justify-content-center'
                style={{
                  fontSize: '24px',
                  marginTop: '100px',
                  cursor: 'p',
                }}
              >
                <div>
                  <p className='mb-0'>About Us</p>
                  <div
                    style={{
                      width: '100px',
                      height: '2px',
                      background: '#99B81B',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <div>
                  <p
                    className='mb-0'
                    style={{ color: '#C1C1C1', cursor: 'pointer' }}
                  >
                    Coaches
                  </p>
                </div>
                <div>
                  <p
                    className='mb-0'
                    style={{ color: '#C1C1C1', cursor: 'pointer' }}
                  >
                    Vision
                  </p>
                </div>
                <div>
                  <p
                    className='mb-0'
                    style={{ color: '#C1C1C1', cursor: 'pointer' }}
                  >
                    Mission
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className='container'>
        <Row>
          <Col lg={6} className='d-flex align-items-center'>
            <div className='d-flex justify-content-center align-items-center'>
              <ContentWrapper>
                <h3>About Us</h3>
                <p className='mt-3' style={{ fontSize: '24px' }}>
                  To be the first venue in the world to have 60 multi-surface
                  courts at one location and establish the first one-stop tennis
                  academy in the Asia Pacific, producing grand slam champions.
                </p>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex flex-column justify-content-center'>
                    <span className='fs-1' style={{ color: '#99B81B' }}>
                      20
                    </span>
                    <p className='mb-0 fs-5'>courts</p>
                  </div>
                  <div className='d-flex flex-column justify-content-center'>
                    <span className='fs-1' style={{ color: '#99B81B' }}>
                      12
                    </span>
                    <p className='mb-0 fs-5'>coaches</p>
                  </div>
                  <div className='d-flex flex-column justify-content-center'>
                    <span className='fs-1' style={{ color: '#99B81B' }}>
                      17
                    </span>
                    <p className='mb-0 fs-5'>years</p>
                  </div>
                  <div className='d-flex flex-column justify-content-center'>
                    <span className='fs-1' style={{ color: '#99B81B' }}>
                      10
                    </span>
                    <p className='mb-0 fs-5'>clubs</p>
                  </div>
                </div>
                <button
                  style={{
                    background: '#99B81B',
                    borderRadius: '20px',
                    marginTop: '40px',
                  }}
                  className='px-5 py-3 border-0 text-white'
                >
                  Read more
                </button>
              </ContentWrapper>
            </div>
          </Col>
          <Col lg={6} className='d-flex align-items-center'>
            <div className='container mt-4 '>
              <div
                className='d-flex flex-column flex-md-row mb-3'
                style={{ gap: '1rem' }}
              >
                <div style={{ flex: 2 }}>
                  <img
                    src={first}
                    alt='Top Left'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <img
                    src={second}
                    alt='Top Right'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>

              <div
                className='d-flex flex-column flex-md-row'
                style={{ gap: '1rem' }}
              >
                <div style={{ flex: 1 }}>
                  <img
                    src={third}
                    alt='Bottom Left'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div style={{ flex: 1 }}>
                  <img
                    src={fourth}
                    alt='Bottom Right'
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Section2;
