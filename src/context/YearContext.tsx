import { createContext } from "react";

export const YearContext = createContext({year: '', setYear: (year: string) => {}});