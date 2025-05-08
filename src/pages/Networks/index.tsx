import { CustomButton } from "../../components/CustomButton";
import { CustomInput } from "../../components/CustomInput";
import { HeaderPrivite } from "../../components/HeaderPrivite";
import { Title1 } from "../../components/Title1";

export function Networks() {
  return (
    <div className="container mx-auto p-4 mt-2">
      <HeaderPrivite />
      <main className="max-w-2xl mx-auto my-20 flex flex-col justify-center">
        <Title1 className="text-center mb-16">Suas redes sociais</Title1>

        <form className="flex flex-col gap-4 w-full">
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
              placeholder="https://www.facebook/user.com"
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
              placeholder="https://www.instagram/user.com"
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
              placeholder="https://www.youtube/user.com"
            />
          </div>
          <CustomButton className="cursor-pointer">Salvar links</CustomButton>
        </form>
      </main>
    </div>
  );
}
