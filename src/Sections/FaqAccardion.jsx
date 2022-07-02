import React, { useEffect } from 'react'

export default function FaqAccardion() {

  useEffect(() => {
    const accardion = document.querySelectorAll(".accardion");
    const accardionIcon = document.querySelectorAll(".accardion i");
    const accardionAnswer = document.querySelectorAll(".accardion .answer");

    for (let i = 0; i < accardion.length; i++) {

      accardion[i].addEventListener("click", () => {
        accardion[i].classList.toggle("accardion-active")
      })
    }

  }, [])

  return (
    <section id='accardion' className='container'>

      <div className="accardion">
        <div className="question">
          <h2>Qachongacha bunday daromad olish usuli mavjud?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Kriptovalyuta mavjud ekan. Va u faqat o'sish bosqichida.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Qanday bilim kerak?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Yoshingiz nechada, qaysi universitetni tugatganingiz muhim emas. Kriptovalyutalar bilan tanish bo'lishingiz shart emas. Mening murabbiyligimdagi bilimlar yetarli.</p>
        </div>
      </div>


      <div className="accardion">
        <div className="question">
          <h2>Hech narsani tushunmasam-chi?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Bu dargumon. Negaki, 300 dan ortiq talaba o‘qib, daromad ola boshlagan. Siz qoidadan istisno bo'lishingiz dargumon.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Trening qancha davom etadi?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Trening 3 oy davom etadi, o'quv materiallariga kirish o'quv tugaganidan keyin yana yarim yil davom etadi.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>18 yoshdan kichik bo'lsam o'qishga kela olamanmi? Shu tarzda pul ishlay olamanmi?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Ha, lekin ba'zi cheklovlar bo'ladi. Ba'zi birjalarda siz pasport orqali tekshirishdan o'tishingiz kerak, ammo buning uchun sizga ruxsat berilmaydi. Ammo siz atrofingizdagi keksa odamlar uchun tekshiruvdan o'tishingiz va xotirjam ishlashingiz mumkin. Ko'pchilik aynan shunday qiladi.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Agar men boshqa shahardan bo'lsam, bu men uchun ishlaydimi?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Ha, mashg'ulotlar o'nlab video darslarning onlayn formatida o'tkaziladi.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Agar men Rossiyadan bo'lmasam, bu usulda pul ishlay olamanmi? (yaqin MDH davlatlari)</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Bu erda ham ba'zi cheklovlar mavjud. Biz Rossiya bozori uchun p2p strategiyalarini ishlab chiqdik. (savdo uchun Rossiya bank kartalari talab qilinadi). Boshqa mamlakatlarda p2p bozori ham ishlaydi, lekin afsuski, biz ularni sinab ko'rmadik va shunga mos ravishda biz ularni o'qita olmaymiz.


            Boshqa barcha vositalar, p2p dan tashqari, boshqa mamlakatlarda foydalanish mumkin.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Men pulni yechib olsam bo'ladimi?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>90% vaqt pul kartangizda bo'ladi. Faqat savdo paytida siz ulardan foydalanasiz.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Treningdan keyin qancha daromad olaman?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Ko'p omillarga bog'liq. Siz qanchalik tez-tez va faol ishlaysiz, qancha kapitalingiz bor va qanday tavakkalchilikka tayyorsiz.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Natijalarning kafolatlari qanday?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Rossiya Federatsiyasi qonunchiligiga ko'ra, moliyaviy xizmatlar sohasida biz daromadlar kafolatini ta'minlay olmaymiz. Chunki biz bozorga 100% ta'sir qilmaymiz. Biz o'zimiz foydalanadigan hunarmandchilikni o'rgatishimizga kafolat bera olamiz.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Bo'lib-bo'lib sotib olsam bo'ladimi?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Ha mumkin. Buning uchun siz saytda so'rov qoldirishingiz kerak va bizning mijozlarni qo'llab-quvvatlash bo'limi bo'lib-bo'lib to'lashda yordam berish uchun siz bilan bog'lanadi.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Kripto daromadiga soliq to'lashim kerakmi va qanday qilib?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Kriptovalyuta savdosidan, shuningdek, har qanday investitsiya faoliyatidan foyda olish uchun siz soliq to'lashingiz mumkin va kerak. Rossiya Federatsiyasi qonunchiligi 259 FZ "Raqamli moliyaviy aktivlar to'g'risida". Bu haqda dars davomida batafsilroq gaplashamiz.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Sizning ustozligingiz boshqalardan nimasi bilan farq qiladi?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>So'nggi bir necha yil ichida jamoamiz tomonidan yuz minglab dollar ishlab topildi va o'zlashtirildi. Biz kriptoda pul ishlash bo'yicha o'z strategiyalarimiz va yondashuvlarimizni ishlab chiqdik. Bunday tajriba bozorda deyarli baham ko'rilmaydi.</p>
        </div>
      </div>

      <div className="accardion">
        <div className="question">
          <h2>Kurs davomida kursni oshira olamanmi?</h2>
          <i class="fa-solid fa-plus"></i>
        </div>
        <div className="answer">
          <p>Ha, dastur boshlanganidan keyin 2 hafta ichida, lekin chegirmalarsiz. Qo'shimcha to'lov miqdori quyidagilar asosida hisoblanadi:

            Chegirmasiz yangi tarifning miqdori allaqachon to'langan miqdordir.

            O'rindiqlar qolsa, yo'l haqini oshirish mumkin.</p>
        </div>
      </div>

    </section>
  )
}
