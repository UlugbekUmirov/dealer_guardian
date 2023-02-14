import { useDispatch } from "react-redux";

export const DispatchResults = (l = []) => {
  const dispatch = useDispatch();
  const dispatchResults = (l = []) => {
    dispatch({ type: "RESULTS", payload: l });
  };
  return dispatchResults;
};
