import React, { useState } from "react";

function List() {
  const [summoner,setsumooner] = useState ([
  ]);
  return <div className = 'information'>
    {summoner.map((item,idx) => {
    })}
  </div>;
}

export default List;
