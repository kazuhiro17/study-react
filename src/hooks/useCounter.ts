import { useSharedState } from "@/contexts/SharedStateContext";

export const useCounter = () => {
  const { count, doubleCount, isShow, handleClick, handleDisplay } = useSharedState();
  return { count, doubleCount, isShow, handleClick, handleDisplay };
};