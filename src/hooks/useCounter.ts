import { useSharedState } from "@/contexts/SharedStateContext";

export const useCounter = () => {
  const { count, isShow, handleClick, handleDisplay } = useSharedState();
  return { count, isShow, handleClick, handleDisplay };
};