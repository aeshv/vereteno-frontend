import { Paper, Title } from "@mantine/core";
import React from "react";
import { PersonalInfoExpanded } from "@/components/widget/PersonalInfoExpanded/PersonalInfoExpanded";
import PageHead from "@/components/SEO/PageHead";

const index = () => {
  return (
    <>
      <PageHead title={"Личный Кабинет"} />
      <Paper>
        <PersonalInfoExpanded />
      </Paper>
    </>
  );
};

export default index;
