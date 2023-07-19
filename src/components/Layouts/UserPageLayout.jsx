import React, {useEffect} from "react";
import Header from "@/components/features/header/Header";
import Footer from "@/components/features/footer/Footer";
import {Flex} from "@mantine/core";
import {PersonalInfoExpanded} from "@/components/widget/PersonalInfoExpanded/PersonalInfoExpanded";
import PageHead from "@/components/SEO/PageHead";
import {MegaHeader} from "@/components/entity/MegaHeader/MegaHeader";
import {useSelector} from "react-redux";
import {useRouter} from "next/router";

const UserPageLayout = ({children}) => {

    // Проверка авторизации
    const router = useRouter()
    const {user} = useSelector((state) => state.auth)
    useEffect(() => {
        if (!user) {
            router.push('/auth')
        }
    }, [router, user])

    return (
        <>
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
