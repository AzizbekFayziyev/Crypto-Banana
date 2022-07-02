import React from 'react'
import coin from "../Images/btc.png"
import carousel1 from "../Images/carousel1.png"
import carousel2 from "../Images/carousel2.png"
import carousel3 from "../Images/carousel3.png"

export default function Info() {
    return (
        <section id='info' className='container'>

            <h1 className='title' data-aos="fade-up">NEGA HOZIR KRIPTOKARVALYALAR BOZORIGA KIRISH KERAK?</h1>

            <div className="info row">
                <div className="col-md-6 col-12">

                    <div data-aos="fade-up-right" className="item">
                        <h3>NEGA HOZIR KRIPTOKARVALYALAR BOZORiga KIRISH KERAK?</h3>
                        <p>Faqat 2 trillion dollar umumiy kapitallashuvdir. Bir oz va ozgina emas. Taxminan barcha rus kompaniyalarining aktsiyalari 4 ga ko'paytiriladi.</p>
                        <p>Bozor juda yangi va yosh bo'lgani uchun u juda tez o'sib bormoqda. Misol uchun, fond bozori ikki baravar ko'payishi uchun siz taxminan 100 trillion dollarni kiritishingiz kerak.
                            Bu qancha ekanligini tasavvur qila olasizmi?</p>
                        <p>Ammo kriptoning o'sishi ancha oson, chunki kapitallashuv nisbatan kichik. Va bu cryptdagi rentabellik fond bozoriga qaraganda ancha yuqori degan ma'noni anglatadi. 1000 dollar bilan ishlashni boshlagan ko'plab misollar mavjud - millionlab dollar ishlab topdi
                            kriptoda. Shu jumladan men.</p>
                    </div>
                    <div className="item" data-aos="fade-up-right">
                        <h3>CRYPT - KELAJAK.</h3>
                        <p>Afsuski, ushbu texnologiya qanchalik ajoyibligini tasvirlash uchun bitta maqola etarli emas. Sizga Bitcoin va boshqa kriptovalyutalarning afzalliklarini o'rganishni maslahat beraman.</p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="item" data-aos="fade-up-left">
                        <h3>KO'P DAVLATLAR O'Z DIGITAL VALYUTALARINI MUVOFIQLASHNI BOSHLADI.</h3>
                        <p>Avvaliga ular sizga kriptovalyutalarni aytishadi.
                            bu yomon. Va keyin ular o'zlarini yaratadilar.</p>
                        <p>Bitcoinni tartibga sola olmasligi sababli, ular o'zlari boshqarishi mumkin bo'lgan o'zlarining markazlashtirilgan tangalarini yaratishga majbur. Masalan, Xitoy. U barcha konchilarni o'z hududidan chiqarib yubordi, kripto-valyutalar bilan operatsiyalarni noqonuniy deb tan oldi. Va endi ular o'zlarining raqamli yuanlarini yaratmoqdalar.</p>
                    </div>
                    <div className="item" data-aos="fade-up-left">
                        <h3>HEDJ FONDLARI VA YIRIMI KOMPANIYALAR KRIPTOGA KATTA MAQAMDA SARMAYOT QILMOQDA.</h3>
                        <p>Ular potentsialni ko'rishadi. Shu jumladan banklar - kriptoga sarmoya kiriting. Masalan, JPMorgan AQShning eng yirik bankidir.</p>
                        <p>Ushbu ro'yxatni ko'rib chiqing. Bu Bitcoin-ga sarmoya kiritadigan eng yaxshi kompaniyalar. Siz havolani ochishingiz mumkin.</p>
                    </div>
                </div>
            </div>



            <div className="info-two row">

                <h1 className='title' data-aos="fade-up">KIMLAR UCHUN</h1>

                <img src={coin} alt="bit coin" />

                <div className="col-md-6 col-12">
                    <div className="item" data-aos="fade-up-right">
                        <h3>Savdoda yangi boshlanuvchilar</h3>
                        <p>Savdoda qo'lingizni sinab ko'rmoqchimisiz, lekin bozor qanday ishlashini tushunmayapsizmi va xato qilishni xohlamaysizmi, kapitalni to'kib tashlang.</p>
                    </div>

                    <div className="item" data-aos="fade-up-right">
                        <h3>Freelancer</h3>
                        <p>Freelancing moliyaviy chegarangizga erishdingiz va komissiyadan tashqari vaqt va resurslaringizni qayerga sarflashni bilmayapsiz
                            frilanser</p>
                    </div>

                    <div className="item" data-aos="fade-up-right">
                        <h3>Tadbirkor</h3>
                        <p>Kriptovalyutalarga sarmoya kiritish orqali shaxsiy va biznes pulingizni koʻpaytirmoqchimisiz, lekin qaerdan boshlashni bilmayapsizmi?</p>
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="item" data-aos="fade-up-left">
                        <h3>Talaba</h3>
                        <p>har kuni 2-3 bepul soatingiz bor, ularni pulga aylantirish mumkinligini tushunasiz, lekin qanday qilib hali tushunmayapsiz</p>
                    </div>

                    <div className="item" data-aos="fade-up-left">
                        <h3>Yollash uchun xodimlar</h3>
                        <p>Ishda soatlab o'tirishdan, kichik maosh olishdan charchadingiz, lekin siz ish vektorini keskin o'zgartirishdan qo'rqasiz.</p>
                    </div>
                </div>
            </div>

            <div className="sub" data-aos="fade-up">
                <p>Yangi oqimning dastlabki roʻyxati uchun roʻyxatdan oʻting:</p>
                <button className="btn-global">
                    ISHTROK ETISH
                </button>
            </div>

            <div className="intervyu row">
                <h1 className="title" data-aos="fade-up">
                    DASTURDAN O'TGANLAR BILAN SUHBAT
                </h1>

                <div className="col-md-6 col-12" data-aos="fade-up-right">
                    <div className="item item1">
                        <p><i class="fa-solid fa-eye"></i> Ko'rish vaqti 13 daqiqa</p>

                        <div className="text">
                            <p>Gleb. Xitoydan kelgan kripto savdogar</p>
                            <a href="#"><button className='btn-outline'>Intervyuni Ko'rish</button></a>
                        </div>
                    </div>
                    <div className="item item2">
                        <p><i class="fa-solid fa-eye"></i> Ko'rish vaqti 10 daqiqa</p>

                        <div className="text">
                            <p>Banana Money talabasi bilan suhbat. Leninogorskdan Radel</p>
                            <a href="#"> <button className='btn-outline'>Intervyuni Ko'rish</button></a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-12" data-aos="fade-up-left">
                    <div className="item item3">
                        <p><i class="fa-solid fa-eye"></i> Ko'rish vaqti 20 daqiqa</p>

                        <div className="text">
                            <p>Maksimal - oyiga 300 ming daromad</p>
                            <a href="#"><button className='btn-outline'>Intervyuni Ko'rish</button></a>
                        </div>
                    </div>
                    <div className="item item4">
                        <p><i class="fa-solid fa-eye"></i> Ko'rish vaqti 14 daqiqa</p>

                        <div className="text">
                            <p>Rinat. Fotosuratchi - kriptotreyder</p>
                            <a href="#"> <button className='btn-outline'>Intervyuni Ko'rish</button></a>
                        </div>
                    </div>
                </div>

                <div className="line"></div>

                <div className="more" data-aos="fade-up">
                    <a href="#">
                        <button className="btn-outline">
                            BOSHQA TALABLAR SUHBATINI KO‘RING
                        </button>
                    </a>
                </div>
            </div>

            <div className="we row">
                <h1 className="title" data-aos="fade-up">
                    MENTORING BO'YICHA BIZ
                </h1>

                <div className="col-md-4 col-12" data-aos="fade-up">
                    <div className="item">
                        <p>Biz hamfikrlar jamoasini shakllantiramiz</p>
                    </div>
                </div>

                <div className="col-md-4 col-12" data-aos="fade-up">
                    <div className="item">
                        <p>Biz nimani o'rgatamiz
                            biz o'zimiz mashq qilamiz</p>
                    </div>
                </div>

                <div className="col-md-4 col-12" data-aos="fade-up">
                    <div className="item">
                        <p>Ko'rsating va baham ko'ring
                            bizning fikrimiz</p>
                    </div>
                </div>

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={carousel1} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel2} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

            <div className="info-all">
                <h1 className="title"  data-aos="fade-up">MENTORING DASTURI</h1>

                <div className="row">
                    <div className="col-md-6 col-12"  data-aos="fade-up-right">

                        <div className="item">
                            <h2>Kirish moduli</h2>
                            <p><i class="fa-solid fa-play"></i> Trening formati va xususiyatlarining tavsifi, kuratorlar bilan tanishish va mentorlikning batafsil tuzilishi</p>
                            <p><i class="fa-solid fa-play"></i> Platformaning interfeysi va xususiyatlari bilan tanishish</p>
                        </div>

                    </div>

                    <div className="col-md-6 col-12"  data-aos="fade-up-left">
                        <div className="box">
                            <h2>Natija</h2>
                            <p>Siz dastur, darslarni chiqarish jadvali va platformaning funksionalligi bilan tanishasiz va sizga shaxsiy kurator biriktiriladi.</p>
                        </div>

                    </div>
                </div>

                <div className="line"></div>

                <div className="row">
                    <div className="col-md-6 col-12"  data-aos="fade-up-right">
                        <div className="item">
                            <h2>Asosiy modul</h2>
                            <p><i class="fa-solid fa-play"></i> Kripto va blokcheyn sohasiga sho'ng'ing,
                                ma'lumotlar bazasi va CEX va DEX kripto birjalarining umumiy ko'rinishi</p>
                            <p><i class="fa-solid fa-play"></i> Kriptovalyuta bilan ishlashda xavfsizlik</p>
                            <p><i class="fa-solid fa-play"></i> Pul topish imkoniyatlarini taqqoslash
                                va kriptovalyuta bo'yicha strategiyalar</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-12"  data-aos="fade-up-left">
                        <div className="box">
                            <h2>Natija</h2>
                            <p>Loyihalarni tahlil qilishni o'rganing. Siz kripto portfelini to'playsiz va uni muvozanatlashtira olasiz. Boshqa rejalashtirish gorizonti uchun aniq investitsiya strategiyasi bo'ladi. Siz Kriptovalyutalardan tashqari investitsiyalar va boshqa sohalarda Dinor va Aynurning tajribasini o'zlashtirasiz.</p>
                        </div>
                    </div>
                </div>

                <div className="line"></div>

                <div className="row">
                    <div className="col-md-6 col-12"  data-aos="fade-up-right">
                        <div className="item">
                            <h2>Asosiy modul</h2>
                            <h3>1. Investitsiyalar</h3>
                            <p><i class="fa-solid fa-play"></i> Loyihalarni tahlil qilish va tanlash</p>
                            <p><i class="fa-solid fa-play"></i> Investitsion strategiyalar va psixologiya</p>
                            <p><i class="fa-solid fa-play"></i> Ko'rsatkichlar, matematik nazariyalar va qonuniyatlar</p>
                            <p><i class="fa-solid fa-play"></i> Risklarni himoya qilish va moliyalashtirishda yiliga 20-70% ni qanday qilish kerak?</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-12"  data-aos="fade-up-left">
                        <div className="box">
                            <h2>Natija</h2>
                            <p>Siz kripto-sferada barcha asosiy sörfing ko'nikmalariga ega bo'lasiz, xizmatlar, hamyonlar va almashinuvlardan qanday foydalanishni o'rganasiz. Qaysi yo'nalish unga ko'proq mos kelishini tushunasiz. Firibgarlar, xakerlar va hokazolarga tushib qolmaslik uchun xavfsizlik choralarini o'zlashtirasiz, qonun doirasida qanday ishlashni o'rganasiz.</p>
                        </div>
                    </div>
                </div>

                <div className="line"></div>

                <div className="row">
                    <div className="col-md-6 col-12"  data-aos="fade-up-right">
                        <div className="item">
                            <h3>2. Staking va dehqonchilik</h3>
                            <p><i class="fa-solid fa-play"></i> Asbobga umumiy nuqtai</p>
                            <p><i class="fa-solid fa-play"></i> Asosiy ish strategiyalari</p>
                            <p><i class="fa-solid fa-play"></i> Eng yaxshi va tasdiqlangan saytlar</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-12"  data-aos="fade-up-left">
                        <div className="box">
                            <h2>Natija</h2>
                            <p>Siz ushbu vositada oyiga 10-20% o'rtacha tavakkalchilik bilan va yiliga 15-30% minimal risk bilan qanday qilib pul ishlashni o'rganasiz.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-12"  data-aos="fade-up-right">
                        <div className="item">
                            <h3>3. IDO va token savdosi</h3>
                            <p><i class="fa-solid fa-play"></i> Asbobning umumiy ko'rinishi va eng yaxshi IDO saytlari</p>
                            <p><i class="fa-solid fa-play"></i> Ko'p buxgalteriya strategiyasi</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-12"  data-aos="fade-up-left">
                        <div className="box">
                            <h2>Natija</h2>
                            <p>Boshqa sohalarni birlashtirgan ovchilar yo'nalishi mavjud: GameFi, Play-to-Earn, meta, NFT, testnet, tugunlar, multi-buxgalteriya</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 col-12"  data-aos="fade-up-right">
                        <div className="item">
                            <h3>4. P2P</h3>
                            <p><i class="fa-solid fa-play"></i> P2P arbitrajining asoslari bilan tanishing</p>
                            <p><i class="fa-solid fa-play"></i> Xavfsizlik - p2p da firibgarlik usullarini tahlil qilish</p>
                            <p><i class="fa-solid fa-play"></i> Savdo platformalarining umumiy ko'rinishi</p>
                            <p><i class="fa-solid fa-play"></i> Bank va soliqlar</p>
                            <p><i class="fa-solid fa-play"></i> BTC kursining o'zgaruvchanligi bo'yicha daromad</p>
                            <p><i class="fa-solid fa-play"></i> BTC kursini tahlil qilish va moliyaviy hisob</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-12"  data-aos="fade-up-left">
                        <div className="box">
                            <h2>Natija</h2>
                            <p>Siz oyiga 20% dan 100% gacha bo'lgan daromadli asbobda qanday qilib pul ishlashni o'rganasiz, shuningdek, qonunchilik doirasida ishlaysiz. Siz savdoning barcha platformalari va usullarini o'rganasiz. Siz xavfsizlik ko'nikmalarini va qanday qilib firibgarlarga tushmaslikni o'zlashtirasiz (p2p-da firibgarlikning boshqa usullari mavjudligi haqida alohida blok). Savdo paytida BTC kursini yo'qotmaslik va hatto bu o'zgaruvchanlikdan pul ishlashni o'rganasiz.</p>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6 col-12"  data-aos="fade-up-right">
                        <div className="item">
                            <h2>Yakuniy modul</h2>
                            <p><i class="fa-solid fa-play"></i> Asboblarni o'rgangandan so'ng miqyoslash strategiyalari</p>
                            <p><i class="fa-solid fa-play"></i> Treningni yakunlash</p>
                            <p><i class="fa-solid fa-play"></i> Kriptovalyuta bo'yicha daromad olish imkoniyatlari va strategiyalarini taqqoslash</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-12"  data-aos="fade-up-lrft">
                        <div className="box">
                            <h2>Natija</h2>
                            <p>Siz barcha sohalarda uzoq muddatli rivojlanish strategiyasini olasiz.</p>
                        </div>
                    </div>
                </div>

                <div className="line"></div>

            </div>

        </section>
    )
}
