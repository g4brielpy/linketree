import { useEffect, useState } from "react";
import { getLinks, linkProps } from "../utils/linkService";

export function useFetchLinks() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [links, setLinks] = useState<linkProps[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const linksResult: linkProps[] = await getLinks();
        setLinks(linksResult);
      } catch (e) {
        throw new Error("Erro ao buscar links! Tente novamente.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return { links, isLoading };
}
