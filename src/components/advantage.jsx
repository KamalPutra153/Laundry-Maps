import Images from "next/image";

export const Advantage = () => {
  return (
    <>
      <section className="advantage-section">
        <h1 className="m-5">Kelebihan Kami :</h1>
        <div className="wrapper row">
          <div className="content col-lg-3">
            <h2>LOKASI STRATEGIS</h2>
            <Images
              src="/assets/images/icon/lokasi.jpeg"
              width={300} // Sesuaikan lebar gambar
              height={500} // Sesuaikan tinggi gambar
              className="img-fluid "
              alt="LOGO CIPTIM"
            />
          </div>
          <div className="content col-lg-3">
            <h3>KUALITAS LAYANAN TERJAMIN</h3>
            <Images
              src="/assets/images/icon/service.jpeg"
              width={300} // Sesuaikan lebar gambar
              height={500} // Sesuaikan tinggi gambar
              className="img-fluid "
              alt="LOGO CIPTIM"
            />
          </div>
          <div className="content col-lg-3">
            <h2>PILIHAN YANG BERAGAM</h2>
            <Images
              src="/assets/images/icon/beragam.jpeg"
              width={300} // Sesuaikan lebar gambar
              height={500} // Sesuaikan tinggi gambar
              className="img-fluid "
              alt="LOGO CIPTIM"
            />
          </div>
        </div>
      </section>
    </>
  );
};
