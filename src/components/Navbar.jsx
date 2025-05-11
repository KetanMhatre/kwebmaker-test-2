import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import logo from '../assets/ssa.png';

const links = [
  'About Us',
  'Matches',
  'Programs',
  'Coaches',
  'Amenities',
  'Events',
  'News',
  'Blogs',
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen((prev) => !prev);

  return (
    <>
      <nav
        className='navbar navbar-expand-lg'
        style={{ position: 'relative', zIndex: 1000 }}
      >
        <div className='container d-flex justify-content-between align-items-center px-3 py-2'>
          {/* Mobile view logo + menu */}
          <div className='d-flex d-lg-none justify-content-between align-items-center w-100'>
            <a className='navbar-brand' href='/'>
              <img src={logo} alt='logo' style={{ height: '40px' }} />
            </a>

            <button
              className='btn border-0'
              onClick={toggleNavbar}
              aria-label='Toggle navigation'
            >
              <HiMenu size={28} color='white' />
            </button>
          </div>

          {/* Desktop view */}
          <a className='navbar-brand d-none d-lg-block me-auto' href='/'>
            <img src={logo} alt='logo' style={{ height: '40px' }} />
          </a>

          <div
            className='collapse navbar-collapse justify-content-center d-none d-lg-flex'
            id='navbarNav'
          >
            <ul className='navbar-nav'>
              {links.map((link, index) => (
                <li className='nav-item mx-2' key={index}>
                  <a href='#' className='nav-link text-capitalize text-white'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className='d-none d-lg-block ms-auto'>
            <button
              className='btn text-white'
              style={{
                border: '1px solid #D2F24F',
                borderRadius: '10px',
                width: '136px',
              }}
            >
              Contact us
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          className='d-lg-none p-3 position-absolute w-100'
          style={{
            top: '70px',
            zIndex: 999,
            background: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <ul className='list-unstyled text-center mb-0'>
            {links.map((link, index) => (
              <li key={index} className='mb-3'>
                <a
                  href='#'
                  className='text-dark text-decoration-none text-capitalize fs-5'
                >
                  {link}
                </a>
              </li>
            ))}
            <li>
              <button
                className='btn mt-2 '
                style={{
                  border: '1px solid #D2F24F',
                  borderRadius: '10px',
                  color: '#000',
                }}
              >
                Contact us
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
