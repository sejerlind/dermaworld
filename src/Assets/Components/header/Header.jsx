import React from 'react'
import Slidebar from "./Sidebar"
import BigHeader from "./BigHeader"
import { NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

const Header = () => {
    return (
        <section>

            <header>

                <div className="headerHolder">
                    <section className="logo__section">
                        <NavLink to="/"><h1>DERMA</h1><h1 className="header__h1__world">World</h1></NavLink>
                        <section className="leo__section">
                            <p>By </p><b>LEO Pharma</b>
                        </section>
                    </section>
                    <section className="search__section">
                        <input id="search" type="search" placeholder="search" />
                        <label htmlFor="search" type="submit"><i><AiOutlineSearch /></i></label>
                    </section>
                   
                </div> 
                <BigHeader />          
                <Slidebar className="fullSidebar" />
            </header>   
        </section>
    )
}

export default Header
