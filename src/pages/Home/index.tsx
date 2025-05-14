import { Title1 } from "../../components/Title1";
import { CustomLink } from "../../components/CustomLink";
import { FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";

import {
  getLinks,
  linkProps,
  getLinksSociais,
  linkSocialProps,
} from "../../utils/linkService";

import { useEffect, useState } from "react";

export function Home() {
  const [links, setLinks] = useState<linkProps[]>([]);

  const [linksSociais, setLinksSociais] = useState<linkSocialProps>({
    instagram: "",
    facebook: "",
    youtube: "",
  });
  const socialIcons = {
    instagram: <FaInstagram size={32} color="#FFF" />,
    facebook: <FaFacebook size={32} color="#FFF" />,
    youtube: <FaYoutube size={32} color="#FFF" />,
  };

  useEffect(() => {
    async function fetchLinks() {
      const linksData = await getLinks();
      const linksSociaisData = await getLinksSociais();

      setLinks(linksData);
      setLinksSociais(linksSociaisData);
    }

    fetchLinks();
  }, []);

  return (
    <>
      <main className="container mx-auto p-4 mt-20 text-center">
        <Title1>LinkeTree Gabriel</Title1>
        <section className="max-w-2xl mx-auto">
          <p className="text-white my-12">Veja meus links abaixo 👇🏽</p>
          <nav className="flex flex-col gap-4">
            {links.length === 0 && (
              <p className="text-white text-2xl">
                Nenhum link encontrado. Verifique o banco de dados.
              </p>
            )}

            {links.map((link) => (
              <CustomLink
                key={link.id!}
                style={{
                  backgroundColor: link.background,
                  color: link.color,
                }}
                href={link.url}
              >
                {link.name}
              </CustomLink>
            ))}
          </nav>
        </section>
      </main>

      <footer className="mx-auto p-4 mt-20 text-center ">
        <nav className="flex justify-center gap-4">
          {Object.entries(linksSociais).map(
            ([rede, url]) =>
              url.trim() != "" && (
                <a
                  key={rede}
                  href={linksSociais[rede as keyof linkSocialProps]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[rede as keyof typeof socialIcons]}
                </a>
              )
          )}
        </nav>
      </footer>
    </>
  );
}
