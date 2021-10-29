import React from 'react'
// import { NavLink } from 'react-router-dom';

function InfoBox() {
    return (
        <section className="infobox__section">

            <p className="infobox__txt">It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)</p>
            <div className="infobox__img__div">
                <img src={process.env.PUBLIC_URL + '/Img/packshot-image.png'} alt="biliede af produktet packshot" />
            </div>

            <div className="infobox__more">
                <p>Learn more about how Adtralza® works and how to use it in treatment.</p>
                {/* <NavLink to="/#"><button><span>Learn more</span></button></NavLink> */}
            </div>
        </section>
    )
}

export default InfoBox
