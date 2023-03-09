import React from "react";
import Image, { type StaticImageData } from "next/image";

interface AvatarProps {
  avatarPath: string;
}
const Avatar: React.FC<AvatarProps> = ({ avatarPath }: AvatarProps) => {
  return (
    <div className="overflow-hidden rounded-full">
      <Image src={avatarPath} alt="Avatar" width={50} height={50} />
    </div>
  );
};

export default Avatar;
