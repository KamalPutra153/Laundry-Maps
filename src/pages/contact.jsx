import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Maps() {
  const message =
    "Halo Admin, saya tertarik dan ingin tahu lebih detail, bisa bantu dijelaskan?";
  const encodedMessage = encodeURIComponent(message);

  return (
    <>
      <Navigation />
      <section className="contact-section" id="contact">
        <div className="container row">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Hai para pemilik laundry di Ciputat Timur! 🚀</h2>
                <p>
                  Ingin bisnis laundrymu semakin dikenal dan mudah diakses
                  banyak pelanggan? Yuk, daftar di Ciptim&rsquo;s! Platform yang
                  menghubungkan bisnis laundry kamu dengan ratusan pelanggan di
                  sekitar Ciputat Timur. Dengan Ciptim&rsquo;s, kamu bisa
                  menjangkau lebih banyak orang, tampil di peta digital, dan
                  memudahkan pelanggan menemukan layanan laundry kamu.
                </p>
                <p>
                  Daftar sekarang, tingkatkan visibility, dan buat bisnis
                  laundrymu makin berkembang! 💼👗🧺
                </p>
                <p>
                  Ayo, jangan lewatkan kesempatan untuk jadi pilihan utama
                  pelanggan! Gabung di Ciptim’s sekarang! 🌟
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item mt-0">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-instagram"></i> Instagram
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/ciptims/?utm_source=ig_web_button_share_sheet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ciptims
                  </a>
                </span>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone (whatsapp)
                </span>
                <a
                  href={`https://api.whatsapp.com/send/?phone=6281398439851&text=${encodedMessage}&type=phone_number&app_absent=0`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  081398439851
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                <a
                  href="mailto:gyiif.iysa@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  gyiif.iysa@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
