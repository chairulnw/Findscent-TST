"use client";
import React, { useEffect, useState } from "react";
import Header from "@/components/header";
import { useSession } from "next-auth/react";
import FavCard from "@/components/favcard";
import Footer from "@/components/footer";
const ProfilePage: React.FC = () => {
  const { data: session, status } = useSession();
  const [favorites, setFavorites] = useState<any[]>([]); // State untuk daftar parfum favorit
  const [loading, setLoading] = useState(true); // State untuk indikator loading

  // Fetch daftar parfum favorit
  const fetchFavorites = async () => {
    try {
      const response = await fetch("/api/favorite", {
        method: "GET",
        credentials: "include", // Mengirim cookie untuk autentikasi
      });

      if (!response.ok) {
        throw new Error("Gagal mengambil data favorit.");
      }

      const data = await response.json();
      setFavorites(data); // Simpan data favorit ke state
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat mengambil data favorit.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session?.user) {
      fetchFavorites(); // Fetch data hanya jika pengguna telah login
    }
  }, [session]);

  // Handling untuk status loading
  if (status === "loading" || loading) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  // Handling jika pengguna belum login
  if (status === "unauthenticated") {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-xl">
          Anda belum login. Silakan login terlebih dahulu.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Profil Pengguna
        </h1>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">
            Nama: <span>{session?.user?.name || "Guest"}</span>
          </h2>
          <p className="text-lg mb-4">
            Email:{" "}
            <span className="text-gray-300">
              {session?.user?.email || "-"}
            </span>
          </p>
          <br></br>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Parfum Favorit</h3>
            {favorites.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {favorites.map((item) => (
                  <FavCard
                    key={item.perfume.id} // Gunakan ID dari parfum
                    perfume={item.perfume.perfume}
                    brand={item.perfume.brand}
                    country={item.perfume.country}
                    gender={item.perfume.gender}
                    ratingValue={item.perfume.ratingValue}
                    year={item.perfume.year}
                    mainAccords={[
                      item.perfume.mainAccord1,
                      item.perfume.mainAccord2,
                      item.perfume.mainAccord3,
                      item.perfume.mainAccord4,
                      item.perfume.mainAccord5,
                    ].filter(Boolean)}
                    imgUrl={item.perfume.imgUrl}
                    />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400">
                Anda belum memiliki parfum favorit.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProfilePage;
