import React from 'react';
import banner from '../assets/sec3.png';
function Section3() {
  return (
    <div
      id='key-features'
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        minHeight: '400px',
        color: 'white',
      }}
      className='d-flex justify-content-center align-items-center flex-column'
    >
      <div className='p-4 '>
        <p className='fs-2' style={{ maxWidth: '670px' }}>
          ‘’ We have created an environment ideal for building craft. Our goal
          is to be recognized as the best tennis performance centre in the
          world. ”
        </p>
        <div
          style={{ height: '1px', maxWidth: '670px', background: 'white' }}
        ></div>
        <div className='mt-4'>
          <p className='mb-0'>John Doe</p>
          <p className='mb-0'>chairman</p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
