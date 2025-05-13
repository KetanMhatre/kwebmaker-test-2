import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../assets/logo.png';
import dash from '../assets/footer-dash.png';
import callIcon from '../assets/call.png';
import emailIcon from '../assets/email.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/insta.png';
import youtube from '../assets/youtube.png';
import back from '../assets/footer-back.png';
function Section10() {
  return (
    <div style={{ marginTop: '100px' }}>
      <Container>
        <Row>
          <Col
            lg={4}
            className='d-flex align-items-center justify-content-center justify-content-lg-start'
          >
            <img src={logo} alt='' style={{ height: '107.14px' }} />
          </Col>
          <Col lg={8} className='mt-4 mt-lg-0'>
            <Row className='text-capitalize text-center text-lg-start'>
              <Col md={2}>
                <a
                  href='/about-us'
                  className='mb-0 d-block text-black text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  about us
                </a>
              </Col>
              <Col md={2} className='mt-2 mt-lg-0'>
                <a
                  href='/coaches'
                  className='mb-0 d-block text-black text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  coaches
                </a>
              </Col>
              <Col md={2} className='mt-2 mt-lg-0'>
                <a
                  href='/news'
                  className='mb-0 d-block text-black text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  news
                </a>
              </Col>
              <Col md={2} className='mt-2 mt-lg-0'>
                <a
                  href='/matches'
                  className='mb-0 d-block text-black text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  matches
                </a>
              </Col>
              <Col md={2} className='mt-2 mt-lg-0'>
                <a
                  href='/events'
                  className='mb-0 d-block text-black text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  events
                </a>
              </Col>
              <Col md={2} className='mt-2 mt-lg-0'>
                <a
                  href='/faqs'
                  className='mb-0 d-block text-black text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  FAQs
                </a>
              </Col>
            </Row>

            <Row className='text-capitalize mt-lg-4 mt-0 text-center text-lg-start'>
              <Col md={2} className='mt-2 mt-lg-0'>
                <a
                  href='/programs'
                  className='mb-0 d-block text-black text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  programs
                </a>
              </Col>
              <Col md={2} className='mt-2 mt-lg-0'>
                <a
                  href='/amenities'
                  className='mb-0 d-block text-black text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  amenities
                </a>
              </Col>
              <Col md={2} className='mt-2 mt-lg-0'>
                <a
                  href='/blogs'
                  className='mb-0 d-block text-black text-decoration-none'
                  style={{ fontSize: '16px' }}
                >
                  blogs
                </a>
              </Col>
            </Row>

            <Row className='mt-5 mb-5'>
              <Col>
                <div>
                  <img src={dash} alt='dash' className='img-fluid' />
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={5}>
                <div className='text-center text-md-start'>
                  <p
                    className='mb-0 fw-medium text-capitalize'
                    style={{ fontSize: '20px', color: '#99B81B' }}
                  >
                    signature slam academy
                  </p>
                  <p
                    className='mb-0 text-capitalize mt-3 '
                    style={{ fontSize: '16px' }}
                  >
                    30 wills hill road, lovedale, nSW
                  </p>
                  <div className='d-flex align-items-center justify-content-center justify-content-md-start mt-3'>
                    <img
                      src={callIcon}
                      alt='call-icon'
                      style={{ height: '20px', width: '20px' }}
                    />
                    <p className='mb-0 ms-3' style={{ fontSize: '16px' }}>
                      + 91 5642589752
                    </p>
                  </div>
                  <div className='d-flex align-items-center justify-content-center justify-content-md-start mt-3'>
                    <img
                      src={emailIcon}
                      alt='email-icon'
                      style={{ height: '20px', width: '20px' }}
                    />
                    <p className='mb-0 ms-3' style={{ fontSize: '16px' }}>
                      info@ssagroup.com
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={7} className='text-center'>
                <div className='mt-3 mt-md-0'>
                  <p
                    className='mb-0 fw-medium text-capitalize'
                    style={{ fontSize: '20px', color: '#99B81B' }}
                  >
                    Connect with us
                  </p>
                </div>
                <div className='d-flex justify-content-center gap-3 mt-3'>
                  <img
                    src={facebook}
                    alt='facebook'
                    style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                  />
                  <img
                    src={twitter}
                    alt='twitter'
                    style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                  />
                  <img
                    src={instagram}
                    alt='instagram'
                    style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                  />
                  <img
                    src={youtube}
                    alt='youtube'
                    style={{ height: '30px', width: '30px', cursor: 'pointer' }}
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className='mt-5'>
          <Col className='p-0'>
            <div
              style={{
                backgroundImage: `url(${back})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',

                color: 'white',
              }}
            >
              <Container>
                <div className='d-flex flex-column flex-lg-row  justify-content-between pt-2 pb-2 text-center gap-3 gap-lg-0'>
                  <p className='mb-0 ' style={{ fontSize: '16px' }}>
                    terms and condition
                  </p>
                  <p className='mb-0 ' style={{ fontSize: '16px' }}>
                    © 2023 all rights reserved www.signatureslamacademy.com
                  </p>
                  <p className='mb-0 ' style={{ fontSize: '16px' }}>
                    privacy policy
                  </p>
                </div>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section10;
