import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import data from "@/pages/data/listlaundry.json"; // Pastikan path ini sesuai
import Link from "next/link";

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mengambil data laundry berdasarkan id
  const laundryDetail = data.find((laundry) => laundry.id === id);

  const router1 = useRouter();

  const goBack = () => {
    router1.back(); // Fungsi untuk kembali ke halaman sebelumnya
  };

  return (
    <section>
      <Navigation />
      <div className="detail-section">
        <div className="text-start mb-5">
          <button className="btn btn-custom" onClick={goBack}>
            <i className="fa fa-arrow-left"></i> Halaman Sebelumnya
          </button>
        </div>
        {laundryDetail ? (
          <>
            <div class="wrapper">
              <div class="text-center m-3">
                <Image
                  src={laundryDetail.gambartoko}
                  width={500} // Sesuaikan lebar gambar
                  height={50} // Sesuaikan tinggi gambar
                  className="img-fluid"
                  alt="LOGO CIPTIM"
                />
              </div>
              <h1>{laundryDetail.name}</h1>
              <p>
                {" "}
                <span className="fw-bold">Layanan</span> :{" "}
                {laundryDetail.layanan}
              </p>
              <p>
                <span className="fw-bold">Jam Operasional</span> :{" "}
                {laundryDetail.jamoperasional}
              </p>
              <p>
                <span className="fw-bold">Contact</span> :{" "}
                {laundryDetail.contact ? (
                  // Jika `laundryDetail.contact` ada isinya, tampilkan Link yang bisa diklik
                  <Link
                    href={`https://wa.me/${laundryDetail.contact}`}
                    target="_blank"
                    className="contact-link"
                  >
                    {laundryDetail.contact}
                    {/* Menampilkan nomor kontak */}
                  </Link>
                ) : (
                  // Jika `laundryDetail.contact` kosong, tampilkan teks tanpa Link
                  <span className="text-muted">
                    -
                    {/* Menampilkan teks kontak yang lebih pudar, jika kosong */}
                  </span>
                )}
              </p>

              <ul></ul>
              <p>
                <span className="fw-bold">Alamat</span> :{" "}
                <Link href={laundryDetail.linkalamat} target="_blank">
                  {laundryDetail.alamat}
                </Link>
              </p>
              <p>
                <span className="fw-bold">Rating Toko</span> :{" "}
                {laundryDetail.rating}
              </p>
              <h3 className="fw-bold">Dokumentasi Toko : </h3>
              <div className="dokumentasi-section">
                {laundryDetail.dokumentasi &&
                laundryDetail.dokumentasi.length > 0 ? (
                  laundryDetail.dokumentasi.map((gambar, index) => (
                    <Image
                      key={index}
                      src={gambar}
                      width={250} // Sesuaikan lebar gambar
                      height={150} // Sesuaikan tinggi gambar
                      className="img-fluid m-2"
                      alt={`Dokumentasi ${index + 1}`}
                    />
                  ))
                ) : (
                  <p>Tidak ada dokumentasi tersedia.</p>
                )}
              </div>
              <br />
              <br />
              <p> Tertarik? Kalian bisa hubungi kontak dibawah ini!!</p>
              <div className="">
                {laundryDetail.contact ? (
                  // Jika `laundryDetail.contact` ada isinya, tampilkan Link yang bisa diklik
                  <Link
                    href={`https://wa.me/${laundryDetail.contact}`}
                    target="_blank"
                    className="m-2"
                  >
                    <i className="fab fa-whatsapp fa-2x"></i>
                    {/* Ikon Whatsapp yang bisa diklik */}
                  </Link>
                ) : (
                  // Jika `laundryDetail.contact` kosong, tampilkan ikon saja tanpa Link
                  <span className="m-2">
                    <i className="fab fa-whatsapp fa-2x text-muted"></i>
                    {/* Ikon whatsapp yang tampilannya lebih pudar (text-muted), tidak bisa diklik */}
                  </span>
                )}

                {laundryDetail.instagram ? (
                  // Jika `laundryDetail.instagram` ada isinya, tampilkan Link yang bisa diklik
                  <Link
                    href={`https://www.instagram.com/${laundryDetail.instagram}/?hl=id`}
                    target="_blank"
                    className="m-2"
                  >
                    <i className="fab fa-instagram fa-2x"></i>
                    {/* Ikon Instagram yang bisa diklik */}
                  </Link>
                ) : (
                  // Jika `laundryDetail.instagram` kosong, tampilkan ikon saja tanpa Link
                  <span className="m-2">
                    <i className="fab fa-instagram fa-2x text-muted"></i>
                    {/* Ikon Instagram yang tampilannya lebih pudar (text-muted), tidak bisa diklik */}
                  </span>
                )}
              </div>
              <br />
            </div>
          </>
        ) : (
          <p>Loading...</p> // Pesan loading ketika data masih belum tersedia
        )}
      </div>
      <Footer />
    </section>
  );
};

export default DetailPage;
