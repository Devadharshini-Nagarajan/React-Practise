import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const id = 22;

  return (
    <Link to={`/restaurant/` + id}>
      <div className="res-card">
        <span className="title">{props.resData.info.name}</span>

        <span>{resData.info.areaName}</span>
      </div>
    </Link>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <span>Promoted</span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
