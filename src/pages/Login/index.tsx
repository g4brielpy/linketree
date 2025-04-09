import LogoDevLink from "../../assets/Logo.svg";

import { CustomInput } from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";

export function Login() {
  return (
    <main className="container h-dvh mx-auto p-4">
      <div className="h-full max-w-2xl mx-auto flex flex-col justify-center items-center">
        <img
          src={LogoDevLink}
          alt="Dev Link"
          className="w-[280px] md:w-[400px] h-auto"
        />

        <form action="#" className="mt-10 flex flex-col gap-4 w-full">
          <label htmlFor="email-user" className="hidden">
            Email
          </label>
          <CustomInput
            id="email-user"
            type="email"
            placeholder="use@email.com"
            required
          />

          <label htmlFor="password-user" className="hidden">
            Senha
          </label>
          <CustomInput
            id="password-user"
            type="password"
            placeholder="********"
            required
          />

          <CustomButton>Acessar</CustomButton>
        </form>
      </div>
    </main>
  );
}
