import { useSharedState } from "@/contexts/SharedStateContext";

export const useInputArray = () => {
  const { text, array, handleChange, handleAdd } = useSharedState();
  return { text, array, handleChange, handleAdd };
};