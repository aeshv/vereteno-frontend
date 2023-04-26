import { Paper, Title } from "@mantine/core";
import React from "react";
import { PersonalInfoExpanded } from "@/components/widget/PersonalInfoExpanded/PersonalInfoExpanded";
import PageHead from "@/components/SEO/PageHead";
import UserPageLayout from "@/components/Layouts/UserPageLayout";

const index = () => {
  return (
    <>
      <Paper>главная</Paper>
    </>
  );
};

index.Layout = UserPageLayout;

export default index;
