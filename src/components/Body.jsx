import { useContext, useEffect, useReducer, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { MainContext } from "../utils/ProjectContext";

import WorkerFactory from "../webWorker/WorkerFactory";
import myWorker from "../webWorker/worker.worker";

const Body = () => {
  const [resData, setResData] = useState([]);
  // const [userState, dispatch] = useReducer(userReducer, { value: null });
  const [state, dispatch] = useContext(MainContext);
  const [worker, setWorker] = useState(null);
  const [workerData, setWorkerData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
    const workerInstance = new WorkerFactory(myWorker);

    workerInstance.onmessage = (e) => {
      console.log(e.data);
      setWorkerData(e.data);
    };
    setWorker(workerInstance);

    return () => {
      workerInstance.terminate();
    };
  }, []);

  const RestaurantPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    setLoading(true);
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    setResData(
      res.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setLoading(false);
  };

  const onNameChange = () => {
    dispatch({
      type: "SET_USER",

      value: "Devadharshini",
    });
  };

  const onCallWorker = () => {
    worker.postMessage(5);
  };

  return (
    <div className="body">
      <div style={{ padding: "30px" }}>
        User Name: {state.name}
        <br />
        <button
          onClick={() => {
            onNameChange();
          }}
        >
          Change Name
        </button>
      </div>
      <div style={{ padding: "30px" }}>
        Worker Value: {workerData}
        <br />
        <button
          onClick={() => {
            onCallWorker();
          }}
        >
          Call Worker (5)
        </button>
      </div>
      <div className="res-container">
        {loading ? (
          <span className="loading">Loading....</span>
        ) : (
          <>
            {resData?.map((el, i) =>
              el?.info?.name === "Wow! Momo" ? (
                <RestaurantPromoted resData={el} key={i} />
              ) : (
                <RestaurantCard resData={el} key={i} />
              )
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
