import { FormEvent, useState } from "react";

import { HeaderPrivite } from "../../components/HeaderPrivite";
import { CustomButton } from "../../components/CustomButton";
import { CustomInput } from "../../components/CustomInput";
import { CustomLink } from "../../components/CustomLink";
import { BoxColor } from "../../components/BoxColor";
import { Title1 } from "../../components/Title1";

import { createLink, linkProps } from "../../utils/linkService";
import { useFetchLinks } from "../../hooks/useFetchLinks";

import { toast } from "react-hot-toast";
import { FiTrash } from "react-icons/fi";

export function Admin() {
  const [formLink, setFormLink] = useState<linkProps>({
    name: "",
    url: "",
    background: "#FFFFFF",
    color: "#000000",
  });
  const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);

  // UseEffect para buscar os links, utilizando observador em tempo real
  // com o onSnapshot do Firebase
  const linksResult = useFetchLinks();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoadingSubmit(true);

    try {
      const formWithTime = {
        ...formLink,
        time: new Date(),
      };

      await createLink(formWithTime);
      toast.success("Link cadastrado com sucesso!");
    } catch (e: any) {
      toast.error(e?.message || "Erro inesperado ao cadastrar link.");
    } finally {
      setLoadingSubmit(false);
      setFormLink({
        name: "",
        url: "",
        background: "#FFFFFF",
        color: "#000000",
      });
    }
  };

  return (
    <div className="container mx-auto p-4 mt-2">
      <HeaderPrivite />
      <main className="max-w-2xl mx-auto my-20 flex flex-col justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <label htmlFor="link-name" className="text-white font-bold text-xl">
              Nome do Link
            </label>
            <CustomInput
              type="text"
              id="link-name"
              placeholder="Meu Link"
              required
              value={formLink.name}
              onChange={(e) =>
                setFormLink({ ...formLink, name: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="link-url" className="text-white font-bold text-xl">
              URL do Link
            </label>
            <CustomInput
              type="url"
              id="link-url"
              placeholder="https://www.meu-link.com/"
              required
              value={formLink.url}
              onChange={(e) =>
                setFormLink({ ...formLink, url: e.target.value })
              }
            />
          </div>

          <div
            id="conteiner-colors"
            className="w-full mt-10 flex flex-col gap-4 sm:flex-row sm:justify-around sm:gap-5"
          >
            <BoxColor>
              <label className="text-white font-bold text-xl">
                Cor de Fundo
              </label>
              <CustomInput
                type="color"
                className="w-[100px] pl-0.5 pr-0.5 cursor-pointer"
                value={formLink.background}
                onChange={(e) =>
                  setFormLink({ ...formLink, background: e.target.value })
                }
              />
            </BoxColor>

            <BoxColor>
              <label className="text-white font-bold text-xl">
                Cor de Texto
              </label>
              <CustomInput
                type="color"
                className="w-[100px] pl-0.5 pr-0.5 cursor-pointer"
                value={formLink.color}
                onChange={(e) =>
                  setFormLink({ ...formLink, color: e.target.value })
                }
              />
            </BoxColor>
          </div>

          <CustomButton
            className={`mt-8 ${loadingSubmit && "opacity-50"}`}
            disabled={loadingSubmit ? true : false}
          >
            Cadastrar
          </CustomButton>
        </form>

        <section className="mt-20 text-center">
          {linksResult.length ? (
            <div className="flex flex-col gap-4">
              {linksResult.map((link, i) => (
                <CustomLink
                  key={i}
                  href={link.url}
                  className="w-full flex justify-between items-center px-6"
                  style={{
                    backgroundColor: link.background,
                    color: link.color,
                  }}
                >
                  {link.name}

                  <button
                    className="cursor-pointer bg-black p-1 rounded-b-sm"
                    title="Deletar"
                  >
                    <FiTrash size={24} color="#ffffff" />
                  </button>
                </CustomLink>
              ))}
            </div>
          ) : (
            <Title1>Sem links até o momento</Title1>
          )}
        </section>
      </main>
    </div>
  );
}
