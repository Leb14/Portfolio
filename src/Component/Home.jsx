import { motion as m } from "framer-motion";
import { AboutAnimation, item} from "../Animatio";

function Home() {
  return (
    <>
    <m.section 
      id= "home"
      className="Home"
      variants={AboutAnimation}
      initial= "hidden"
      animate= "show"
    >
      <m.h5 variants={item} className="Home-description">
        Hello, I'm 
        <m.p variants={item} className="Home-name"> Jin Hao </m.p>
        <m.div variants={item}>
          A passionate front end developer!
        </m.div>
      </m.h5>
    </m.section>
    </>
  );
}

export default Home;