import React, { useEffect } from "react";
import Header from "@/components/features/header/Header";
import Footer from "@/components/features/footer/Footer";
import { Flex } from "@mantine/core";
import { PersonalInfoExpanded } from "@/components/widget/PersonalInfoExpanded/PersonalInfoExpanded";
import PageHead from "@/components/SEO/PageHead";
import { MegaHeader } from "@/components/entity/MegaHeader/MegaHeader";
import { MobilePersonalInfo } from "@/components/widget/PersonalInfoExpanded/MobilePersonalInfo";
import { useViewportSize } from "@mantine/hooks";

const UserPageLayout = ({ children }) => {
  const { width } = useViewportSize();

  return (
    <>
      <Header />
      <MegaHeader />
      <PageHead title={"Личный кабинет - Веретено, магазин головных уборов"} />
      <div className="content">
        <Flex direction={width <= 768 ? "column" : "row"} gap={"md"}>
          {width <= 768 ? <MobilePersonalInfo /> : <PersonalInfoExpanded />}
          <div style={{ flexGrow: 1, maxWidth: "100%" }}>{children}</div>
        </Flex>
      </div>
      <Footer />
    </>
  );
};
export default UserPageLayout;
