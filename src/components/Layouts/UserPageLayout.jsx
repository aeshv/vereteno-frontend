import React from "react";
import Header from "@/components/features/header/Header";
import Footer from "@/components/features/footer/Footer";
import {Flex} from "@mantine/core";
import {PersonalInfoExpanded} from "@/components/widget/PersonalInfoExpanded/PersonalInfoExpanded";
import PageHead from "@/components/SEO/PageHead";
import {MegaHeader} from "@/components/entity/MegaHeader/MegaHeader";

const UserPageLayout = ({children}) => {
    return (
        <>
            <PageHead title={"Личный Кабинет"}/>
            <Header/>
            <MegaHeader/>
            <div className="content">
                <Flex direction={"row"} gap={"md"}>
                    <PersonalInfoExpanded/>
                    <div style={{flexGrow: 1, maxWidth: '100%'}}>
                        {children}
                    </div>
                </Flex>
            </div>
            <Footer/>
        </>
    );
};
export default UserPageLayout;
