import React, { useState } from "react";
import HeroModal from "./HeroModal";

function Hero() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="hero__section">
      <div className="hero__txt__div">
        <h4>
          Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs
          and symptoms.
        </h4>
        <p>
          By specifically targeting the IL-13 cytokine, Adtralza® inhibits the
          interaction with type II receptors and prevents IL-13-induced
          inflammatory responses in the skin(1,2).{" "}
        </p>
        <p>
          Adtralza® selectively modulates the dysregulated immune system by(1):
        </p>

        <ul>
          <li>— Reducing markers of skin inflammation</li>
          <li>— Improving markers of skin barrier integrity</li>
          <li>— Reducing epidermal thickness</li>
        </ul>

        <div className="hero__btn__div">
          <button className="hero__btn" onClick={() => setIsOpen(true)}>Watch the video</button>

          <HeroModal open={isOpen} onClose={() => setIsOpen(false)}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/caGPkjs-reY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </HeroModal>
        </div>

        <p>Duration: 2:43</p>
      </div>

      <img src={process.env.PUBLIC_URL + "/Img/heroImg.WebP"} alt="" />
    </section>
  );
}

export default Hero;
