import React from "react";

const RecentSales = () => {
  return (
    // Recent sales section
    <section className="mt-10">
      {/* Section heading */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          Recent Sales
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Your latest sales transactions.
        </p>
      </div>

      {/* Static sales data for now */}
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-5 py-3 font-medium text-gray-600">
                  Product
                </th>
                <th className="px-5 py-3 font-medium text-gray-600">
                  Quantity
                </th>
                <th className="px-5 py-3 font-medium text-gray-600">
                  Total
                </th>
                <th className="px-5 py-3 font-medium text-gray-600">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-5 py-4 text-gray-900">
                  Keyboard
                </td>
                <td className="px-5 py-4 text-gray-600">
                  2
                </td>
                <td className="px-5 py-4 text-gray-900">
                  ₹1,500
                </td>
                <td className="px-5 py-4 text-gray-600">
                  Paid
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-gray-900">
                  Notebook
                </td>
                <td className="px-5 py-4 text-gray-600">
                  5
                </td>
                <td className="px-5 py-4 text-gray-900">
                  ₹750
                </td>
                <td className="px-5 py-4 text-gray-600">
                  Partial
                </td>
              </tr>

              <tr>
                <td className="px-5 py-4 text-gray-900">
                  Mouse
                </td>
                <td className="px-5 py-4 text-gray-600">
                  3
                </td>
                <td className="px-5 py-4 text-gray-900">
                  ₹1,200
                </td>
                <td className="px-5 py-4 text-gray-600">
                  Due
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RecentSales;