import React from "react";
import {SlMagnifier} from "react-icons/sl";
import styles from "./Search.module.scss";
import {Autocomplete, createStyles, TextInput} from "@mantine/core";
import {useRouter} from "next/router";
import {useDebouncedState} from "@mantine/hooks";


const useStyles = createStyles((theme) => ({

    container: {
        width: "auto",
        flexGrow: 11,
        border: "1.5px solid #6f73ee",
        borderRadius: "5px",
        borderTopRightRadius: "9px",
        borderBottomRightRadius: "9px",
        display: "flex",
        flexDirection: "row",
        flexWrap: 'nowrap',
        alignItems: "stretch",
        justifyContent: "space-between",
        position: "relative",
        transition: "all 0.2s",
        background: "transparent",
        alignSelf: "stretch",
        "&:hover": {background: "rgba($color: #b5b7db, $alpha: 0.2)"}
    },
    searchinput: {
        padding: "10px 20px",
        width: "100%",
        "& input": {width: "100 % ", border: "none", background: "transparent"}
    },
    submit: {
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
        transition: "all 0.2s",
        "&:hover": {opacity: "75%"}
    }


}))

const Search = () => {
    const {classes} = useStyles();

    const {query} = useRouter()

    //Значение поиска
    const [searchValue, setSearchValue] = useDebouncedState(query.search || '', 350)

    const onSearchChange = (e) => {

        //Значение поиска
        setSearchValue(e)
    }

    return (
        <div className={classes.container}>
            <div className={classes.searchinput}>
                <Autocomplete
                    placeholder="Поиск..."
                    variant="unstyled"
                    onChange={onSearchChange}
                    size="sm"
                    data={['шляпы', 'головные уборы', 'кепки', 'шапки', 'ушанки', 'шелковые штуки',]}
                />
            </div>
            <div className={classes.submit}>
                <SlMagnifier color={"white"}/>
            </div>
        </div>
    );
};

export default Search;
