import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { useRouter } from "next/router";
import Image from "next/image";
import data from "@/pages/data/listlaundry.json"; // Pastikan path ini sesuai

const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mengambil data laundry berdasarkan id
  const laundryDetail = data.find((laundry) => laundry.id === id);

  return (
    <section>
      <Navigation />
      <div className="detail-section">
        {laundryDetail ? (
          <>
            <div class="wrapper">
              <div class="text-center m-3">
                <Image
                  src="/assets/images/LogoCiptim.jpeg"
                  width={500} // Sesuaikan lebar gambar
                  height={50} // Sesuaikan tinggi gambar
                  className="img-fluid"
                  alt="LOGO CIPTIM"
                />
              </div>
              <h1>{laundryDetail.name}</h1>
              <p>{laundryDetail.description}</p>
              <p>jam operasional</p>
              <p>contact</p>
              <p href="">alamat</p>
              <a href="" className="btn btn-custom">
                Order Disini
              </a>
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
