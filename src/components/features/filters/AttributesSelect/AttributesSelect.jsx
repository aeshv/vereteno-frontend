import { Accordion, createStyles, Loader } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useFiltersAttributes } from "@/utils/hooks/filtersApiHooks/useFiltersAttributes";
import { AttributeItem } from "@/components/features/filters/AttributesSelect/AttributeItem";

const useAttributesStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "transparent",
    width: "100%",
    gap: theme.spacing.xs,
  },

  item: {
    backgroundColor: theme.white,
    border: `0.0625rem solid ${theme.colors.gray[3]}`,
    borderRadius: theme.radius.md,
    position: "relative",
    zIndex: 0,
    transition: "transform 100ms ease",
    marginBottom: theme.spacing.xs,

    "&[data-active]": {
      backgroundColor: theme.white,
      borderColor: theme.colors.brand[2],
      borderRadius: theme.radius.md,
      zIndex: 1,
    },
  },

  label: {
    fontFamily: "Jost",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "18px",
    color: "#868e96",
  },

  chevron: {
    "&[data-rotate]": {
      transform: "rotate(-90deg)",
    },
  },
}));

export function AttributesSelect() {
  const router = useRouter();
  const { query } = router;
  const [value, setValue] = useState([]);
  const { classes } = useAttributesStyles();

  const getAttributes = useFiltersAttributes();

  const { isLoading, isError, data, error } = getAttributes;
  const tempData = data?.data || [];

  const onAttributesChange = (e, name = "") => {
    let res = { name: name, values: [...e] };
    setValue((prevState) => [
      ...prevState.filter((item) => item.name !== res.name),
      res,
    ]);
  };

  useEffect(() => {
    const temp1 = [].concat(
      value?.map((item) => {
        return item.values;
      }),
    );
    router.query.attributes = Array.from(
      new Set(
        temp1.reduce((acc, current) => {
          return acc.concat(current);
        }, []),
      ),
    );

    router.push(router);
  }, [value]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Accordion multiple={true} classNames={classes} className={classes.root}>
      {tempData?.map((singleAttribute, index) => {
        return (
          <React.Fragment key={index}>
            <Accordion.Item
              key={singleAttribute.id}
              value={singleAttribute.name}
            >
              <Accordion.Control disabled={!singleAttribute?.values?.length}>
                {singleAttribute.name}
              </Accordion.Control>
              <Accordion.Panel>
                <AttributeItem
                  {...singleAttribute}
                  onChange={onAttributesChange}
                />
              </Accordion.Panel>
            </Accordion.Item>
          </React.Fragment>
        );
      })}
    </Accordion>
  );
}
