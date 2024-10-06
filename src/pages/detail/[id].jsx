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
          <button className="btn btn-primary" onClick={goBack}>
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
                {laundryDetail.jamoperasional} WIB
              </p>
              <p>
                <span className="fw-bold">Contact</span> :{" "}
                {laundryDetail.contact}
              </p>
              <ul></ul>
              <p>
                <span className="Alamat">Alamat</span> : {laundryDetail.alamat}
              </p>
              <p>
                <span className="fw-bold">Rating Toko</span> :{" "}
                {laundryDetail.rating}
              </p>
              <h3 className="fw-bold">Dokumentasi Toko : </h3>
              <Image
                src={laundryDetail.gambartoko}
                width={250} // Sesuaikan lebar gambar
                height={50} // Sesuaikan tinggi gambar
                className="img-fluid"
                alt="LOGO CIPTIM"
              />{" "}
              <Image
                src={laundryDetail.gambartoko}
                width={250} // Sesuaikan lebar gambar
                height={50} // Sesuaikan tinggi gambar
                className="img-fluid"
                alt="LOGO CIPTIM"
              />{" "}
              <Image
                src={laundryDetail.gambartoko}
                width={250} // Sesuaikan lebar gambar
                height={50} // Sesuaikan tinggi gambar
                className="img-fluid"
                alt="LOGO CIPTIM"
              />
              <br />
              <br />
              <p> Tertarik? Kalian bisa hubungi kontak dibawah ini!!</p>
              <div className="">
                <Link href="" className="m-2">
                  <i className="fab fa-whatsapp fa-2x"></i>
                </Link>
                <Link href="" className="m-2">
                  <i className="fab fa-instagram fa-2x"></i>
                </Link>
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
