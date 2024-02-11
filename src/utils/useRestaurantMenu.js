import { useEffect, useState } from "react";

const useRestaurantMenu = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(22);
    console.log("use Effect in hook");
  }, []);
  console.log("render hook");
  return data;
};

export default useRestaurantMenu;
