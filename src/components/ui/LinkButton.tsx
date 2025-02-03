import React from "react";
import Image from "next/image";

interface LinkButtonProps {
  imgUrl: string;
  serviceName: string;
  userId: string;
  href: string;
}

export const LinkButton = ({ imgUrl, serviceName, userId, href }: LinkButtonProps) => {
  return (
    <div className="rounded-3xl bg-[#dce7c8]">
      <a href={href} className="block p-2">
        <div className="flex items-center gap-5">
          <Image src={imgUrl} alt="Service Image" width={50} height={50} className="pl-4"/>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm font-medium text-[#75796c]">{userId}</div>
          </div>
        </div>
      </a>
    </div>
  );
};
