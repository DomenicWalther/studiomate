import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="h-auto bg-gray-800">
      <div className="flex flex-col p-10 text-right text-white">
        <h4 className="text-2xl">Links</h4>
        <div className="flex flex-col gap-2 pt-4 text-sm">
          <Link href="/Datenschutz">Datenschutz</Link>
          <Link href="/impressum">Impressum</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
