import { HeaderPrivite } from "../../components/HeaderPrivite";
import { CustomButton } from "../../components/CustomButton";
import { CustomInput } from "../../components/CustomInput";
import { BoxColor } from "../../components/BoxColor";
import { Title1 } from "../../components/Title1";

export function Admin() {
  return (
    <div className="container mx-auto p-4 mt-2">
      <HeaderPrivite />
      <main className="max-w-2xl mx-auto my-20 flex flex-col justify-center">
        <form>
          <div className="flex flex-col gap-4">
            <label htmlFor="link-name" className="text-white font-bold text-xl">
              Nome do Link
            </label>
            <CustomInput
              type="text"
              id="link-name"
              placeholder="Meu Link"
              required
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
            />
          </div>

          <div
            id="conteiner-colors"
            className="w-full mt-10 flex flex-col gap-4 sm:flex-row sm:justify-around sm:gap-5"
          >
            <BoxColor>
              <label htmlFor="" className="text-white font-bold text-xl">
                Cor de Fundo
              </label>
              <CustomInput
                type="color"
                defaultValue="#FFFFFF"
                className="w-[100px] pl-0.5 pr-0.5 cursor-pointer"
              />
            </BoxColor>

            <BoxColor>
              <label htmlFor="" className="text-white font-bold text-xl">
                Cor de Texto
              </label>
              <CustomInput
                type="color"
                defaultValue="#000000"
                className="w-[100px] pl-0.5 pr-0.5 cursor-pointer"
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
