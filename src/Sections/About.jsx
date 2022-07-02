import React from 'react'
import AboutIMg from "../Images/about.png"

export default function About() {
    return (
        <section id='about' className='container'>

            <div className="about row" data-aos="fade-up">

                <div className="col-md-6 col-12">
                    <div className="img">
                        <img src={AboutIMg} alt="About-Me" />
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="text">
                        <h1>Men - DINOR FASHUTDINOV</h1>
                        <p>
                            Men 3 yildan ortiq vaqtdan beri kriptovalyuta savdosi bilan shug'ullanaman va men o'xshash kriptofikrli odamlar hamjamiyatini yarataman.
                        </p>
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <p><span>4 YIL MUVAQD</span> men kichik qishloqdan Qozonga ko'chib o'tdim, shundan so'ng kriptoda ishlay boshladim.</p>
                            </div>
                            <div className="col-md-6 col-12">
                                <p>Kriptovalyuta savdosida <span>150 million ₽</span> dan ortiq kapital yaratildi.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="res" data-aos="fade-up">
                <h2>Mening savdo natijalarim</h2>
                <div className="row">
                    <div className="col-md-6 col-12">
                        <p><span>2019 yil boshi:</span></p>
                        <p>daromad - 100 000 ₽, kapital 100 000 ₽</p>
                        <p><span>2019 yil oxiri:</span></p>
                        <p>daromad - 500.000 ₽, kapital 1.000.000 ₽</p>
                    </div>
                    <div className="col-md-6 col-12">
                        <p><span>2020 yil oxiri:</span></p>
                        <p>daromad - 5 milliondan ortiq, kapital 50 million ₽</p>
                        <p><span>2021 yil oxiri:</span></p>
                        <p>daromad - 10 milliondan ortiq, kapital 150 million ₽</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
