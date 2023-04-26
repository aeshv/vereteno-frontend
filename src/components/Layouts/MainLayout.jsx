import React from "react";
import Header from "@/components/features/header/Header";
import Footer from "@/components/features/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};
export default MainLayout;
