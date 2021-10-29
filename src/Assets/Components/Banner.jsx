import React from 'react'

function Banner() {
    return (
        <section>
            <div className="banner__section">
                <section>
                <img src={process.env.PUBLIC_URL + '/Img/AdtralzaGlobal.png'} alt="logo af adtralza" />
                <p>Adtralza® is a new treatment for adult patients with moderate-to-severe atopic dermatitis (eczema) who are candidates for systemic therapy.</p>
                </section>
                <img src={process.env.PUBLIC_URL + '/Img/adultPatiens.WebP'} alt="biliede af en kvinde i tre forskellige stater af medicin brug" className="banner__patiens__img"/>
            </div>
        </section>
    )
}

export default Banner
