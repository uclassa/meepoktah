import { createContext } from "react";

export const envContext = createContext<Record<string, string | undefined>>({});
