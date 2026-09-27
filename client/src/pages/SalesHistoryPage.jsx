import React from "react";
import { Helmet } from "react-helmet-async";
import SalesHistoryHeader from "../components/salesHistory/SalesHistoryHeader";
import SalesHistoryTable from "../components/salesHistory/SalesHistoryTable";

const SalesHistoryPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f4ed]">
      <Helmet>
        <title>Sales History | BizTrack</title>
      </Helmet>
      <SalesHistoryHeader />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <SalesHistoryTable />
      </main>
    </div>
  );
};

export default SalesHistoryPage;