import React from "react";

interface CardProps {
  perfume: string;
  brand: string;
  country: string;
  gender: string;
  ratingValue: string;
  year?: number;
  mainAccords: string[];
  imgUrl: string;
  onAddToFavorites?: () => void; // Tambahkan prop untuk fungsi favorit
}

const Card: React.FC<CardProps> = ({
  perfume,
  brand,
  country,
  gender,
  ratingValue,
  year,
  mainAccords,
  imgUrl,
  onAddToFavorites, // Tangkap fungsi favorit
}) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-300 text-black flex flex-col items-center">
      {/* Image Section */}
      <div className="w-full flex justify-center mb-4">
        <img
          src={imgUrl}
          alt={`${perfume} image`}
          className="w-40 h-56 object-cover rounded-lg"
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

      {/* Add to Favorites Button */}
      <button
        onClick={onAddToFavorites} // Panggil fungsi saat tombol diklik
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Tambahkan ke Favorit
      </button>
    </div>
  );
};

export default Card;