import React from 'react'
import Logo from "../Images/logo.png"
import homeImg from "../Images/main-bg.png"

export default function Home() {
    return (
        <section id='home' className='container'>

            <nav className='home-nav' data-aos="fade-right">
                <img src={Logo} alt="Crypto Banana" />
            </nav>

            <div className="home-main">

                <div className="home-text" data-aos="fade-up-right">

                    <h2>Dinara Fasxutdinovning “Banan kriptosi” ustozi</h2>
                    <h1>Har qanday kapital bilan kriptovalyuta bozorida o'sish bo'yicha bosqichma-bosqich reja</h1>

                    <div className="sub">
                        <h3>Yangi oqimning dastlabki roʻyxati uchun roʻyxatdan oʻting:</h3>
                        <button className="btn-global">
                            ISHTIROK ETISH
                        </button>
                    </div>

                    <div className="info">
                        <div className="item">
                            <p><span>Boshlanadi:</span></p>
                            <p>Tez orada</p>
                        </div>
                        <div className="item">
                            <p><span>Davomiyligi:</span></p>
                            <p>3 OY</p>
                        </div>
                        <div className="item">
                            <p><span>Kirish:</span></p>
                            <p>6 OY</p>
                        </div>
                    </div>

                </div>

                <div className="img">
                <img src={homeImg} alt="home-Img" />
                <div className="text" data-aos="fade-up-left">
                <p>Kripto - 21-asr nefti</p>
                <p><span>@Nodejs5</span></p>
                </div>
                </div>

            </div>

            <div className="line"></div>

        </section>
    )
}
