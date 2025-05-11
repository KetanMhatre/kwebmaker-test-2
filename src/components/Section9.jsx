import React from 'react';
import styled from 'styled-components';
import left from '../assets/first.png';
import right from '../assets/second.png';
import arrow from '../assets/arrow.png';
import dot from '../assets/dot.png';
import { Col, Container, Row } from 'react-bootstrap';

const SectionWrapper = styled.div`
  margin-top: 600px;

  @media (max-width: 991.98px) {
    margin-top: 100px;
  }
`;

function Section9() {
  return (
    <SectionWrapper className='pt-5 pt-lg-0'>
      <Container fluid>
        <Row>
          <Col className='p-0' xs={12} lg={6}>
            <div
              style={{
                backgroundImage: `url(${left})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px',
                width: '100%',
                color: 'white',
              }}
              className='d-flex align-items-center justify-content-center img-fluid'
            >
              <div style={{ maxWidth: '500px' }}>
                <div className='position-relative'>
                  <p className='mb-0 fw-bold ' style={{ fontSize: '36px' }}>
                    Our Coaches
                  </p>
                  <img
                    src={dot}
                    alt='dot-icon'
                    className='position-absolute'
                    style={{
                      top: 0,
                      right: 105,
                      width: '10px',
                      height: '10px',
                    }}
                  />
                </div>
                <p className='mb-0 fw-light mt-4' style={{ fontSize: '16px' }}>
                  Lorem Ipsum has been the industry's standard <br /> dummy text
                  ever since the 1500s,
                </p>
                <p className='mb-0 fw-light mt-5' style={{ fontSize: '16px' }}>
                  read more{' '}
                  <span>
                    <img src={arrow} alt='arrow-img' />
                  </span>
                </p>
              </div>
            </div>
          </Col>
          <Col className='p-0' xs={12} lg={6}>
            <div
              style={{
                backgroundImage: `url(${right})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '300px',
                width: '100%',
                color: 'white',
              }}
              className='d-flex align-items-center justify-content-center img-fluid'
            >
              <div style={{ maxWidth: '500px' }}>
                <div className='position-relative'>
                  <p className='mb-0 fw-bold ' style={{ fontSize: '36px' }}>
                    Events
                  </p>
                  <img
                    src={dot}
                    alt='dot-icon'
                    className='position-absolute'
                    style={{
                      top: 0,
                      left: 110,
                      width: '10px',
                      height: '10px',
                    }}
                  />
                </div>
                <p className='mb-0 fw-light mt-4' style={{ fontSize: '16px' }}>
                  Lorem Ipsum has been the industry's standard <br /> dummy text
                  ever since the 1500s,
                </p>
                <p className='mb-0 fw-light mt-5' style={{ fontSize: '16px' }}>
                  read more{' '}
                  <span>
                    <img src={arrow} alt='arrow-img' />
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
}

export default Section9;
