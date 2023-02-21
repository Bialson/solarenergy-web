import { createContext } from "react";

export const InfoContext = createContext({showInfo: false, setInfoShow: (showInfo: boolean) => {}});