"use client";
import { createContext, useContext, useState } from "react";

const AreaContext = createContext();

export function AreaProvider({ children }) {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <AreaContext.Provider value={{ selectedArea, setSelectedArea }}>
      {children}
    </AreaContext.Provider>
  );
}

export function useArea() {
  return useContext(AreaContext);
}
