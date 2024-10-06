import Images from "next/image";

export const Advantage = () => {
  return (
    <>
      <section className="advantage-section">
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              ab laborum suscipit, sequi animi iure nisi eligendi neque quaerat
              expedita autem doloribus quod sunt libero?
            </p>
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              ab laborum suscipit, sequi animi iure nisi eligendi neque quaerat
              expedita autem doloribus quod sunt libero?
            </p>
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
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
              ab laborum suscipit, sequi animi iure nisi eligendi neque quaerat
              expedita autem doloribus quod sunt libero?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
