import React from 'react'

function KOLVideos() {
    return (
        <section className="KOLVideos__section">
            {/* <div className="KOLVideos__overskrift">
                <h6>KOL Videos - get expert insights here</h6>
                <p>See what Key opinion leaders have to say about their experiences with Adtralza® </p>
            </div> */}
            <section className="KOLVideos__card__section">
                <div>
                    <img src={process.env.PUBLIC_URL + '/Img/KolVideosImg.png'} alt="video link til en info video om KOL" />
                    <div className="KOLVideos__infotxt">
                        <p className="KOLVideos__infotxt__title">Video title</p>
                        <p>Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image</p>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/Img/KolVideosImg.png'} alt="video link til en info video om KOL" />
                    <div className="KOLVideos__infotxt">
                        <p className="KOLVideos__infotxt__title"> Video title</p>
                        <p>Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image</p>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/Img/KolVideosImg.png'} alt="video link til en info video om KOL" />
                    <div className="KOLVideos__infotxt">
                        <p className="KOLVideos__infotxt__title">Video title</p>
                        <p>Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image</p>
                    </div>
                </div>
                <div>
                    <img src={process.env.PUBLIC_URL + '/Img/KolVideosImg.png'} alt="video link til en info video om KOL" />
                    <div className="KOLVideos__infotxt">
                        <p className="KOLVideos__infotxt__title">Video title</p>
                        <p>Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image</p>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default KOLVideos
