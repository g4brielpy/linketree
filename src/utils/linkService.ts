import { db } from "../services/firebase";
import {
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  collection,
  DocumentData,
  QuerySnapshot,
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
export interface linkSocialProps {
  facebook: string;
  instagram: string;
  youtube: string;
}

const path: string = "links";
const pathSocial: string = "socials";
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

export async function deleteLink(id: string): Promise<boolean> {
  const docRef = doc(db, path, id);
  try {
    const docSnap = await getDoc(docRef);
    if (!docSnap.exists()) {
      throw new Error("Link não encontrado. Verifique o ID.");
    }

    await deleteDoc(docRef);
    return true;
  } catch (e) {
    console.log(`Erro ao deletar link: ${e}`);
    throw new Error("Erro ao deletar link! Tente novamente.");
  }
}

export async function getLinksSociais(): Promise<linkSocialProps> {
  try {
    const docRef = doc(db, pathSocial, path);

    const docSnap = await getDoc(docRef);
    const docsResult: linkSocialProps = docSnap.data() as linkSocialProps;

    return docsResult;
  } catch (e) {
    console.log(`Erro ao buscar links: ${e}`);
    throw new Error("Erro ao buscar links! Tente novamente.");
  }
}

export async function setLinkSocial(rede: string, url: string) {
  const docRef = doc(db, pathSocial, path);
  const data = {
    [rede]: url,
  };

  try {
    const docSnap = await getDoc(docRef);
    console.log(docSnap.exists(), docSnap.data());

    if (!docSnap.exists()) {
      throw new Error("Link não encontrado");
    }

    await updateDoc(docRef, data);
  } catch (e) {
    console.log(`Erro ao buscar links: ${e}`);
    throw new Error("Erro ao buscar links! Tente novamente.");
  }
}
