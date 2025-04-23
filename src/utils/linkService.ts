import { db } from "../services/firebase";
import { collection, addDoc } from "firebase/firestore";

interface linkProps {
  name: string;
  url: string;
  background: string;
  color: string;
  time?: Date;
}

const path: string = "links";

export async function createLink(data: linkProps): Promise<boolean> {
  try {
    await addDoc(collection(db, path), data);
    return true;
  } catch (e) {
    console.log(`Erro ao cadastrar link: ${e}`);
    throw new Error("Erro ao cadastrar link! Tente novamente.");
  }
}
