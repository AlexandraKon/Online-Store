import React, {useContext} from 'react';

export const AuthContext = React.createContext<React.RefObject<HTMLDivElement> | null>(null);

export function UserAuth() {
    return useContext(AuthContext);
};