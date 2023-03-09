import React from "react";
import Image from "next/image";
const Avatar: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-full">
      <Image src="/images/Avatar.jpeg" alt="Avatar" width={50} height={50} />
    </div>
  );
};

export default Avatar;
