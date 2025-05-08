import { db } from "../services/firebase";
import {
  collection,
  addDoc,
  getDocs,
  QuerySnapshot,
  DocumentData,
  CollectionReference,
} from "firebase/firestore";

export interface linkProps {
  name: string;
  url: string;
  background: string;
  color: string;

  id?: string;
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

export async function getLinks(): Promise<linkProps[]> {
  try {
    const snapshot: QuerySnapshot<DocumentData> = await getDocs(collectionRef);
    const docsResult: linkProps[] = snapshot.docs.map((doc) => {
      return {
        name: doc.data().name,
        url: doc.data().url,
        background: doc.data().background,
        color: doc.data().color,
        time: doc.data().time,
      };
    });

    return docsResult;
  } catch (e) {
    console.log(`Erro ao buscar links: ${e}`);
    throw new Error("Erro ao buscar links! Tente novamente.");
  }
}
