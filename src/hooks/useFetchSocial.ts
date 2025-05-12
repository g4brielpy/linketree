import { useEffect, useState } from "react";
import { getLinksSociais, linkSocialProps } from "../utils/linkService";

export function useFetchSocial(): linkSocialProps {
  const [socialMedia, setSocialMedia] = useState<linkSocialProps>({
    facebook: "",
    instagram: "",
    youtube: "",
  });
  useEffect(() => {
    const fetchSocialMedia = async () => {
      const linksSocials: linkSocialProps = await getLinksSociais();
      setSocialMedia(linksSocials);
    };

    fetchSocialMedia();
  }, []);

  return socialMedia;
}
