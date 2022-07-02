import React from 'react'

export default function Footer() {
    return (
        <footer className='container'>
            <h1 className="title" data-aos="fade-up">TEXNIK YORDAM UCHUN ALOQALAR</h1>

            <div className="support row" data-aos="zoom-in">
                <div className="col-md-6 col-12">
                    <i class="fa-brands fa-telegram"></i>
                    <h2>Telegram qo'llab-quvvatlash boti:
                        <span> @bananam_bot</span>
                    </h2>
                </div>
                <div className="col-md-6 col-12">
                    <i class="fa-solid fa-envelope"></i>
                    <h2>E-pochtamizga yozing:
                         <span> info@bananacrypto.ru</span>
                    </h2>
                </div>
            </div>
        </footer>
    )
}
