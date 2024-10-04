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
      <div className="mainhero-section">
        {laundryDetail ? (
          <>
            <h1>{laundryDetail.name}</h1>
            <p>{laundryDetail.description}</p>
            <p>jam operasional</p>
            <p>contact</p>
            <p href="">alamat</p>
            <a href="" className="btn btn-custom">
              Order Disini
            </a>
            <br />
            <Image
              src="/assets/images/LogoCiptim.jpeg"
              width={100} // Sesuaikan lebar gambar
              height={50} // Sesuaikan tinggi gambar
              className="img-fluid"
              alt="LOGO CIPTIM"
            />
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
