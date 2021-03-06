import { useDispatch,useSelector,TypedUseSelectorHook } from "react-redux";
import type { RootState,AppDispatch } from "./store";

export const useAppdispatch = ()=> useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> =  useSelector;