import React, { useEffect, useState } from "react";

import { auth } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { Loading } from "./Loading";
import { Erro } from "./Erro";

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
      } else {
        setIsAuthenticated(false);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <Loading />;
  if (!isAuthenticated) return <Erro />;

  return <>{children}</>;
}
