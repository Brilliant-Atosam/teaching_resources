import { useState } from "react";

const useMenu = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => setToggleMenu(!toggleMenu);
  return { toggleMenu, handleToggle };
};

export default useMenu;
