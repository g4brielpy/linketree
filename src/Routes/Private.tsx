import React, { useEffect, useState } from "react";

import { auth } from "../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

interface PrivateProps {
  children: React.ReactNode;
}

export function Private({ children }: PrivateProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (!isAuthenticated) return <p>Erro ao carregar página</p>;

  return <>{children}</>;
}
