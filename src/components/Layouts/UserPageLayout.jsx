import React from "react";
import Header from "@/components/features/header/Header";
import Footer from "@/components/features/footer/Footer";
import { Flex } from "@mantine/core";
import { PersonalInfoExpanded } from "@/components/widget/PersonalInfoExpanded/PersonalInfoExpanded";
import PageHead from "@/components/SEO/PageHead";

const UserPageLayout = ({ children }) => {
  return (
    <>
      <PageHead title={"Личный Кабинет"} />
      <Header />
      <div className="content">
        <Flex direction={"row"} gap={"md"}>
          <PersonalInfoExpanded />
          {children}
        </Flex>
      </div>
      <Footer />
    </>
  );
};
export default UserPageLayout;
