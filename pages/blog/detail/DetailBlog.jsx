import React from "react";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Subs } from "../../../components/Subs";
import { blog } from "../../../Data";
import { Blog } from "../../../components/Blog";

export default function DetailBlog() {
  return (
    <div>
      <Header />
      <div className=" md:px-32">
        <div className=" text-center px-7 my-20 text-black md:px-32">
          <h1 className=" text-3xl font-semibold mb-3 md:font-bold">Blog</h1>
          <p className=" font-light md:font-normal">
            Perkembangan artikel mengenai Core Banking System
          </p>
        </div>
        <div className=" px-7 pb-10">
          <div className=" flex flex-col md:flex-row md:contents-start md:gap-3">
            <div className="  flex md:w-[5000px]">
              <img src={blog[0].image} alt="" className=" rounded " />
            </div>
            <div>
              <h1 className=" text-xl font-semibold my-5 md:font-bold md:text-2xl md:my-0 md:mb-5">
                {blog[0].header}
              </h1>
              <p>
                Core Banking system sendiri adalah jantung dari sebuah bank,
                karena sistem ini digunakan untuk memproses loan, dan di
                dalamnya tersimpan data nasabah serta semua transaksi sejak
                nasabah membuka rekening di bank sampai menutupnya. Core Banking
                umumnya diasosiasikan dengan retail banking. Jika dibandingkan
                dengan industri lain, core banking system ini mirip dengan
                billing system dari sebuah perusahaan telekomunikasi, atau ERP
                perusahaan manufaktur. Yang membedakan adalah pada sistem ini
                terdapat jenis yang beragam mulai dari yang inhouse development,
                local vendor hingga yang dikerjakan vendor asing.
              </p>
              <p className=" text-sm font-medium my-5">{blog[0].date}</p>
            </div>
          </div>
          <div>
            <div>
              <h1 className=" text-xl font-semibold my-5 md:font-bold">
                Fungsi Core Banking System
              </h1>
              <div className="flex flex-col gap-3">
                <p>
                  Dengan adanya sistem tersebut, bank tidak perlu lagi untuk
                  mendapatkan deposit dan penarikan uang tunai di cabang yang
                  sama, Anda bisa deposit dari cabang mana pun dan mendapatkan
                  penarikan dengan mudah dari cabang lainnya. karena dengan
                  sistem ini memungkinkan bank untuk mendapatkan transfer dana
                  mereka dan transaksi lainnya dari satu cabang ke cabang
                  lainnya dengan sangat mudah dan cepat.
                </p>
                <p>
                  Adanya core banking system, tidak hanya bank yang terbantu.
                  Kita sebagai nasabah juga diuntungkan karena fasilitas ini
                  memberi kebebasan pilihan kita untuk melakukan transaksi
                  hingga selesai dengan cara yang sangat mudah. Sehingga orang
                  tidak perlu repot lagi untuk pergi ke cabang untuk melakukan
                  transaksi sederhana.
                </p>
                <p>
                  Fungsi core banking yang paling mendasar adalah melayani
                  seluruh nasabah untuk berbagai kebutuhannya seperti funding,
                  lending dan deposit uang. Fungsi lainnya adalah merekam semua
                  transaksi yang terjadi dalam rekening nasabah, baik berupa
                  tabungan, loan, KPR, maupun transaksi pembayaran, hingga
                  transaksi macet yang dimiliki nasabah juga akan terekam.
                </p>
              </div>
            </div>
            <div>
              <h1 className=" text-xl font-semibold my-5 md:font-bold">
                Fasilitas yang Tersedia di Core Banking System
              </h1>
              <div className="flex flex-col gap-3">
                <p>
                  Kemudahan yang ditawarkan sistem ini di antaranya, fasilitas
                  ATM, dana elektronik, transfer, tele-banking, internet
                  banking, cabang kliring fasilitas perbankan cabang. Semenjak
                  adanya sistem ini, langsung mengubah pola jam kerja manusia
                  normal. Misalnya pada saat fitur internet banking hadir, tidak
                  hanya menghemat waktu berharga banyak orang, tetapi juga
                  memberikan kemudahan untuk mengerjakan beberapa hal dalam satu
                  waktu.
                </p>
                <p>
                  Selain itu sistem ini juga lebih cepat dan akurat. Fungsi
                  lainnya sistem ini seperti pemeliharaan passbook, perhitungan
                  bunga dan berbagai buku lainnya yang menjaga catatan tetap
                  akurat dalam waktu singkat. Aplikasi perbankan core banking
                  sistem sendiri terdiri dari beberapa modul kerja, yaitu CIS
                  (Customer Identification System), DDS (Demand Deposit System),
                  GLS (General Ledger System), LNS (Loan System), TDS (Time
                  Deposit System).
                </p>
                <p>
                  Karena akses core banking sistem ini sudah dilakukan secara
                  real time melalui proses online. Bagi bank sendiri, sistem ini
                  sangat memudahkan dalam database berbagai catatan transaksi
                  kantor cabang yang lebih akurat dan juga pengenalan produk
                  baru. Kemajuan teknologi sangat terasa di sistem ini, karena
                  menawarkan solusi yang lebih banyak, lebih mudah serta cepat.
                  Jika dulu biasanya membutuhkan waktu sehari untuk melihat
                  transaksi rekening ke sesama cabang, dan 3 hari untuk melihat
                  transaksi ke bank lain. Sekarang hal itu tidak perlu lagi,
                  sehingga hal ini sangat menguntungkan bagi bank dan juga semua
                  nasabah, baik skala individu maupun korporasi.
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className=" flex flex-col gap-5 justify-center items-center md:items-start md:flex-row">
        {blog.slice(0, 3).map((b) => (
          <Blog
            image={b.image}
            header={b.header}
            content={b.content}
            date={b.date}
          />
        ))}
      </div>
      <Subs />
      <Footer />
    </div>
  );
}
