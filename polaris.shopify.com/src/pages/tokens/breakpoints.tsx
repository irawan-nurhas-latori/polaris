import type { NextPage } from "next";
import React from "react";
import TokensPage from "../../components/TokensPage";
import PageMeta from "../../components/PageMeta";

const Components: NextPage = () => {
  return (
    <>
      <PageMeta title="Breakpoints" />

      <TokensPage tokenGroup={"breakpoints"} />
    </>
  );
};

export default Components;
