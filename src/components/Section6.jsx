import React from 'react';
import first from '../assets/sec6one.png';
import second from '../assets/sec6Two.png';
import { Col, Container, Row } from 'react-bootstrap';
import golfImg from '../assets/golf.png';
import dash from '../assets/sec6.png';

function Section6() {
  const locations = [
    ['hunter valley golf and country club', '220m'],
    ['rydges resort hunter valley', '550m'],
    ['cressnock airport', '1.7km'],
    ['cressnock CBD', '7km'],
    ['nulkaba public school', '4.8km'],
    ['cressnock hospital', '7.3km'],
    ['mcdonalds, KFC, Oporto', '7km'],
  ];

  return (
    <div style={{ marginTop: '200px' }} id='academy'>
      <Container fluid className='p-0'>
        <Row className='g-0 flex-column flex-lg-row align-items-stretch'>
          <Col xs={12} lg={5} className='p-0'>
            <div
              style={{
                backgroundImage: `url(${first})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
                color: '#fff',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                flex: '1',
              }}
            >
              <div className='d-flex flex-column align-items-center align-items-lg-start text-center text-lg-start'>
                <p className='mb-0' style={{ fontSize: '25px' }}>
                  Launching
                </p>
                <p
                  className='mb-0 text-capitalize'
                  style={{ fontSize: '40px' }}
                >
                  signature slam academy Hunter Valley
                </p>
                <p className='mb-0 mt-3' style={{ fontSize: '25px' }}>
                  SSA Connectivity
                </p>
              </div>

              <div className='d-flex flex-column justify-content-between mt-4 flex-grow-1 m'>
                {locations.map(([label, distance], i) => (
                  <div
                    className='d-flex align-items-center justify-content-between mt-5 mt-lg-0'
                    key={i}
                  >
                    <div className='d-flex align-items-center gap-2'>
                      <img src={golfImg} alt='' />
                      <p
                        className='mb-0 fw-semibold text-capitalize'
                        style={{ fontSize: '16px' }}
                      >
                        {label}
                      </p>
                    </div>
                    <img
                      src={dash}
                      className='img-fluid flex-grow-1 mx-2 d-none d-md-block '
                      alt=''
                      style={{ height: '1px' }}
                    />
                    <p className='mb-0' style={{ fontSize: '16px' }}>
                      {distance}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Col>
          <Col xs={12} lg={7} className='p-0'>
            <div style={{ height: '100%', flex: '1' }}>
              <img
                src={second}
                alt='Section Visual'
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section6;
