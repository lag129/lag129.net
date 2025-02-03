import React from "react";
import Image from "next/image";

interface LinkButtonProps {
  serviceName: string;
  userId: string;
  href: string;
}

export const LinkButton = ({ serviceName, userId, href }: LinkButtonProps) => {
  return (
    <div className="rounded-3xl bg-[#f9faef] ring-1 ring-[#dadbd0]">
      <a href={href} className="block p-2">
        <div className="flex items-center gap-5">
          <div>
            <Image src="/file.svg" alt="Service Image" width={50} height={50} className="pl-4"/>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm text-[#75796c]">{userId}</div>
          </div>
        </div>
      </a>
    </div>
  );
};
