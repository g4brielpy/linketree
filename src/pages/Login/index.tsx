import { useState } from "react";

import LogoDevLink from "../../assets/Logo.svg";
import { CustomInput } from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";

import { login } from "../../utils/signIn";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <main className="container h-dvh mx-auto p-4">
      <div className="h-full max-w-2xl mx-auto flex flex-col justify-center items-center">
        <img
          src={LogoDevLink}
          alt="Dev Link"
          className="w-[280px] md:w-[400px] h-auto"
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(email, password);
          }}
          className="mt-10 flex flex-col gap-4 w-full"
        >
          <label htmlFor="email-user" className="hidden">
            Email
          </label>
          <CustomInput
            id="email-user"
            type="email"
            placeholder="use@email.com"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <label htmlFor="password-user" className="hidden">
            Senha
          </label>
          <CustomInput
            id="password-user"
            type="password"
            placeholder="********"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <CustomButton type="submit">Acessar</CustomButton>
        </form>
      </div>
    </main>
  );
}
