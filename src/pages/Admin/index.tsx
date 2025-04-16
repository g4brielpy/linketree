import { HeaderPrivite } from "../../components/HeaderPrivite";
import { CustomButton } from "../../components/CustomButton";
import { CustomInput } from "../../components/CustomInput";

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
              placeholder="https://meu-link.com/"
              required
            />
          </div>

          <CustomButton className="mt-8">Cadastrar</CustomButton>
        </form>
      </main>
    </div>
  );
}
