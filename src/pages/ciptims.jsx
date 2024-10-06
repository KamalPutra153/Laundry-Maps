import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

import DataLaundry from "@/pages/data/listlaundry.json";
import Link from "next/link";

export default function Ciptims() {
  return (
    <>
      <Navigation />
      <section id="All-Event-properties" className="AllEventPoster">
        <div className="container">
          <div className="featured-section-top">
            <div className="text-center">
              <h1 className="section-heading text-dark ">Our IYSA Events</h1>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="featured-section-bottom  ">
            {DataLaundry.map((laundry) => {
              return (
                <a href={laundry.link} className="featured-item shadow">
                  <div className="featured-item-image">
                    <img
                      src={laundry.gambartoko}
                      alt="Featured"
                      className="featured-img"
                    />
                  </div>
                  <div className="content-wrapper">
                    <div key={laundry.id}></div>
                    <h3 className="text-dark">{laundry.name}</h3>
                    <p className="">{laundry.layanan}</p>
                    <p className="">{laundry.jamoperasional}</p>
                    <Link href={`/detail/${laundry.id}`} legacyBehavior>
                      <a
                        // Menggunakan laundry.id yang benar
                        className="btn btn-custom"
                      >
                        Detail
                      </a>
                    </Link>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
