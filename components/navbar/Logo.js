"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const Logo = () => {
  // Update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => {
      window.removeEventListener("resize", updateWidth); // Clean up listener
    };
  }, []);

  return (
    <Link href="/">
      <Image
        src="/images/frontpage/astrologoblack2.png"
        alt="Logo"
        width={width < 1024 ? 75 : 100} // Adjusted width for larger size
        height={width < 1024 ? 60 : 80} // Adjusted height for larger size
        className="relative"
      />
    </Link>
  );
};

export default Logo;
