import React from 'react'
import { NavLink } from 'react-router-dom'

function About() {
    return (
        <section className="about__section">
            <section  className="about__circle">
                    <img src={process.env.PUBLIC_URL + '/Img/about1.svg'} alt="biliede af at ni ud af ti gange gøre medicin noget godt"/>
                    <h3>Long term sustained improvement</h3>
                    <p>9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2, 1, 8*†‡). </p>
                    <NavLink to="/#">See efficacy and trial data</NavLink>
            </section>

            <section  className="about__circle">
                    <img src={process.env.PUBLIC_URL + '/Img/about2.svg'} alt="billede af et hjerte der svæver over en hånd"/>
                    <h3>Improvements in the burden of disease</h3>
                    <p>Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13).</p>
                    <NavLink to="/#">Learn more about quality of life improvements</NavLink>
            </section>

            <section  className="about__circle">
                    <img src={process.env.PUBLIC_URL + '/Img/about3.svg'} alt="billede af et skjold med tjek mark i, som symbol på sikkerhed"/>
                    <h3>Good safety profile</h3>
                    <p>The overall frequency and severity of adverse events with Adtralza® were comparable to placebo at 16 weeks* and 52 weeks(19).</p>
                    <NavLink to="/#">See safety profile </NavLink>
            </section>
        </section>
    )
}

export default About
