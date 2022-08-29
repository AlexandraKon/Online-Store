import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useAuth() {
  const { email, token, id, name } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
    name,
  };
}
