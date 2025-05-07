import { useEffect, useState } from "react";
import { linkProps } from "../utils/linkService";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../services/firebase";

export function useFetchLinks(): linkProps[] {
  const [links, setLinks] = useState<linkProps[]>([]);
  const collectionRef = collection(db, "links");

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const docsResult: linkProps[] = snapshot.docs.map((doc) => ({
        name: doc.data().name,
        url: doc.data().url,
        background: doc.data().background,
        color: doc.data().color,
        time: doc.data().time,
      }));

      setLinks(docsResult);
    });

    return () => unsubscribe();
  }, []);

  return links;
}
