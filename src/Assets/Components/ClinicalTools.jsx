import React from 'react'
import { NavLink } from 'react-router-dom';


function ClinicalTools() {
    return (
        <section className="ClinicalTools__section">
                <h5 className="ClinicalTools__overskrift">Clinical tools - at a glance</h5>
                <section className="ClinicalTools__card__section">
                    <section className="ClinicalTools__section__felx">
                        <img src={process.env.PUBLIC_URL + '/Img/ClinicalToolsImg1.WebP'} alt="biliede af en sygeplejerske" />
                            <div>
                                <p className="ClinicalTools__underOverskrift">Dosing guide</p>
                                <p>Adtralza® has a straightforward dosing regimen, with 150 mg prefilled syringes(1). </p>
                                <NavLink to="/#">Learn more about application and dosing</NavLink>
                            </div>
                    </section>
                    <section className="ClinicalTools__section__felx">
                        <img src={process.env.PUBLIC_URL + '/Img/ClinicalToolsImg2.WebP'} alt="biliede af en som bruger medicin" />
                            <div>
                                <p className="ClinicalTools__underOverskrift">Patient injection made simple</p>
                                <p>This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza® carton.</p>
                                <NavLink to="/#">Watch the video</NavLink>
                            </div>
                    </section>
                </section>
                
        </section>
    )
}

export default ClinicalTools
