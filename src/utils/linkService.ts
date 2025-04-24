import { db } from "../services/firebase";
import {
  collection,
  addDoc,
  getDocs,
  QuerySnapshot,
  DocumentData,
  CollectionReference,
} from "firebase/firestore";

interface linkProps {
  name: string;
  url: string;
  background: string;
  color: string;
  time?: Date;
}

const path: string = "links";
const collectionRef: CollectionReference<DocumentData> = collection(db, path);

export async function createLink(data: linkProps): Promise<boolean> {
  try {
    await addDoc(collectionRef, data);
    return true;
  } catch (e) {
    console.log(`Erro ao cadastrar link: ${e}`);
    throw new Error("Erro ao cadastrar link! Tente novamente.");
  }
}

export async function getLinks(): Promise<DocumentData[]> {
  try {
    const snapshot: QuerySnapshot<DocumentData> = await getDocs(collectionRef);
    const docsResult: DocumentData[] = snapshot.docs.map((doc) => doc.data());

    return docsResult;
  } catch (e) {
    console.log(`Erro ao buscar links: ${e}`);
    throw new Error("Erro ao buscar links! Tente novamente.");
  }
}
