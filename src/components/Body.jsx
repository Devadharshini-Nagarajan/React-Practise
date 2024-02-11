import { useContext, useEffect, useReducer, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/UserContex";
import userReducer from "../utils/UserReducer";
import { MainContext } from "../utils/ProjectContext";

const Body = () => {
  const [resData, setResData] = useState([]);
  // const [userState, dispatch] = useReducer(userReducer, { value: null });
  const { userName, setUserName } = useContext(UserContext);
  const [state, dispatch] = useContext(MainContext);

  useEffect(() => {
    fetchData();
  }, []);

  const RestaurantPromoted = withPromotedLabel(RestaurantCard);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setResData(
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setUserName("kd");
  };

  onNameChange = () => {
    dispatch({
      type: "SET_USER",

      value: "add",
    });
  };

  return (
    <div className="body">
      {state.name}
      <br />
      {/* {userState.value} */}
      <br />
      <button
        onClick={() => {
          onNameChange();
        }}
      >
        Top Rated
      </button>
      <div className="res-container">
        {resData?.map((el, i) =>
          el?.info?.name === "Wow! Momo" ? (
            <RestaurantPromoted resData={el} key={i} />
          ) : (
            <RestaurantCard resData={el} key={i} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
