import {Input, RangeSlider, Slider} from "@mantine/core";
import {IconCurrencyRubel, IconGripHorizontal} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import styles from "./PriceRange.module.scss";
import {useDebouncedValue} from "@mantine/hooks";
import {useRouter} from "next/router";

const PriceRange = () => {
    const [rangeValue, setRangeValue] = useState([0, 25000]);
    const [debounced] = useDebouncedValue(rangeValue, 200);

    const router = useRouter()
    const {query} = router

    const onPriceChange = () => {
        if (debounced[0] === 0 && debounced[1] === 25000) {
            delete router.query.priceMin
            delete router.query.priceMax
            router.push(router)
        } else {
            router.query.priceMin = debounced[0]
            router.query.priceMax = debounced[1]
            router.push(router)
        }

    };

    useEffect(() => {
        onPriceChange()
    }, [debounced])


    return (
        <div className={styles.container}>
            <div className={styles.price}>
                <Input
                    value={rangeValue[0]}
                    icon={<IconCurrencyRubel/>}
                    size="xs"
                    onChange={(e) => setRangeValue((prev) => [e.target.value, prev[1]])}
                    placeholder="0"
                />
                <span/>
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
