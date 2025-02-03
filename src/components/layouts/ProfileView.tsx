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
      <div className="pb-4">
        <LinkButton imgUrl="/github.svg" serviceName="GitHub" userId="lag129" href="https://github.com/lag129" />
      </div>
      <div className="pb-4">
        <LinkButton imgUrl="/x.png" serviceName="Twitter" userId="@lag_129" href="https://twitter.com/lag_129" />
      </div>
      <div>
        <LinkButton imgUrl="/mastodon.svg" serviceName="Mastodon" userId="@lag129" href="https://fedibird.com/@lag129" />
      </div>
    </Card>
  );
};
