"use client"; // Tambahkan ini di bagian atas

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const Header: React.FC = () => {

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" }); // Logout dan arahkan ke halaman login
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/home">FindScent</Link>
        </div>

        <nav>
          <ul className="flex space-x-6">
              <>
                <li>
                  <Link href="/profile" className="hover:text-gray-400">
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:text-gray-400 focus:outline-none"
                  >
                    Logout
                  </button>
                </li>
              </>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;