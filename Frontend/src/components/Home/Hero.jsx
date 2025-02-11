//! BANNIERE

import Img480 from "../../img/bank-tree-480.avif";
import Img950 from "../../img/bank-tree-950.avif";
import Img1650 from "../../img/bank-tree-1650.avif";


const Hero = () => {
    return (
      <div className="hero">
        <img
          className="hero-image"
          src={Img1650}
          alt="A serene bank tree representing financial stability"
          srcSet={`${Img480} 480w, ${Img950} 950w, ${Img1650} 1650w`}
          sizes="(max-width: 768px) 100vw, 50vw"
          width="100%"
          height="auto"
          loading="lazy"
      />

        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    );
  };
  
  export default Hero;