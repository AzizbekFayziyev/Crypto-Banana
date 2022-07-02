import React from 'react'
import people1 from "../Images/people1.png"
import people2 from "../Images/people2.png"
import people3 from "../Images/people3.png"
import people4 from "../Images/people4.png"

export default function Curators() {
    return (
        <section id='curators' className='container'>
            <h1 className="title" data-aos="fade-up">BIZNING KURATORLAR</h1>

            <div className="curator row">
                <div className="col-md-6 col-12" data-aos="fade-up-right">
                    <img src={people1} alt="curator 1" />
                </div>
                <div className="col-md-6 col-12" data-aos="fade-up-left">
                    <h2>GLEB</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> Qozog‘istondan Sankt-Peterburgga ko‘chib kelgan.</li>
                        <li><i class="fa-solid fa-play"></i> Kursdan oldin u zargarlik do'konida ishlagan.</li>
                        <li><i class="fa-solid fa-play"></i> Treningning birinchi oyi uchun 200 ming daromad oldi.</li>
                        <li><i class="fa-solid fa-play"></i> 23 yoshida u oyiga million rubl oladi.</li>
                    </ul>
                </div>
            </div>

            <div className="curator row">
                <div className="col-md-6 col-12" data-aos="fade-up-right">
                    <img src={people2} alt="curator 2" />
                </div>
                <div className="col-md-6 col-12" data-aos="fade-up-left">
                    <h2>ALEKSEY</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> 26 yosh</li>
                        <li><i class="fa-solid fa-play"></i> U 70 mingga geofizik bo'lib ishlagan, lekin bir yil oldin ofisni tark etgan.</li>
                        <li><i class="fa-solid fa-play"></i> Bugun u zavq uchun yashaydi
                            va 2000 dollardan ortiq daromad oladi.</li>
                    </ul>
                </div>
            </div>

            <div className="curator row">
                <div className="col-md-6 col-12" data-aos="fade-up-right">
                    <img src={people3} alt="curator 3" />
                </div>
                <div className="col-md-6 col-12" data-aos="fade-up-left">
                    <h2>MAKSIM</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> 28 yosh</li>
                        <li><i class="fa-solid fa-play"></i> Sarmoya kiritgan va tarmoq biznesi bilan shug'ullangan.
                            Men bankda 150 mingga ishlaganman.</li>
                        <li><i class="fa-solid fa-play"></i> Rossiya sport ustasi.</li>
                        <li><i class="fa-solid fa-play"></i> So'nggi 2 hafta ichida men 152 ming rubl ishlab oldim.</li>
                        <li><i class="fa-solid fa-play"></i> Uning daromadi bugungi kunda 1 million rublga etadi.</li>
                    </ul>
                </div>
            </div>


            <div className="curator row">
                <div className="col-md-6 col-12" data-aos="fade-up-right">
                    <img src={people4} alt="curator 4" />
                </div>
                <div className="col-md-6 col-12" data-aos="fade-up-left">
                    <h2>SALIM</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> 26 yosh</li>
                        <li><i class="fa-solid fa-play"></i>Bir yil oldin men ofisda 70 mingga ishlaganman.</li>
                        <li><i class="fa-solid fa-play"></i> Bugun oyiga ko'proq maosh oladi
                            8 ming dollar.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
