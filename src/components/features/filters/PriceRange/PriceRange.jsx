import { Input, RangeSlider, Slider } from "@mantine/core";
import { IconCurrencyRubel, IconGripHorizontal } from "@tabler/icons-react";
import React, { useState } from "react";
import styles from "./PriceRange.module.scss";

const PriceRange = () => {
  const [rangeValue, setRangeValue] = useState([0, 25000]);

  return (
    <div className={styles.container}>
      <div className={styles.price}>
        <Input
          value={rangeValue[0]}
          icon={<IconCurrencyRubel />}
          size="xs"
          onChange={(e) => setRangeValue((prev) => [e.target.value, prev[1]])}
          placeholder="0"
        />
        <span />
        <Input
          value={rangeValue[1]}
          size="xs"
          onChange={(e) => setRangeValue((prev) => [prev[0], e.target.value])}
          placeholder="100 000"
        />
      </div>
      <div className={styles.slider}>
        <RangeSlider
          max={25000}
          step={10}
          min={0}
          value={rangeValue}
          onChange={setRangeValue}
          label={null}
          // thumbChildren={<IconGripHorizontal size="1.2rem" stroke={1.5} />}
        />
      </div>
    </div>
  );
};

export default PriceRange;
