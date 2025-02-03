import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className="mx-auto w-full overflow-hidden rounded-3xl bg-[#f9faef] p-8 shadow-inherit ring-1 ring-[#dadbd0]">{children}</div>;
};
