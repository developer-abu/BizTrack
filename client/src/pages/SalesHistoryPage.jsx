import React from "react";
import SalesHistoryHeader from "../components/salesHistory/SalesHistoryHeader";
import SalesHistoryTable from "../components/salesHistory/SalesHistoryTable";

const SalesHistoryPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f4ed]">
      <SalesHistoryHeader />

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <SalesHistoryTable />
      </main>
    </div>
  );
};

export default SalesHistoryPage;