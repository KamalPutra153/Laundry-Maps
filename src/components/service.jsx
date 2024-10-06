import Images from "next/image";

export const Service = () => {
  return (
    <>
      <section className="service-section">
        <div className="wrapper row">
          <h1 className="m-3">Layanan Kami</h1>
          <div className="content col-lg-3">
            <Images
              src="/assets/images/icon/OpeningCabang.jpeg"
              width={200} // Sesuaikan lebar gambar
              height={500} // Sesuaikan tinggi gambar
              className="img-fluid "
              alt="LOGO CIPTIM"
            />{" "}
            <h5>Laundry kiloan dan satuan</h5>
          </div>
          <div className="content col-lg-3">
            <Images
              src="/assets/images/icon/LaundryTasSepatu.jpeg"
              width={200} // Sesuaikan lebar gambar
              height={500} // Sesuaikan tinggi gambar
              className="img-fluid "
              alt="LOGO CIPTIM"
            />{" "}
            <h5>Laundry shoe & bag care</h5>
          </div>
          <div className="content col-lg-3">
            <Images
              src="/assets/images/icon/IconSetrikaUap.jpeg"
              width={200} // Sesuaikan lebar gambar
              height={500} // Sesuaikan tinggi gambar
              className="img-fluid "
              alt="LOGO CIPTIM"
            />{" "}
            <h5>Ironing</h5>
          </div>
          <div className="content col-lg-3">
            <Images
              src="/assets/images/icon/DryClean.jpeg"
              width={200} // Sesuaikan lebar gambar
              height={500} // Sesuaikan tinggi gambar
              className="img-fluid "
              alt="LOGO CIPTIM"
            />{" "}
            <h5>Dry cleaning</h5>
          </div>
        </div>
      </section>
    </>
  );
};
