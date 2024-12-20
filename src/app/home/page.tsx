"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/header";
import FavCard from "@/components/favcard";
import Footer from "@/components/footer";

const HomePage: React.FC = () => {
  const [topRatedPerfumes, setTopRatedPerfumes] = useState<any[]>([]); // State untuk menyimpan parfum top-rated
  const [loading, setLoading] = useState(true); // State untuk loading

  // Fetch top-rated perfumes saat komponen dimount
  useEffect(() => {
    const fetchTopRatedPerfumes = async () => {
      try {
        const response = await fetch("/api/top-rated"); // Absolute path endpoint API
        if (!response.ok) {
          throw new Error("Failed to fetch top-rated perfumes");
        }
        const data = await response.json();
        setTopRatedPerfumes(data);
      } catch (error) {
        console.error("Error fetching top-rated perfumes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedPerfumes();
  }, []);

  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 text-center">
        <h1 className="text-4xl font-bold md:text-6xl text-gray-200">
          Temukan Parfum yang Sesuai dengan Karakter Anda
        </h1>
        <Link href="/search">
          <button className="px-6 py-3 mt-8 text-lg font-semibold text-gray-900 bg-[#CDC69A] rounded-lg hover:bg-[#D9D1BE]">
            Temukan Parfum
          </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-200">
            Top Rated Perfumes
          </h2>

          {/* Show loading indicator */}
          {loading ? (
            <div className="flex justify-center items-center mt-8">
              <p className="text-lg text-gray-400">Loading...</p>
            </div>
          ) : topRatedPerfumes.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
              {topRatedPerfumes.map((item) => (
                <FavCard
                  key={item.id} // Gunakan ID dari parfum
                  perfume={item.perfume}
                  brand={item.brand}
                  country={item.country}
                  gender={item.gender}
                  ratingValue={item.ratingValue}
                  year={item.year}
                  mainAccords={[
                    item.mainAccord1,
                    item.mainAccord2,
                    item.mainAccord3,
                    item.mainAccord4,
                    item.mainAccord5,
                  ].filter(Boolean)}
                  imgUrl={item.imgUrl}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center mt-8">
              <p className="text-lg text-gray-400">Tidak ada parfum ditemukan.</p>
            </div>
          )}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
