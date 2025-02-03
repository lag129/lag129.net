import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="mx-auto w-full overflow-hidden rounded-3xl bg-[#f9faef] p-4 shadow-inherit ring-1 ring-[#dadbd0] sm:p-6 md:p-8">{children}</div>;
};
