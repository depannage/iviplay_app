// Context Api
import React, { createContext, ReactNode, useState } from 'react';
import { ContextProps } from '../constants';
// Create the context with an initial state
const ContextApi = createContext<ContextProps | undefined>(undefined);

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [showOrganise, setShowOrganiser] = useState(false)
    const [current, setCurrent] = useState(2)
    const [currentCard, setCurrentCard] = useState("")
    const [search, setSearch] = useState("all")
    return <ContextApi.Provider value={{search, setSearch,showOrganise, setShowOrganiser,current,setCurrent,currentCard, setCurrentCard}}>{children}</ContextApi.Provider>;
};

export default ContextApi;


// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext() {
    const context = React.useContext(ContextApi);

    if (context === undefined) {
        throw new Error("useAppContext must be used within a AppContextProvider")
    }
    return context;
}