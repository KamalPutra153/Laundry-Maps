import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Ciptims() {
  const [laundryData, setLaundryData] = useState([]);

  useEffect(() => {
    // Pastikan data di-fetch di client-side untuk mencegah perbedaan dengan SSR
    import("@/pages/data/listlaundry.json").then((module) => {
      setLaundryData(module.default);
    });
  }, []);

  if (laundryData.length === 0) {
    return <div>Loading...</div>;
  }

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
          <div className="featured-section-bottom">
            {laundryData.map((laundry) => {
              return (
                <a
                  href={laundry.link}
                  className="featured-item shadow"
                  key={laundry.id}
                >
                  <div className="featured-item-image">
                    <Image
                      src={laundry.gambartoko}
                      alt="Featured"
                      width="200"
                      height="50"
                      className="img-fluid featured-img"
                    />
                  </div>
                  <div className="content-wrapper">
                    <h3 className="text-dark">{laundry.name}</h3>
                    <p>{laundry.layanan}</p>
                    <p>{laundry.jamoperasional}</p>
                    <Link href={`/detail/${laundry.id}`} legacyBehavior>
                      <a className="btn btn-custom">Detail</a>
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
