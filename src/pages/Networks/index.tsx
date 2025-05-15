import { linkSocialProps, setLinkSocial } from "../../utils/linkService";
import { useState, useEffect } from "react";
import { useFetchSocial } from "../../hooks/useFetchSocial";

import { HeaderPrivite } from "../../components/HeaderPrivite";
import { CustomButton } from "../../components/CustomButton";
import { CustomInput } from "../../components/CustomInput";
import { Title1 } from "../../components/Title1";

import { toast } from "react-hot-toast";

export function Networks() {
  const linksResult: linkSocialProps = useFetchSocial();
  const [socialMedia, setSocialMedia] = useState<linkSocialProps>({
    facebook: "",
    instagram: "",
    youtube: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    Object.keys(socialMedia).forEach((key) => {
      if (socialMedia[key as keyof linkSocialProps] != "") {
        const url: string = socialMedia[key as keyof linkSocialProps];
        setLinkSocial(key, url);
      }
    });

    toast.success("Links atualizados com sucesso!");
  };

  useEffect(() => {
    setSocialMedia(linksResult);
  }, [linksResult]);

  return (
    <div className="container mx-auto p-4 mt-2">
      <HeaderPrivite />
      <main className="max-w-2xl mx-auto my-20 flex flex-col justify-center">
        <Title1 className="text-center mb-16">Suas redes sociais</Title1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-4">
            <label
              htmlFor="link-facebook"
              className="text-white font-bold text-xl"
            >
              Link Facebook
            </label>
            <CustomInput
              type="url"
              id="link-facebook"
              placeholder="https://www.facebook.com/user/"
              value={socialMedia.facebook}
              onChange={(e) =>
                setSocialMedia({ ...socialMedia, facebook: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-4">
            <label
              htmlFor="link-instagram"
              className="text-white font-bold text-xl"
            >
              Link Instagram
            </label>
            <CustomInput
              type="url"
              id="link-instagram"
              placeholder="https://www.instagram.com/user/"
              value={socialMedia.instagram}
              onChange={(e) =>
                setSocialMedia({ ...socialMedia, instagram: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-4">
            <label
              htmlFor="link-youtube"
              className="text-white font-bold text-xl"
            >
              Link YouTube
            </label>
            <CustomInput
              type="url"
              id="link-youtube"
              placeholder="https://www.youtube.com/user/"
              value={socialMedia.youtube}
              onChange={(e) =>
                setSocialMedia({ ...socialMedia, youtube: e.target.value })
              }
            />
          </div>
          <CustomButton className="cursor-pointer">Salvar links</CustomButton>
        </form>
      </main>
    </div>
  );
}
