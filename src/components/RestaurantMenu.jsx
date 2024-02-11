import { useEffect } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem, clearAll } from "../utils/Slice/cartSlice";

const RestaurantMenu = (props) => {
  const data = useRestaurantMenu();
  const dispatch = useDispatch();
  console.log("render parent");
  useEffect(() => {
    console.log("use Effect parent");
  }, []);
  const handleDispatch = () => {
    dispatch(addItem("Food", "Content"));
    // dispatch(clearAll())
  };
  return (
    <div className="res-card">
      <span>{data}</span>
      <span>DDDD</span>
      <button onClick={handleDispatch}>Dispatch </button>
    </div>
  );
};
export default RestaurantMenu;
