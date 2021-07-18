import React, { useState } from "react";

import { RateBtn, Range } from "./Rate.styles";

const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  return (
    <div>
      <Range
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
      />
      {value}
      <p>
        <RateBtn onClick={() => callback(value)}>Rate</RateBtn>
      </p>
    </div>
  );
};

export default Rate;
