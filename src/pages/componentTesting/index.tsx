import React from "react";
import Navbar from "~/components/Navbar";

const componentTesting: React.FC = () => {
  const avatarPath = "/images/Avatar.jpeg";
  return (
    <div className="min-h-screen bg-supporting-neutrals-50">
      <Navbar userName="Domenic" avatarPath={avatarPath} />
    </div>
  );
};

export default componentTesting;
