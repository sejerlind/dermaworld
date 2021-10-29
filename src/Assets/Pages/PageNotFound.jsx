import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNotFound() {
    return (
        <section className="Page__not__found">
            <h1>404</h1>
            <h2>PAGE NOT FOUND</h2>
            <p>We can't find the page you are looking for to back to the home page here</p>
            <button><NavLink to="home">Back to home</NavLink></button>
        </section>
    )
}

export default PageNotFound
