import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    // Navbar
    <section className="navbar-section">
      <nav
        id="menu"
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
      >
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <Image
            src="/assets/images/LogoCiptim.jpeg"
            width={100} // Sesuaikan lebar gambar
            height={50} // Sesuaikan tinggi gambar
            className="img-fluid "
            alt="LOGO CIPTIM"
          /> */}
          <div
            className="navigation collapse navbar-collapse justify-content-center"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <ul className="nav navbar-nav navbar-right">
                <Link href="/">
                  <Image
                    src="/assets/images/LogoCiptim.jpeg"
                    width={100} // Sesuaikan lebar gambar
                    height={50} // Sesuaikan tinggi gambar
                    className="img-fluid "
                    alt="LOGO CIPTIM"
                  />
                </Link>
                <Link href="/maps" legacyBehavior>
                  <a className="nav-item nav-link">MAPS</a>
                </Link>
                <Link href="" legacyBehavior>
                  <a className="nav-item nav-link">CIPTIM’S</a>
                </Link>
                <Link href="/contact" legacyBehavior>
                  <a className="nav-item nav-link">CONTACT</a>
                </Link>
                {/* <Link href="/" legacyBehavior>
                  <a className="btn btn-custom nav-item nav-link">PESAN</a>
                </Link> */}
              </ul>
            </div>
            <div className="ms-lg-3">
              {/* <Link href="/" legacyBehavior>
                <a className="btn btn-primary btn-action" target="_blank">
                  Buku Panduan
                </a>
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
