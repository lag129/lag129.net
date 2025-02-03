import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <div className="rounded-3xl bg-[#f9faef] dark:bg-[#291c1f] p-8 ring-1 ring-[#dadbd0] dark:ring-black">
      {children}
    </div>
  );
};
