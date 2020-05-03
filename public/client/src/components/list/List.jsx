import React, { useState } from "react";

function List() {
  const [summoner,setsumooner] = useState ([
  ]);
  return <div className = 'information'>
    {summoner.map((item,idx) => {
      return tear={idx} , info={item}
    })}
  </div>;
}

export default List;
