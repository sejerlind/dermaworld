import React from 'react'
import LeoLogo from '../Images/LEOlogo.png'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <section className="footer__img__section">
                <img src={LeoLogo} alt="Lea logo" />
            </section>
            <section className="footer__links__section">
                <ul>
                    <li className="footer__links__forste"><NavLink to="/#">Contact</NavLink></li>
                    <li><NavLink to="/#">Imprint</NavLink></li>
                    <li><NavLink to="/#">Conditions</NavLink></li>
                    <li><NavLink to="/#">Terms of use</NavLink></li>
                    <li><NavLink to="/#">Privacy</NavLink></li>
                    <li className="footer__links__siste"><NavLink to="/#">Cookie content</NavLink></li>
                </ul>
            </section>
            <section className="footer__copyright__section">
                <p className="footer__copyright__txt"> © Copyright LEO Pharma 2020 LEO and the LEO Lion Design are registered trademarks of LEO Pharma All rights reserved</p>
                <p className="footer__websitelink">LEO Pharma corporate website</p>
            </section>
        </footer>
    )
}

export default Footer
