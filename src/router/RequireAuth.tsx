import { Navigate } from 'react-router-dom'

type Props = {
    children: JSX.Element
    isAuth: boolean
}

export const RequireAuth = ({ children, isAuth }: Props) => {
    if (!isAuth) {
        return <Navigate to="/" replace />
    }

    return children
}