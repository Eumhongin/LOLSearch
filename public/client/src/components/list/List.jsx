import React, { useState } from "react";
import Listcard from "./card/Listcard";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function List() {
  const [summoner, setsumooner] = useState([]);
  const reducerstate = useSelector((state) => state.layouts);

  return (
    <div className="information">
      {summoner.map((item, idx) => {
        return (
          <Listcard
            key={idx}
            tier={item.tier}
            summonername={item.name}
            win={item.win}
            lose={item.lose}
          />
        );
      })}
    </div>
  );
}

export default List;
