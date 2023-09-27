import SPImg from '../images/SP.JPG';
import NUS from '../images/NUS.jpg';
import Travel from '../images/Travel.png'
import { motion as m, useAnimation, useInView } from 'framer-motion';
import { useEffect } from 'react';
import { AboutAnimation, item1, about_img_1, about_img_2} from '../Animatio';
import { useRef } from 'react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if(isInView) {
      mainControls.start("show");
    }
  }, [isInView]);

  return (
    <m.div 
      ref={ref}
      variants={AboutAnimation}
      initial= "hidden"
      animate= {mainControls}
      id="about-section" 
      className="about-page"
    >
      <div className="about-container">
        <m.h1 variants={item1}>About Me</m.h1>
          <m.div variants={item1} className='about-h4-container'>
            <h4>
              I graduated with Merit in Electrical & Electronic Engineering from Singapore Polytechnic. Currently, I'm pursuing a degree in Computer Science at the National University of Singapore. 
            </h4>
            <h4>
              I've discovered a genuine passion for both design and frontend development. Apart from that, I also enjoy playing basketball and exploring new places through travel.
            </h4>
          </m.div>
      </div>

      <div className="about-image-container">
          <m.img variants={about_img_1} src={SPImg}/>     
          <m.img variants={about_img_2} src={NUS}/>
          <m.img variants={about_img_1} src={Travel}/>
      </div>
    </m.div>
  );
}

export default About;