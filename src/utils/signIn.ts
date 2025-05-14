import { auth } from "../services/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export function login(email: string, password: string): Promise<boolean> {
  if (email.trim() === "" || password.trim() === "") {
    return Promise.resolve(false);
  }

  return signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      return true;
    })
    .catch((e) => {
      console.error("Erro ao fazer Login: " + e.code);
      return false;
    });
}

export async function logout(): Promise<void> {
  await signOut(auth);
}
