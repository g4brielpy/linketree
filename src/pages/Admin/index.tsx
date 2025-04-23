import { FormEvent, useState } from "react";

import { HeaderPrivite } from "../../components/HeaderPrivite";
import { CustomButton } from "../../components/CustomButton";
import { CustomInput } from "../../components/CustomInput";
import { BoxColor } from "../../components/BoxColor";
import { Title1 } from "../../components/Title1";

import { createLink } from "../../utils/linkService";

import { toast } from "react-hot-toast";

interface formLinkProps {
  name: string;
  url: string;
  background: string;
  color: string;
  time?: Date;
}

export function Admin() {
  const [formLink, setFormLink] = useState<formLinkProps>({
    name: "",
    url: "",
    background: "#FFFFFF",
    color: "#000000",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

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

          <CustomButton className="mt-8">Cadastrar</CustomButton>
        </form>

        <section className="mt-20 text-center">
          <Title1>Meus Links</Title1>
          {/* Adicionar links */}
        </section>
      </main>
    </div>
  );
}
