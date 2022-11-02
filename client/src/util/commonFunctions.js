import { setToggleFeedback, setToggleMenu } from "../redux/globalStates";
import { useDispatch } from "react-redux";
export default function useCommonFuntions() {
  const dispatch = useDispatch();
  const handleToggleMenu = () => dispatch(setToggleMenu());
  const handleToggleFeedback = () => dispatch(setToggleFeedback());
  return { handleToggleMenu, handleToggleFeedback };
}
