import { createContext, useContext } from "react";
import { TStorage } from "../types/types";

type TAuthContext = {
    value: {
        isAuth: boolean,
    },
    setItem: (item: TStorage) => void,
};

const authContextInitial: TAuthContext = {
    value: {
        isAuth: false,
    },
    setItem: () => {},
};

export const AuthContext = createContext(authContextInitial);
export function UserAuth() {
    return useContext(AuthContext);
};