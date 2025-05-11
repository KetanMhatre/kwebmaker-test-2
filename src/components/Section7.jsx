import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import firstImg from '../assets/sec7-one.png';
import secondImg from '../assets/sec7-two.png';
import thirdImg from '../assets/sec7-three.png';
function Section7() {
  return (
    <div id='coach'>
      <Container>
        <Row style={{ marginTop: '100px' }}>
          <Col md={8}>
            <div className='d-flex flex-column justify-content-center '>
              <p className='fs-2 fw-bolder mb-0'>Meet our professionals</p>
              <div style={{ maxWidth: '500px' }}>
                <p className='mb-0 mt-3'>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <button
              style={{
                background: '#99B81B',
                borderRadius: '20px',
                marginTop: '40px',
              }}
              className='px-5 py-3 border-0 text-white float-end '
            >
              View All
            </button>
          </Col>
        </Row>
        <Row className='mt-5 text-center text-lg-start'>
          <Col md={4}>
            <div>
              <img
                src={firstImg}
                alt='image'
                style={{ width: '100%' }}
                className='img-fluid'
              />
              <p className='mb-0 mt-2 fw-medium' style={{ fontSize: '25px' }}>
                Craig Tiley
              </p>
              <p className='mb-0 mt-2 fw-light '>
                CEO Tennis Australia & <br /> Australian Open
              </p>
            </div>
          </Col>
          <Col md={4} className='mt-5 mt-md-0'>
            <div>
              <img
                src={secondImg}
                alt='image'
                style={{ width: '100%' }}
                className='img-fluid'
              />
              <p className='mb-0 mt-2 fw-medium' style={{ fontSize: '25px' }}>
                Stephen Farrow
              </p>
              <p className='mb-0 mt-2 fw-light'>
                Director - Tournament, Players & <br /> International Relations
              </p>
            </div>
          </Col>
          <Col md={4} className='mt-5 mt-md-0'>
            <div>
              <img
                src={thirdImg}
                alt='image'
                style={{ width: '100%' }}
                className='img-fluid'
              />
              <p className='mb-0 mt-2 fw-medium' style={{ fontSize: '25px' }}>
                Cameron Pearson
              </p>
              <p className='mb-0 mt-2 '>
                Head Major Events - <br /> Tennis Australia
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section7;
