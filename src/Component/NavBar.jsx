import { motion as m } from "framer-motion";
import { IconAnimation, NavBarAnimation,item, item1 } from "../Animatio";
import * as React from "react";

function Navbar() {
  const [showMenu, setShowMenu] = React.useState(true);
  const [scrolling, setScrolling] = React.useState(false);
  const [isSecondPage, setSecondPage] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let leaveTimeout; 

  const hideMenuWithDelay = () => {
    clearTimeout(leaveTimeout);
    leaveTimeout = setTimeout(() => {
      setShowMenu(false);
    }, 3000); 
  };

  const getIcon = () => {
     if (showMenu){
      return (
        <m.span 
          variants={IconAnimation}
          initial= "hidden"
          animate= "show"
          class="material-symbols-outlined">
            home
        </m.span>
      );
    } else if (scrolling && !showMenu) {
      return (
        <m.span 
         variants={IconAnimation}
         initial= "hidden"
         animate= "show"
        class="material-symbols-outlined">
          taunt
        </m.span>
      );
    } else {
      return (
        <m.span 
          variants={IconAnimation}
          initial= "hidden"
          animate= "show"
          class="material-symbols-outlined">
            home
        </m.span>
      );
    }
  };

  React.useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY >= 1100) {
        setScrolling(true);
        setSecondPage(true);
      } else {
        setScrolling(false);
        setSecondPage(false);
      }
    };

    window.addEventListener('scroll', scrollHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setShowMenu(false);
    }, 5000);
  }, [])

  return (
    <m.div
      variants={NavBarAnimation}
      initial= "hidden"
      animate= "show"
    >
      <nav className='Navbar' >
        <div>
          <m.button 
            variants={item} 
            className={`abouts ${showMenu ? 'showMenu' : ''}
                        ${isSecondPage ? 'second-page-button' : ''}`} 
            onMouseEnter={setShowMenu} 
            onMouseLeave={hideMenuWithDelay}
            href="#about-section" 
            onClick={() => scrollToSection('about-section')}
          >
            <span class="material-symbols-outlined">
                taunt
              </span>
          </m.button>
          
          <m.button 
            variants={item} 
            className={`skills ${showMenu ? 'showMenu' : ''}
               ${isSecondPage ? 'second-page-button' : ''}`} 
            onMouseEnter={setShowMenu} 
            onMouseLeave={hideMenuWithDelay}
          >
            <div class="material-symbols-outlined">
              code
            </div>
          </m.button>
            
          <m.button 
            variants={item1} 
            className={`home ${showMenu ? 'showMenu' : ''}
              ${isSecondPage ? 'second-page-button' : ''}`} 
            onMouseEnter={setShowMenu} 
            onMouseLeave={hideMenuWithDelay}
            data-target="home"
            href="#home-section" 
            onClick={() => scrollToSection('home')}
          >
              {getIcon()}
          </m.button>

          <m.button 
            variants={item} 
            className={`exp ${showMenu ? 'showMenu' : ''}
              ${isSecondPage ? 'second-page-button' : ''}`} 
            onMouseEnter={setShowMenu} 
            onMouseLeave={hideMenuWithDelay}
          >
            <span class="material-symbols-outlined">
              work
            </span>
          </m.button>

          <m.button 
            variants={item} 
            className={`proj ${showMenu ? 'showMenu' : ''}
              ${isSecondPage ? 'second-page-button' : ''}`} 
            onMouseEnter={setShowMenu} 
            onMouseLeave={hideMenuWithDelay}
          >
            <span class="material-symbols-outlined">
              fact_check
             </span>
          </m.button>

        </div>
      </nav>
    </m.div>
  );
}

export default Navbar;