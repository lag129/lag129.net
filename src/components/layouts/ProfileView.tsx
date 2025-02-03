import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { Card } from "../ui/Card";

const markdownString = `
# lag129

**GitHub**  
[lag129](https://github.com/lag129)

**Twitter**  
[@lag_129](https://twitter.com/lag_129)

**Mastodon**  
[@lag129](https://fedibird.com/@lag129)
`;

export const ProfileView = () => {
  return (
    <Card>
      <Image
        src="/img/profile.jpg"
        alt="Profile Image"
        width={500}
        height={500}
        className="rounded-full"
      />
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">
        {markdownString}
      </ReactMarkdown>
    </Card>
  );
};
