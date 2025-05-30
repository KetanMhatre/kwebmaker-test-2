import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import secTwo from '../assets/secTwo.png';
import first from '../assets/colOne.png';
import second from '../assets/colTwo.png';
import third from '../assets/colThree.png';
import fourth from '../assets/colFour.png';
import greenDot from '../assets/green-dot.png';
import styled from 'styled-components';

const ContentWrapper = styled.div`
  padding: 200px 80px 120px 0px;

  @media (max-width: 991px) {
    padding: 0px;
    margin-top: 50px;
    margin-bottom: 70px;
  }
`;

function Section2() {
  const [userClick, setUserClick] = useState(1);
  return (
    <>
      <style>{`
      @media only screen and (max-width: 700px) {
   .second-img{
   height:500px !important
   }
  }
  
  
    `}</style>
      <Container
        fluid
        className='position-relative mb-5 mb-lg-0 '
        style={{ overflow: 'hidden' }}
      >
        <div
          style={{
            backgroundImage: `url(${secTwo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'absolute',
            top: 20,
            left: 0,
            width: '453.52px',
            height: '450px',
            zIndex: -1,
          }}
        ></div>
        <Row className='pt-5'>
          <Col
            xs={12}
            className='p-0 d-flex justify-content-center align-items-center'
          >
            <p
              className='mb-0 py-5 text-center'
              style={{ maxWidth: '701px', fontSize: '24px' }}
            >
              To be the first venue in the world to have{' '}
              <span className='fw-bold' style={{ color: '#99B81B' }}>
                60 multi surface courts
              </span>
              <br /> at one location and establish first one stop tennis academy
              in the Asia Pacific producing grand slam champions.
            </p>
          </Col>
          <Col>
            <div
              className='fw-semibold d-flex gap-5 flex-wrap justify-content-center'
              style={{
                fontSize: '24px',
                marginTop: '100px',
                cursor: 'pointer',
              }}
            >
              {['About Us', 'Coaches', 'Vision', 'Mission'].map(
                (label, index) => {
                  const tabIndex = index + 1;
                  const isActive = userClick === tabIndex;
                  return (
                    <div
                      key={label}
                      onClick={() => setUserClick(tabIndex)}
                      className='text-center'
                    >
                      <p
                        className='mb-0'
                        style={{ color: isActive ? '#000' : '#C1C1C1' }}
                      >
                        {label}
                      </p>
                      {isActive && (
                        <div
                          style={{
                            width: '100px',
                            height: '2px',
                            background: '#99B81B',
                            margin: '0 auto',
                          }}
                        />
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </Col>
        </Row>
        <div className='container'>
          <Row>
            <Col lg={6} className='d-flex align-items-center'>
              <div className='d-flex justify-content-center align-items-center'>
                <ContentWrapper>
                  {userClick === 1 && (
                    <div>
                      <div className='position-relative'>
                        <h3 className='fw-bold'>About Us</h3>
                        <img
                          src={greenDot}
                          alt='dot'
                          style={{
                            top: '-10px',
                            left: '120px',
                            height: '10px',
                            width: '10px',
                            position: 'absolute',
                          }}
                        />
                      </div>

                      <p className='mt-3' style={{ fontSize: '24px' }}>
                        To be the first venue in the world to have 60
                        multi-surface courts at one location and establish the
                        first one-stop tennis academy in the Asia Pacific,
                        producing grand slam champions.
                      </p>
                      <div className='d-flex justify-content-between '>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            20
                          </span>
                          <p className='mb-0 fs-5'>courts</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            12
                          </span>
                          <p className='mb-0 fs-5'>coaches</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            17
                          </span>
                          <p className='mb-0 fs-5'>years</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
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
                    </div>
                  )}
                  {userClick === 2 && (
                    <div>
                      <div className='position-relative'>
                        <h3 className='fw-bold'>Coaches</h3>
                        <img
                          src={greenDot}
                          alt='dot'
                          style={{
                            top: '-10px',
                            left: '120px',
                            height: '10px',
                            width: '10px',
                            position: 'absolute',
                          }}
                        />
                      </div>

                      <p className='mt-3' style={{ fontSize: '24px' }}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Molestiae similique quasi omnis perferendis iste
                        dolor dolorum tempora, earum accusantium animi!
                      </p>
                      <div className='d-flex justify-content-between '>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            20
                          </span>
                          <p className='mb-0 fs-5'>courts</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            12
                          </span>
                          <p className='mb-0 fs-5'>coaches</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            17
                          </span>
                          <p className='mb-0 fs-5'>years</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
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
                    </div>
                  )}
                  {userClick === 3 && (
                    <div>
                      <div className='position-relative'>
                        <h3 className='fw-bold'>Vision</h3>
                        <img
                          src={greenDot}
                          alt='dot'
                          style={{
                            top: '-10px',
                            left: '120px',
                            height: '10px',
                            width: '10px',
                            position: 'absolute',
                          }}
                        />
                      </div>

                      <p className='mt-3' style={{ fontSize: '24px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis odio sequi dolor architecto necessitatibus
                        totam eaque, voluptatibus reprehenderit ea esse?
                      </p>
                      <div className='d-flex justify-content-between '>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            20
                          </span>
                          <p className='mb-0 fs-5'>courts</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            12
                          </span>
                          <p className='mb-0 fs-5'>coaches</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            17
                          </span>
                          <p className='mb-0 fs-5'>years</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
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
                    </div>
                  )}
                  {userClick === 4 && (
                    <div>
                      <div className='position-relative'>
                        <h3 className='fw-bold'>Mission</h3>
                        <img
                          src={greenDot}
                          alt='dot'
                          style={{
                            top: '-10px',
                            left: '120px',
                            height: '10px',
                            width: '10px',
                            position: 'absolute',
                          }}
                        />
                      </div>

                      <p className='mt-3' style={{ fontSize: '24px' }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sequi porro repellat quas sunt sapiente ea
                        perferendis quis sint non harum.
                      </p>
                      <div className='d-flex justify-content-between '>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            20
                          </span>
                          <p className='mb-0 fs-5'>courts</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            12
                          </span>
                          <p className='mb-0 fs-5'>coaches</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
                            17
                          </span>
                          <p className='mb-0 fs-5'>years</p>
                        </div>
                        <div className='d-flex flex-column justify-content-center'>
                          <span
                            className='fs-1 fw-bold'
                            style={{ color: '#99B81B' }}
                          >
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
                    </div>
                  )}
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
                  <div className='second-img' style={{ flex: 1 }}>
                    <img
                      src={second}
                      alt='Top Right'
                      className='second-img'
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
      </Container>
    </>
  );
}

export default Section2;
