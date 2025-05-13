import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import specOne from '../assets/spec1.png';
import specTwo from '../assets/spec2.png';
import specThree from '../assets/spec3.png';
import specialImg from '../assets/special.png';
function Section5() {
  return (
    <div id='programs'>
      <Container>
        <Row style={{ paddingTop: '100px' }}>
          <Col md={8}>
            <div className='d-flex flex-column justify-content-center '>
              <p className='fs-2 fw-bolder mb-0'>Programs</p>
              <div style={{ maxWidth: '500px' }}>
                <p className='mb-0 mt-3'>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <button
              style={{
                background: '#99B81B',
                borderRadius: '10px',
                marginTop: '40px',
              }}
              className='px-5 py-3 border-0 text-white float-end '
            >
              Register Now
            </button>
          </Col>
        </Row>
        <Row className='mt-5 d-flex justify-content-center'>
          <Col md={4} style={{ maxWidth: '349px', width: '100%' }}>
            <div className='position-relative w-100'>
              <img
                src={specOne}
                alt='image'
                className='img-fluid w-100'
                style={{
                  height: '462px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <div
                className='position-absolute text-white d-flex flex-column align-items-center'
                style={{
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                }}
              >
                <p className='mb-0 ' style={{ fontSize: '28px' }}>
                  Academy
                </p>
                <p className='mb-0  ' style={{ fontSize: '16px' }}>
                  Live and train with us
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={4}
            style={{ maxWidth: '349px', width: '100%' }}
            className='mt-5 mt-md-0'
          >
            <div className=' w-100 position-relative'>
              <img
                src={specTwo}
                alt='image'
                className='img-fluid w-100'
                style={{
                  height: '462px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />

              <div
                className='position-absolute w-100 h-100'
                style={{
                  top: 0,
                  left: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  zIndex: 1,
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />

              <div
                className='position-absolute text-white d-flex flex-column align-items-center'
                style={{
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                  zIndex: '2',
                }}
              >
                <p className='mb-0 ' style={{ fontSize: '28px' }}>
                  Camps
                </p>
                <p className='mb-0' style={{ fontSize: '16px' }}>
                  Train like a pro with us
                </p>
              </div>
            </div>
          </Col>
          <Col
            md={4}
            style={{ maxWidth: '349px', width: '100%' }}
            className='mt-5 mt-xl-0'
          >
            <div className='position-relative w-100'>
              <img
                src={specThree}
                alt='image'
                className='img-fluid w-100'
                style={{
                  height: '462px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <div
                className='position-absolute w-100 h-100'
                style={{
                  top: 0,
                  left: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.4)',
                  zIndex: 1,
                  objectFit: 'cover',
                  borderRadius: '10px',
                }}
              />
              <div
                className='position-absolute text-white d-flex flex-column align-items-center'
                style={{
                  bottom: '10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  textAlign: 'center',
                  zIndex: '2',
                }}
              >
                <p className='mb-0 ' style={{ fontSize: '28px' }}>
                  Performance
                </p>
                <p className='mb-0 ' style={{ fontSize: '16px' }}>
                  Elevate your game with us
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row style={{ marginTop: '100px' }}>
          <Col xs={12} className='p-0'>
            <img src={specialImg} alt='image' className='w-100' />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section5;
