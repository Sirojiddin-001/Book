import { useMediaQuery } from "react-responsive";

export const Xl = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  return isDesktop ? children : null;
};
export const Lg = ({ children }) => {
  const isLgTablet = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  return isLgTablet ? children : null;
};
export const Md = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
export const Sm = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 576, maxWidth: 767 });
  return isMobile ? children : null;
};
export const LgToXl = ({ children }) => {
  const isLgTablet = useMediaQuery({ query: "(min-width: 992px)" });
  return isLgTablet ? children : null;
};
export const LgAngBelow = ({ children }) => {
  const isLgTablet = useMediaQuery({ query: "(max-width: 1200px)" });
  return isLgTablet ? children : null;
};
export const MdToXl = ({ children }) => {
    const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
    return isTablet ? children : null;
  };
export const MdAngBelow = ({ children }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 991px)" });
  return isTablet ? children : null;
};
export const SmToXl = ({ children }) => {
  const isTablet = useMediaQuery({ query: "(min-width: 576px)" });
  return isTablet ? children : null;
};
export const SmToLg = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 576, maxWidth: 991 });
  return isTablet ? children : null;
};
export const SmAngBelow = ({ children }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 767px)" });
  return isTablet ? children : null;
};
export const XSmAngBelow = ({ children }) => {
  const isTablet = useMediaQuery({ query: "(max-width: 575px)" });
  return isTablet ? children : null;
};
