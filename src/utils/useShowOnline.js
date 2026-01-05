import { useState, useEffect } from "react";

export const useShowOnline = () => {
  //check if online
  const [onlinestatus, Setonlinestatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      Setonlinestatus(false);
    });
    window.addEventListener("online", () => {
      Setonlinestatus(true);
    });
  }, []);
  //return boolean value
  return onlinestatus;
};
