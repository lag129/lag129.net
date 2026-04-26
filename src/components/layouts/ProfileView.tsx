import Image from "next/image";
import { Card } from "../ui/Card";
import { LinkButton } from "../ui/LinkButton";

export const ProfileView = () => {
  return (
    <Card>
      <div className="size-48">
        <Image src="/img/profile.jpg" alt="Profile Image" width={500} height={500} className="rounded-full" />
      </div>
      <div className="mb-4 mt-6 block border-b pb-2 text-4xl font-semibold leading-tight">lag129</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 lg:gap-4">
        <LinkButton serviceName="GitHub" userId="lag129" href="https://github.com/lag129" />
        <LinkButton serviceName="Blog" userId="blog.lag129.net" href="https://blog.lag129.net" />
        <LinkButton serviceName="Misskey" userId="@lag129" href="https://misskey.lag129.net/@lag129" />
        <LinkButton serviceName="X (Twitter)" userId="@lag_129" href="https://x.com/lag_129" />
      </div>
    </Card>
  );
};
