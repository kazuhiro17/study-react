import { usePathname } from "next/navigation";
import { useEffect, useMemo } from "react";

export const useBgColor = () => {
  const pathname = usePathname();

  const bgColor = useMemo(() => {
    switch (pathname) {
      case "/":
        return "lightblue";
      case "/about":
        return "beige";
      default:
        return "";
    }
  }, [pathname]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [bgColor]);
};
