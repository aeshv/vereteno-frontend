import React from "react";
import UserPageLayout from "@/components/Layouts/UserPageLayout";
import PageHead from "@/components/SEO/PageHead";

const Index = () => {
  return (
    <>
      <PageHead
        title={"Приватные настройки - Веретено, магазин головных уборов"}
      />
      <span>Безопасность</span>
    </>
  );
};
Index.Layout = UserPageLayout;
export default Index;
