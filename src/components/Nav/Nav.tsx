import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { LogoMark, WordMark } from '../../assets';
import { MenuLinkType, menuLinks } from '../../utils';
import { Button } from '../Button';
import { Link } from '../Link';
import clsx from 'clsx'

const Nav = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isChecked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isChecked]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <nav className={clsx(
      'nav',
      {
        'nav--scrolled' : scrolled
      }
    )}>
      <div className="container">
        <div className="nav__logo">
          <LogoMark />
          <WordMark />
          <span className='chip'>BETA</span>
        </div>
        <div className={clsx(
          "nav__links",
          {
            'nav__links__mobile' : isChecked
          }
        )}>
          <>
            {menuLinks.map((item: MenuLinkType, idx: number) => 
                <Link
                  className={'desktop-medium nav__links__link'}
                  key={idx}
                  link={item} 
                  enabled={location.pathname === item.target}
                />
            )}
            <div className=" nav__cta nav__links__cta">
            <Button
              variant='tertiary'
            >
              Login
            </Button>
            <Button
              variant='secondary'
            >
              Join waitlist
            </Button>
            </div>
          </>
        </div>
        <div className="nav__cta">
          <Button
            variant='tertiary'
          >
            Login
          </Button>
          <Button
            variant='secondary'
          >
            Join waitlist
          </Button>
        </div>

        <label htmlFor="check">
          <input type="checkbox" id="check" onChange={handleCheckboxChange} /> 
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </nav>
  );
};

export default Nav;
