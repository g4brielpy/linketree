import { useEffect, useState } from "react";
import { getLinks } from "../utils/linkService";

export function useFetchLinks() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const linksResult = await getLinks();
        console.log(linksResult);
      } catch (e) {
        throw new Error("Erro ao buscar links! Tente novamente.");
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
}
