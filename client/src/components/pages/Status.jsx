import React from "react";

import TppFilter from "../filters/TppFilter";
import TppList from '../TppList'

const StatusTpp = () => {
  return (
    <div className="container">
      <TppFilter />
      <TppList />
    </div>
  )
}

export default StatusTpp