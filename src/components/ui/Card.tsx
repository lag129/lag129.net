import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="rounded-3xl bg-[#f9faef] p-4 sm:p-6 md:p-8 ring-1 ring-[#dadbd0] min-w-[280px] w-full mx-auto overflow-hidden shadow-inherit">{children}</div>;
};
