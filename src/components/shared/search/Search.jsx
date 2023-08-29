import React from "react";
import { SlMagnifier } from "react-icons/sl";
import styles from "./Search.module.scss";
import { Autocomplete, createStyles, TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import { useDebouncedState } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  container: {
    width: "auto",
    flexGrow: 11,
    border: `1.5px solid ${theme.colors.brand[9]}`,
    borderRadius: "5px",
    borderTopRightRadius: "9px",
    borderBottomRightRadius: "9px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "stretch",
    justifyContent: "space-between",
    position: "relative",
    transition: "all 0.2s",
    background: "transparent",
    alignSelf: "stretch",
    "&:hover": {
      background: `rgba($color: ${theme.colors.brand[2]}, $alpha: 0.2)`,
    },
  },
  searchinput: {
    padding: "10px 20px",
    width: "100%",
    "& input": { width: "100 % ", border: "none", background: "transparent" },
  },
  submit: {
    width: "35px",
    height: "100%",
    background: `${theme.colors.brand[9]}`,
    outline: `1.5px solid ${theme.colors.brand[9]}`,
    borderRadius: "0px 5px 5px 0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    position: "absolute",
    top: "0",
    right: "0",
    transition: "all 0.2s",
    "&:hover": { opacity: "75%" },
  },
}));

const Search = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const { query } = router;
  //Значение поиска
  const [searchValue, setSearchValue] = useDebouncedState(
    query.search || "",
    0,
  );
  const onSearchChange = (e) => {
    if (e.length !== 0) {
      //Значение поиска
      setSearchValue(e);
      router.query.search = e;
      router.push(router);
    } else {
      setSearchValue("");
      if (router.query.search) {
        delete router.query.search;
        router.push(router);
      }
    }
  };

  const handleSearchButton = () => {
    router.pathname = "/products";
    router.push(router);
  };

  return (
    <div className={classes.container}>
      <div className={classes.searchinput}>
        <Autocomplete
          value={searchValue}
          placeholder="Поиск..."
          variant="unstyled"
          onChange={onSearchChange}
          size="sm"
          data={["Кепка", "Fedora", "Ушанка", "Шапка"]}
        />
      </div>
      <div className={classes.submit} onClick={handleSearchButton}>
        <SlMagnifier color={"white"} />
      </div>
    </div>
  );
};

export default Search;
