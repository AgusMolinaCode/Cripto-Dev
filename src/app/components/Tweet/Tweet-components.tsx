// tweet-components.tsx
import Image from "next/image";
import type { TwitterComponents } from "react-tweet";

export const components: TwitterComponents = {
  AvatarImg: (props) => <Image {...props} alt=""/>,
  MediaImg: (props) => <Image {...props} alt="" fill unoptimized />,
};
