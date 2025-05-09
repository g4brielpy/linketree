import { onSnapshot, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { linkProps } from "../utils/linkService";
import { db } from "../services/firebase";

export function useFetchLinks(): linkProps[] {
  const [links, setLinks] = useState<linkProps[]>([]);
  const collectionRef = collection(db, "links");

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const docsResult: linkProps[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          url: data.url,
          background: data.background,
          color: data.color,
          time: data.time,
        };
      });

      setLinks(docsResult);
    });

    return () => unsubscribe();
  }, []);

  return links;
}
