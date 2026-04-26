import React from "react";

interface LinkButtonProps {
  serviceName: string;
  userId: string;
  href: string;
}

export const LinkButton = ({serviceName, userId, href }: LinkButtonProps) => {
  return (
    <div className="rounded-3xl bg-[#dce7c8] ring-1 ring-[#dadbd0]">
      <a href={href} className="block p-2">
        <div className="flex items-center gap-5">
          <div className="pl-3">
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm font-medium text-[#75796c]">{userId}</div>
          </div>
        </div>
      </a>
    </div>
  );
};
