import React from "react";
import Image from "next/image";

interface FavCardProps {
  perfume: string;
  brand: string;
  country: string;
  gender: string;
  ratingValue: string;
  year?: number;
  mainAccords: string[];
  imgUrl: string;
}

const FavCard: React.FC<FavCardProps> = ({
  perfume,
  brand,
  country,
  gender,
  ratingValue,
  year,
  mainAccords,
  imgUrl,
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-300 text-black flex flex-col items-center">
      {/* Image Section */}
      <div className="w-full flex justify-center mb-4">
      <Image
        src={imgUrl} // URL gambar
        alt={`${perfume} image`} // Deskripsi gambar
        width={160} // Lebar gambar (40 * 4)
        height={224} // Tinggi gambar (56 * 4)
        className="object-cover rounded-lg" // Kelas CSS
        priority // Opsional, tambahkan jika perlu optimasi loading gambar
        />
      </div>

      {/* Content Section */}
      <div className="text-center">
        <h3 className="text-lg font-bold mb-1 text-gray-800">{perfume}</h3>
        <p className="text-sm text-gray-600 mb-2 italic">{brand}</p>
        <p className="text-sm text-gray-600">{country}</p>
        <p className="text-sm font-medium mt-2 text-gray-700">
          Gender: <span className="font-normal">{gender}</span>
        </p>
        <p className="text-sm text-gray-700">
          Rating: <span className="font-semibold">{ratingValue}</span>
        </p>
        {year && (
          <p className="text-sm text-gray-700">
            Year: <span className="font-semibold">{year}</span>
          </p>
        )}
      </div>

      {/* Main Accords Section */}
      <div className="mt-4 w-full">
        <p className="text-sm font-bold mb-2 text-center text-gray-800">
          Main Accords:
        </p>
        <ul className="text-sm text-gray-700 grid grid-cols-2 gap-2">
          {mainAccords.map((accord, index) => (
            <li
              key={index}
              className="text-center bg-gray-200 px-2 py-1 rounded-md shadow"
            >
              {accord}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FavCard;
