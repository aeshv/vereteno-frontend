import React from "react";
import Header from "@/components/features/header/Header";
import Footer from "@/components/features/footer/Footer";
import {CookieDialog} from "@/components/features/Dialog/CookieDialog";
import {MegaHeader} from "@/components/entity/MegaHeader/MegaHeader";

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            <MegaHeader/>
            <div className="content">{children}</div>
            <CookieDialog/>
            <Footer/>
        </>
    );
};
export default MainLayout;
