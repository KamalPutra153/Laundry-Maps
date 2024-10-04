import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white pt-4 pb-4" id="footer">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto">
              <p>Mau jadi tempat berlabuh? gabung aja di Ciptim's!</p>
              <Image
                src="/assets/images/LogoCiptim.jpeg"
                width={100} // Sesuaikan lebar gambar
                height={50} // Sesuaikan tinggi gambar
                className="img-fluid m-3"
                alt="LOGO CIPTIM"
              />
              <div>
                <a
                  href="https://www.facebook.com/p/Indonesia-Young-scientist-Association-100063979907207/"
                  target="_blank"
                  className="btn btn-outline-light btn-floating m-1"
                  style={{ width: "50px" }}
                >
                  <i className="fab fa-whatsapp fa-2x"></i>
                </a>
                <a
                  href="https://www.instagram.com/ciptims?igsh=MXQzYzZzMWxlaHRqNQ=="
                  target="_blank"
                  className="btn btn-outline-light btn-floating m-1"
                >
                  <i className="fa fa-instagram fa-2x"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="">
            <p className="text-center">
              &copy; 2024 Official CIPTIM'S LAUNDRY. Design by{" "}
              <a href="./#" className="text-white" rel="nofollow">
                CIPTIM'S TEAM
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
