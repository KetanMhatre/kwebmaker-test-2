import React from 'react';
import Navbar from './Navbar';
import mainBanner from '../assets/mainBanner.png';
import secOneImg from '../assets/seconeimg.png';
import dash from '../assets/dash.png';
import dot from '../assets/dot.png';
import leftArrow from '../assets/leftArrow.png';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
const Wrapper = styled.div`
  text-align: center;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 300px;

  @media only screen and (max-width: 700px) {
    margin-top: 50px;
  }

  @media only screen and (min-width: 600px) and (max-width: 1000px) {
    margin-top: 150px;
  }

  @media only screen and (min-width: 1000px) and (max-width: 1160px) {
    margin-top: 150px;
  }

  @media only screen and (min-width: 1152px) and (max-width: 1279px) {
    margin-top: 200px;
  }

  @media only screen and (min-width: 1280px) and (max-width: 1348px) {
    margin-top: 200px;
  }

  @media only screen and (min-width: 1349px) and (max-width: 1439px) {
    margin-top: 200px;
  }

  @media only screen and (min-width: 1440px) and (max-width: 1499px) {
    margin-top: 200px;
  }
  @media only screen and (min-width: 1500px) and (max-width: 1599px) {
    margin-top: 300px;
  }

  @media only screen and (min-width: 1600px) and (max-width: 1699px) {
  }

  @media only screen and (min-width: 1700px) and (max-width: 1799px) {
  }

  @media only screen and (min-width: 1800px) and (max-width: 1919px) {
  }
`;

const Title = styled.p`
  letter-spacing: 10px;
  font-size: 20px;

  @media (min-width: 576px) {
    font-size: 22px;
  }

  @media (min-width: 768px) {
    font-size: 25px;
  }

  @media (min-width: 992px) {
    font-size: 30px;
  }
`;

const Heading = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 24px;

  @media (min-width: 576px) {
    font-size: 30px;
  }

  @media (min-width: 768px) {
    font-size: 36px;
  }

  @media (min-width: 992px) {
    font-size: 60px;
  }

  span {
    font-weight: 600;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 320px;
  background: white;
  margin-top: 0.5rem;
`;

const BackgroundText = styled.div`
  background-image: url(${secOneImg});
  width: 100%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    letter-spacing: 8px;
    margin-bottom: 0;
    display: flex;
    align-items: center;

    span {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin: 0 0.3rem;

      img {
        height: 0.5em;
        vertical-align: middle;
      }
    }

    @media (min-width: 576px) {
      font-size: 16px;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }

    @media (min-width: 992px) {
      font-size: 20px;
    }
  }
`;

const StyledButton = styled.button`
  background: transparent;
  color: white;
  padding: 0.5rem 1.5rem;
  margin-top: 1.5rem;
  border: 1px solid #d2f24f;
  border-radius: 20px;
`;

function Section1() {
  return (
    <div
      style={{
        backgroundImage: `url(${mainBanner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        position: 'relative',
      }}
    >
      <Navbar />
      <Wrapper>
        <Title>SSA HUNTER VALLEY</Title>
        <Heading>
          Grow Your Game with the <br />
          <span>Professionals</span>
        </Heading>
        <Divider />
        <BackgroundText>
          <p>
            ADOPT
            <span>
              <img src={dot} alt='dot' />
            </span>
            NATURE
            <span>
              <img src={dot} alt='dot' />
            </span>
            DELIVER
          </p>
        </BackgroundText>

        <StyledButton>Register now</StyledButton>
      </Wrapper>
      <div
        style={{
          position: 'absolute',
          right: '0',
          bottom: '10px',
          color: 'white',
        }}
      >
        <div className='d-flex align-items-center gap-2 float-end'>
          <img src={leftArrow} alt='' />
          <p className='mb-0 '>WEATHER</p>
          <img src={dash} alt='' />
        </div>
        <Container
          style={{
            height: '120px',
            background: 'rgba(210, 242, 79, 0.5)',
            width: '300px',
          }}
          className='mt-5 py-2 px-4'
        >
          <Row>
            <Col sm={12} style={{ color: 'white' }}>
              <div>
                <p style={{ fontSize: '24px' }} className=' mb-0 fw-medium'>
                  Hunter Valley
                </p>
              </div>
            </Col>
            <Col xs={5}>
              <div className='position-relative'>
                <p style={{ fontSize: '40px' }} className='fw-bold mb-0'>
                  19
                </p>
                <p
                  className='mb-0 position-absolute'
                  style={{ top: '0', left: '50px', fontSize: '30px' }}
                >
                  °C
                </p>
              </div>
            </Col>
            <Col xs={7}>
              <div>
                <p className='mb-0 fw-bold' style={{ fontSize: '24px' }}>
                  Weather
                </p>
                <p className='mb-0 fw-light' style={{ fontSize: '15px' }}>
                  Saturday, 8pm
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <div className='d-flex align-items-center gap-2 mt-3'>
          <img src={leftArrow} alt='' />
          <p className='mb-0 '>ON GOING MATCHES</p>
          <img src={dash} alt='' />
        </div>
        <div className='d-flex align-items-center gap-2 mt-3 float-end'>
          <img src={leftArrow} alt='' />
          <p className='mb-0 '>SCORES</p>
          <img src={dash} alt='' />
        </div>
      </div>
    </div>
  );
}

export default Section1;
