"use client";

import React, { useEffect, useState } from "react";
import SearchBar from "../../components/searchbar"; // Import komponen SearchBar
import Filter from "../../components/filter"; // Import komponen Filter
import Card from "../../components/card"; // Import komponen Card
import Header from "@/components/header";
import Footer from "@/components/footer";

const SearchPage: React.FC = () => {
  const [results, setResults] = useState<any[]>([]); // State untuk hasil pencarian
  const [loading, setLoading] = useState(false); // State untuk indikator loading
  const [filters, setFilters] = useState({
    brand: "",
    gender: "",
    yearRange: "",
    mainAccord: "",
  }); // State untuk filter
  const [currentPage, setCurrentPage] = useState(1); // Halaman aktif
  const itemsPerPage = 9; // Jumlah item per halaman (9 card per page)

  // Hitung data berdasarkan halaman aktif
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentResults = results.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(results.length / itemsPerPage);

  // Fungsi fetch data
  const fetchData = async (
    query: string = "",
    filters = {
      brand: "",
      gender: "",
      yearRange: "",
      mainAccord: "",
    }
  ) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        query,
        brand: filters.brand || "",
        gender: filters.gender || "",
        yearRange: filters.yearRange || "",
        mainAccord: filters.mainAccord || ""
      });
  
      console.log("Query params:", params.toString()); // Debug query params
  
      const response = await fetch(`/api/search?${params.toString()}`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
  
      console.log("API Response:", data); // Debug API response
      setResults(data); // Simpan hasil pencarian
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };
  

  // Fetch data awal saat komponen di-mount
  useEffect(() => {
    fetchData(); // Fetch semua data saat pertama kali
  }, []);

  const handleAddToFavorites = async (perfumeId: number) => {
    try {
      const response = await fetch("/api/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Tambahkan ini untuk mengirim cookie
        body: JSON.stringify({ perfumeId }),
      });
  
      if (!response.ok) {
        throw new Error("Gagal menambahkan ke favorit");
      }
  
      const result = await response.json();
      console.log("Berhasil ditambahkan ke favorit:", result);
      alert("Parfum berhasil ditambahkan ke favorit!");
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan saat menambahkan ke favorit.");
    }
  };
  

  // Handle pencarian
  const handleSearch = (query: string) => {
    setCurrentPage(1); // Reset ke halaman pertama setiap kali pencarian baru
    fetchData(query, filters);
  };

  // Handle perubahan filter
  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setCurrentPage(1); // Reset ke halaman pertama setelah mengubah filter
    fetchData("", newFilters); // Fetch ulang data berdasarkan filter baru
  };

  // Handle perubahan halaman
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Render pagination
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbersToShow = 3; // Jumlah halaman yang ditampilkan di tengah sebelum "..."

    // Tampilkan halaman pertama
    pageNumbers.push(
      <button
        key={1}
        className={`px-3 py-1 mx-1 border rounded ${
          currentPage === 1 ? "bg-blue-500 text-white" : ""
        }`}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>
    );

    // Jika ada banyak halaman di tengah
    if (currentPage > maxPageNumbersToShow + 1) {
      pageNumbers.push(<span key="start-ellipsis">...</span>);
    }

    // Tampilkan halaman di sekitar halaman aktif
    for (
      let i = Math.max(2, currentPage - maxPageNumbersToShow);
      i <= Math.min(totalPages - 1, currentPage + maxPageNumbersToShow);
      i++
    ) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-1 mx-1 border rounded ${
            currentPage === i ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    // Jika ada banyak halaman di akhir
    if (currentPage < totalPages - maxPageNumbersToShow) {
      pageNumbers.push(<span key="end-ellipsis">...</span>);
    }

    // Tampilkan halaman terakhir
    if (totalPages > 1) {
      pageNumbers.push(
        <button
          key={totalPages}
          className={`px-3 py-1 mx-1 border rounded ${
            currentPage === totalPages ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white">
      <Header />
      <div className="flex flex-col lg:flex-row">
        {/* Filter Section */}
        <aside className="w-full lg:w-1/4 bg-gray-700 p-4">
          <h2 className="text-xl font-bold mb-4 text-gray-200">Filter</h2>
          <Filter onFilterChange={handleFilterChange} />
        </aside>

        {/* Main Content Section */}
        <main className="w-full lg:w-3/4 p-4">
          <section className="mb-4">
            <SearchBar onSearch={handleSearch} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-200">
              Hasil Pencarian
            </h2>
            {loading ? (
              <p>Loading...</p>
            ) : currentResults.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentResults.map((item) => (
                    <Card
                      key={item.id}
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
                      onAddToFavorites={() => handleAddToFavorites(item.id)} // Tambahkan handler ini
                    />
                  ))}
                </div>

                {/* Navigasi Pagination */}
                <div className="flex justify-center items-center mt-4">
                  <button
                    className="px-3 py-1 mx-1 border rounded disabled:opacity-50"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </button>
                  {renderPageNumbers()}
                  <button
                    className="px-3 py-1 mx-1 border rounded disabled:opacity-50"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </button>
                </div>
              </>
            ) : (
              <p className="text-center">Tidak ada hasil yang ditemukan.</p>
            )}
          </section>
        </main>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SearchPage;
