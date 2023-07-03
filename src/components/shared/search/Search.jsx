import React from "react";
import {SlMagnifier} from "react-icons/sl";
import styles from "./Search.module.scss";
import {Autocomplete, createStyles} from "@mantine/core";


const useStyles = createStyles((theme) => {
    const converted = {
        ".container": {
            width: "100%",
            border: "1.5px solid #6f73ee",
            borderRadius: "5px",
            borderTopRightRadius: "9px",
            borderBottomRightRadius: "9px",
            display: "flex",
            flexDirection: "row",
            alignItems: "stretch",
            justifyContent: "space-between",
            position: "relative",
            transition: "all 0.2s",
            background: "transparent",
            alignSelf: "stretch",
            "&:hover": {background: "rgba($color: #b5b7db, $alpha: 0.2)"}
        },
        ".searchinput": {
            padding: "10px 20px",
            width: "100%",
            "& input": {width: "100%", border: "none", background: "transparent"}
        },
        ".submit": {
            width: "35px",
            height: "100%",
            background: "#6f73ee",
            outline: "1.5px solid #6f73ee",
            borderRadius: "0px 5px 5px 0px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "absolute",
            top: "0",
            right: "0",
            transition: "all 0.2s"
        },
        ".submit:hover": {opacity: "75%"}
    }

})

const Search = () => {
    const {classes, theme} = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.searchinput}>
                <Autocomplete
                    placeholder="Поиск..."
                    variant="unstyled"

                    size="sm"
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                />
            </div>
            <div className={classes.submit}>
                <SlMagnifier color={"white"}/>
            </div>
        </div>
    );
};

export default Search;
