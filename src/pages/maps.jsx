// components/maps.js

import { useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter
import "leaflet/dist/leaflet.css";
import L from "leaflet";
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

export default function Maps() {
  const router = useRouter(); // Inisialisasi useRouter

  useEffect(() => {
    // Pastikan kode hanya dijalankan di sisi klien
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

  return (
    <section className="mainhero-section">
      <Navigation />
      <div id="map" style={{ height: "350px", width: "100%" }}></div>
      <Footer />
    </section>
  );
}
