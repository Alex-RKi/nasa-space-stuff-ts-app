import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "../store/action-creators";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(Actions, dispatch);
};
