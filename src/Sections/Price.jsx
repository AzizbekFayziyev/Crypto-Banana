import React from 'react'
import price1 from "../Images/price1.png"
import price2 from "../Images/price2.png"
import price3 from "../Images/price3.png"
import tarif1 from "../Images/tarif1.png"
import tarif2 from "../Images/tarif2.png"
import tarif3 from "../Images/tarif3.png"

export default function Price() {
    return (
        <section id="price" className='container'>
            <h1 className="title"  data-aos="fade-up">SOVRINLAR</h1>

            <div className="prices row">
                <div className="col-xl-4 col-md-6 col-12"  data-aos="zoom-in">
                    <div className="box">
                        <img src={price1} alt="Apple Watch" />
                        <h2>Аpple watch и Аirpods</h2>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-12" data-aos="zoom-in">
                    <div className="box">
                        <img src={price2} alt="iPhone" />
                        <h2>iPhone</h2>
                    </div>
                </div>
                <div className="col-xl-4 col-md-6 col-12" data-aos="zoom-in">
                    <div className="box">
                        <img src={price3} alt="Apple Watch" />
                        <h2>Macbook Pro</h2>
                    </div>
                </div>
            </div>


            <div className="tarif row">
                <h1 className="title">MENTORINGDA ISHTIROK OLISH TARIFLARI</h1>

                <div className="col-xl-4 col-md-6 col-12" data-aos="zoom-in">

                    <div className="d-flex align-items-center justify-content-center">
                        <img src={tarif1} alt="tarif1" />
                        <h1 className="titles">
                            START
                        </h1>
                    </div>

                    <div className="line"></div>

                    <h2>Minimal kapital:</h2>
                    <p>10-100 ming</p>

                    <div className="line"></div>

                    <h3>Video darsliklarga kirish:</h3>
                    <div className="btn-price">
                        46+ videolar va matinli darslar
                    </div>

                    <div className="line"></div>

                    <h2>Modullar:</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> Kirish moduli</li>
                        <li><i class="fa-solid fa-play"></i> Asosiy modul</li>
                        <li>
                            <i class="fa-solid fa-play"></i> Asosiy modul:
                            <ul>
                                <li>
                                    investitsiyalar
                                </li>
                                <li>
                                    IDO
                                </li>
                                <li>
                                    Hunters
                                </li>
                                <li>
                                    staking
                                </li>
                                <li>
                                    dehqonchilik
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h2>Qo'shimcha modullar:</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> moliyaviy savodxonlik</li>
                        <li><i class="fa-solid fa-play"></i> Shaxsiy rivojlanish</li>
                    </ul>

                    <div className="line"></div>

                    <h2>Chatlar:</h2>
                    <ul className='row'>
                        <div className="col-6">
                            <li><i class="fa-solid fa-play"></i> Umumiy chatlar</li>
                            <li><i class="fa-solid fa-play"></i> Invest chatlar</li>
                            <li><i class="fa-solid fa-play"></i> IDO chatlar</li>
                        </div>
                        <div className="col-6">
                            <li><i class="fa-solid fa-play"></i> Farmers chatlar</li>
                            <li><i class="fa-solid fa-play"></i> Hunters chatlar</li>
                        </div>
                    </ul>

                    <div className="line"></div>

                    <h2>Kanallar:</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> Banana Crypto Kanal</li>
                        <li><i class="fa-solid fa-play"></i> Invest Kanal</li>
                        <li><i class="fa-solid fa-play"></i> IDO Kanal</li>
                        <li><i class="fa-solid fa-play"></i> Farmers Kanal</li>
                        <li><i class="fa-solid fa-play"></i> Hunters Kanal</li>
                    </ul>

                    <div className="line"></div>

                    <h2>Qo'llab-quvvatlash</h2>

                    <ul>
                        <li><i class="fa-solid fa-play"></i> Uy vazifasini platformada tekshirish</li>
                        <li><i class="fa-solid fa-play"></i> Shaxsiy telegram dialoglarida kurator bilan muloqot</li>
                        <li><i class="fa-solid fa-play"></i> Har ikki haftada qo'ng'iroq qiladi</li>
                        <li><i class="fa-solid fa-play"></i> Banana Crypto xususiy kanali</li>
                    </ul>

                    <div className="line"></div>

                    <div className="btn-price">
                        Offlayn Qatnashish
                    </div>

                    <div className="line"></div>

                    <div className="sub">
                        <h3>Keyingi oqimda ishtirok etish uchun quyida so‘rov qoldiring:</h3>
                        <div className="btn-global">
                            OLDINDAN YOZILISH
                        </div>
                        <p><span>To'lov rejasini olish uchun shaklda so'rov qoldiring va menejer siz bilan bog'lanadi.</span></p>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 col-12" data-aos="zoom-in">

                    <div className="d-flex align-items-center justify-content-center">
                        <img src={tarif2} alt="tarif2" />
                        <h1 className="titles">
                            PRO
                        </h1>
                    </div>

                    <div className="line"></div>

                    <h2>Minimal kapital:</h2>
                    <p>100-200 ming</p>

                    <div className="line"></div>

                    <h3>Video darsliklarga kirish:</h3>
                    <div className="btn-price">
                        50+ videolar va matinli darslar
                    </div>

                    <div className="line"></div>

                    <h2>Modullar:</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> Kirish moduli</li>
                        <li><i class="fa-solid fa-play"></i> Asosiy modul</li>
                        <li>
                            <i class="fa-solid fa-play"></i> Asosiy modul:
                            <ul>
                                <li>
                                    investitsiyalar
                                </li>
                                <li>
                                    IDO
                                </li>
                                <li>
                                    Hunters
                                </li>
                                <li>
                                    staking
                                </li>
                                <li>
                                    dehqonchilik
                                </li>
                                <li>
                                    <span>P2P va arbitraj (asosiy strategiyalar)</span>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h2>Qo'shimcha modullar:</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> moliyaviy savodxonlik</li>
                        <li><i class="fa-solid fa-play"></i> Shaxsiy rivojlanish</li>
                    </ul>

                    <div className="line"></div>

                    <h2>Chatlar:</h2>
                    <ul className='row'>
                        <div className="col-6">
                            <li><i class="fa-solid fa-play"></i> Umumiy chatlar</li>
                            <li><i class="fa-solid fa-play"></i> Invest chatlar</li>
                            <li><i class="fa-solid fa-play"></i> IDO chatlar</li>
                        </div>
                        <div className="col-6">
                            <li><i class="fa-solid fa-play"></i> Farmers chatlar</li>
                            <li><i class="fa-solid fa-play"></i> Hunters chatlar</li>
                            <li><i class="fa-solid fa-play"></i> P2P chatlar</li>
                        </div>
                    </ul>

                    <div className="line"></div>

                    <h2>Kanallar:</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> Banana Crypto Kanal</li>
                        <li><i class="fa-solid fa-play"></i> Invest Kanal</li>
                        <li><i class="fa-solid fa-play"></i> IDO Kanal</li>
                        <li><i class="fa-solid fa-play"></i> Farmers Kanal</li>
                        <li><i class="fa-solid fa-play"></i> Hunters Kanal</li>
                    </ul>

                    <div className="line"></div>

                    <h2>Qo'llab-quvvatlash</h2>

                    <ul>
                        <li><i class="fa-solid fa-play"></i> Uy vazifasini platformada tekshirish</li>
                        <li><i class="fa-solid fa-play"></i> Shaxsiy telegram dialoglarida kurator bilan muloqot</li>
                        <li><i class="fa-solid fa-play"></i> Har ikki haftada qo'ng'iroq qiladi</li>
                        <li><i class="fa-solid fa-play"></i> Banana Crypto xususiy kanali</li>
                        <li><i class="fa-solid fa-play"></i> <span>P2P savdo kundaliklarini tekshirish</span></li>
                    </ul>

                    <div className="line"></div>

                    <div className="btn-price">
                        Offlayn Qatnashish
                    </div>

                    <div className="line"></div>

                    <div className="sub">
                        <h3>Keyingi oqimda ishtirok etish uchun quyida so‘rov qoldiring:</h3>
                        <div className="btn-global">
                            OLDINDAN YOZILISH
                        </div>
                        <p><span>To'lov rejasini olish uchun shaklda so'rov qoldiring va menejer siz bilan bog'lanadi.</span></p>
                    </div>
                </div>

                <div className="col-xl-4 col-md-6 col-12" data-aos="zoom-in">

                    <div className="d-flex align-items-center justify-content-center">
                        <img src={tarif3} alt="tarif3" />
                        <h1 className="titles">
                            PRIVATE
                        </h1>
                    </div>

                    <div className="line"></div>

                    <h2>Minimal kapital:</h2>
                    <p>3-5 mln</p>

                    <div className="line"></div>

                    <h3>Video darsliklarga kirish:</h3>
                    <div className="btn-price">
                        56+ videolar va matinli darslar
                    </div>

                    <div className="line"></div>

                    <h2>Modullar:</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> Kirish moduli</li>
                        <li><i class="fa-solid fa-play"></i> Asosiy modul</li>
                        <li>
                            <i class="fa-solid fa-play"></i> Asosiy modul:
                            <ul>
                                <li>
                                    investitsiyalar
                                </li>
                                <li>
                                    IDO
                                </li>
                                <li>
                                    Hunters
                                </li>
                                <li>
                                    staking
                                </li>
                                <li>
                                    dehqonchilik
                                </li>
                                <li>
                                    <span>P2P va arbitraj (ilg'or strategiyalar)</span>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <h2>Qo'shimcha modullar:</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> moliyaviy savodxonlik</li>
                        <li><i class="fa-solid fa-play"></i> Shaxsiy rivojlanish</li>
                    </ul>

                    <div className="line"></div>

                    <h2>Chatlar:</h2>
                    <ul className='row'>
                        <div className="col-6">
                            <li><i class="fa-solid fa-play"></i> Umumiy chatlar</li>
                            <li><i class="fa-solid fa-play"></i> Invest chatlar</li>
                            <li><i class="fa-solid fa-play"></i> IDO chatlar</li>
                        </div>
                        <div className="col-6">
                            <li><i class="fa-solid fa-play"></i> Farmers chatlar</li>
                            <li><i class="fa-solid fa-play"></i> Hunters chatlar</li>
                            <li><i class="fa-solid fa-play"></i> P2P chatlar</li>
                        </div>
                    </ul>

                    <div className="line"></div>

                    <h2>Kanallar:</h2>
                    <ul>
                        <li><i class="fa-solid fa-play"></i> Banana Crypto Kanal</li>
                        <li><i class="fa-solid fa-play"></i> Invest Kanal</li>
                        <li><i class="fa-solid fa-play"></i> IDO Kanal</li>
                        <li><i class="fa-solid fa-play"></i> Farmers Kanal</li>
                        <li><i class="fa-solid fa-play"></i> Hunters Kanal</li>
                    </ul>

                    <div className="line"></div>

                    <ul>
                        <li><i class="fa-solid fa-play"></i> Uy vazifasini platformada tekshirish</li>
                        <li><i class="fa-solid fa-play"></i> Shaxsiy telegram dialoglarida kurator bilan muloqot</li>
                        <li><i class="fa-solid fa-play"></i> Har ikki haftada qo'ng'iroq qiladi</li>
                        <li><i class="fa-solid fa-play"></i> Banana Crypto xususiy kanali</li>
                        <li><i class="fa-solid fa-play"></i> P2P savdo kundaliklarini tekshirish</li>
                        <li><i class="fa-solid fa-play"></i> <span>Dinar bilan shaxsiy suhbat, qo'ng'iroqlar, shaxsiy uchrashuv</span></li>
                        <li><i class="fa-solid fa-play"></i> <span>Har bir kapital uchun individual strategiya</span></li>
                    </ul>

                    <div className="line"></div>

                    <div className="btn-price">
                        Offlayn Qatnashish
                    </div>

                    <div className="line"></div>

                    <div className="sub">
                        <h3>Keyingi oqimda ishtirok etish uchun quyida so‘rov qoldiring:</h3>
                        <div className="btn-global">
                            OLDINDAN YOZILISH
                        </div>
                        <p><span>To'lov rejasini olish uchun shaklda so'rov qoldiring va menejer siz bilan bog'lanadi.</span></p>
                    </div>
                </div>

            </div>

            <div className="sub" data-aos="fade-up">
                <h1 className="title">
                YANGI strimning dastlabki ro'yxatiga qo'shiling
                </h1>
                <div className="btn-global">
                    RO'YXATDAN O'TISH
                </div>
            </div>

        </section>
    )
}
