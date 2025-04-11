import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export function login(email: string, password: string): Promise<boolean> {
  if (email.trim() === "" || password.trim() === "") {
    return Promise.resolve(false);
  }

  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
      return true;
    })
    .catch((e) => {
      console.error("Erro ao fazer Login: " + e.code);
      return false;
    });
}
