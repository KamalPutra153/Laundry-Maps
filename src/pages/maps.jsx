// components/maps.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic"; // Import dynamic dari Next.js
import "leaflet/dist/leaflet.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import data from "@/pages/data/listlaundry.json"; // Ganti path jika diperlukan

// Membuat komponen custom marker
const CustomMarker = () => {
  const markerIcon = L.divIcon({
    className: "custom-icon",
    html: `<span style="color: red; font-size: 24px;">
             <i class="fas fa-map-marker-alt"></i>
           </span>`, // Ikon
    iconSize: [30, 30], // Ukuran ikon
  });

  return markerIcon;
};

// Komponen peta yang akan di-load secara dinamis
const MapComponent = () => {
  const router = useRouter(); // Inisialisasi useRouter

  useEffect(() => {
    const L = require("leaflet"); // Impor leaflet di sini
    if (typeof window !== "undefined") {
      // Inisialisasi peta
      const map = L.map("map").setView(
        [-6.316544562496209, 106.7551530227471],
        12
      ); // Koordinat default

      // Menambahkan layer peta dari OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(map);

      // Menambahkan marker dari data.json
      const customMarker = CustomMarker(); // Mendapatkan ikon kustom
      data.forEach((location) => {
        const marker = L.marker(location.coordinates, {
          icon: customMarker,
        }).addTo(map);

        // Popup dengan deskripsi
        const popupContent = `<b>${location.name}</b><br>${location.description}`;
        marker.bindPopup(popupContent);

        // Menampilkan popup saat hover
        marker.on("mouseover", () => {
          marker.openPopup();
        });
        marker.on("mouseout", () => {
          marker.closePopup();
        });

        // Navigasi ke halaman detail saat marker diklik
        marker.on("click", () => {
          router.push(`/detail/${location.id}`); // Mengarahkan ke halaman detail dengan ID lokasi
        });
      });

      // Cleanup pada unmount
      return () => {
        map.remove();
      };
    }
  }, [router]); // Tambahkan router sebagai dependensi

  return <div id="map" style={{ height: "350px", width: "100%" }}></div>;
};

// Ekspor komponen MapComponent sebagai komponen dinamis
const DynamicMapComponent = dynamic(() => Promise.resolve(MapComponent), {
  ssr: false, // Nonaktifkan SSR untuk komponen ini
});

export default function Maps() {
  return (
    <section className="mainhero-section">
      <Navigation />
      <DynamicMapComponent /> {/* Render MapComponent dinamis */}
      <Footer />
    </section>
  );
}
