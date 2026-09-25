import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import api from "../../api/axios.js";

const SalesHistoryTable = () => {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [paymentSaleId, setPaymentSaleId] = useState(null);
  const [amountReceived, setAmountReceived] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    const fetchSalesHistory = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("/sales");

        setSales(response.data.data);
      } catch (error) {
        setError(
          error.response?.data?.message ||
            "Failed to fetch sales history"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSalesHistory();
  }, []);
const filteredSales = sales.filter((sale) =>
  sale._id.toLowerCase().includes(search.trim().toLowerCase())
);

const handleDownloadReceipt = (sale) => {
  const doc = new jsPDF();

  // =========================
  // HEADER
  // =========================

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);

  doc.text("BIZTRACK", 105, 20, {
    align: "center",
  });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);

  doc.text("SALE RECEIPT", 105, 28, {
    align: "center",
  });

  doc.setDrawColor(200, 200, 200);

  doc.line(14, 34, 196, 34);

  // =========================
  // SALE DETAILS
  // =========================

  doc.setFontSize(10);

  doc.setFont("helvetica", "bold");

  doc.text("Sale ID:", 14, 44);

  doc.setFont("helvetica", "normal");

  doc.text(String(sale._id), 42, 44);

  doc.setFont("helvetica", "bold");

  doc.text("Date:", 14, 52);

  doc.setFont("helvetica", "normal");

  doc.text(
    new Date(sale.createdAt).toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
    42,
    52
  );

  // =========================
  // CUSTOMER DETAILS
  // =========================

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);

  doc.text("Customer Details", 14, 65);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  doc.text(
    `Name: ${sale.buyerName || "N/A"}`,
    14,
    73
  );

  doc.text(
    `Phone: ${sale.buyerPhone || "N/A"}`,
    14,
    80
  );

  // Address may be long, so wrap it.
  const addressLines = doc.splitTextToSize(
    `Address: ${sale.buyerAddress || "N/A"}`,
    180
  );

  doc.text(addressLines, 14, 87);

  // Calculate table start based on address length.
  const tableStartY = 87 + addressLines.length * 5 + 5;

  // =========================
  // PRODUCTS TABLE
  // =========================

  autoTable(doc, {
    startY: tableStartY,

    head: [
      [
        "Product",
        "Qty",
        "Unit Price",
        "Amount",
      ],
    ],

    body: sale.items.map((item) => [
      item.productNameSnapshot || "N/A",

      String(item.quantity),

      `Rs. ${Number(
        item.unitPriceSnapshot
      ).toFixed(2)}`,

      `Rs. ${Number(
        item.lineTotal
      ).toFixed(2)}`,
    ]),

    theme: "grid",

    headStyles: {
      fillColor: [31, 41, 55],
      textColor: 255,
      fontStyle: "bold",
    },

    styles: {
      font: "helvetica",
      fontSize: 9,
      cellPadding: 3,
      overflow: "linebreak",
    },

    columnStyles: {
      0: {
        cellWidth: 80,
      },
      1: {
        cellWidth: 20,
        halign: "center",
      },
      2: {
        cellWidth: 40,
        halign: "right",
      },
      3: {
        cellWidth: 40,
        halign: "right",
      },
    },

    margin: {
      left: 14,
      right: 14,
    },
  });

  // =========================
  // PAYMENT SUMMARY
  // =========================

  let finalY = doc.lastAutoTable.finalY + 12;

  // Prevent summary from overflowing the page.
  if (finalY > 245) {
    doc.addPage();
    finalY = 25;
  }

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);

  doc.text(
    "Payment Summary",
    14,
    finalY
  );

  finalY += 10;

  doc.setFontSize(10);

  // Total Amount
  doc.setFont("helvetica", "normal");

  doc.text(
    "Total Amount:",
    120,
    finalY
  );

  doc.setFont("helvetica", "bold");

  doc.text(
    `Rs. ${Number(
      sale.totalAmount
    ).toFixed(2)}`,
    196,
    finalY,
    {
      align: "right",
    }
  );

  finalY += 8;

  // Paid Amount
  doc.setFont("helvetica", "normal");

  doc.text(
    "Amount Paid:",
    120,
    finalY
  );

  doc.setTextColor(22, 163, 74);
  doc.setFont("helvetica", "bold");

  doc.text(
    `Rs. ${Number(
      sale.paidAmount
    ).toFixed(2)}`,
    196,
    finalY,
    {
      align: "right",
    }
  );

  finalY += 8;

  // Due Amount
  doc.setFont("helvetica", "normal");

  doc.setTextColor(0, 0, 0);

  doc.text(
    "Due Amount:",
    120,
    finalY
  );

  doc.setTextColor(220, 38, 38);
  doc.setFont("helvetica", "bold");

  doc.text(
    `Rs. ${Number(
      sale.dueAmount
    ).toFixed(2)}`,
    196,
    finalY,
    {
      align: "right",
    }
  );

  // =========================
  // PAYMENT STATUS
  // =========================

  finalY += 12;

  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");

  const paymentStatus = String(
    sale.paymentStatus || "due"
  ).toUpperCase();

  doc.text(
    `Payment Status: ${paymentStatus}`,
    14,
    finalY
  );

  // =========================
  // FOOTER
  // =========================

  const pageCount = doc.internal.getNumberOfPages();

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);

    const pageHeight =
      doc.internal.pageSize.getHeight();

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);

    doc.text(
      "Thank you for your business!",
      105,
      pageHeight - 15,
      {
        align: "center",
      }
    );

    doc.text(
      `Page ${i} of ${pageCount}`,
      196,
      pageHeight - 8,
      {
        align: "right",
      }
    );
  }

  // =========================
  // DOWNLOAD PDF
  // =========================

  doc.save(`Receipt-${sale._id}.pdf`);
};

const handleUpdatePayment = async (sale) => {
  const amount = Number(amountReceived);

  if (!amountReceived.trim() || !Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  if (amount > sale.dueAmount) {
    alert(`Amount cannot be greater than ₹${sale.dueAmount}`);
    return;
  }

  try {
    const response = await api.patch(
      `/sales/${sale._id}/payment`,
      {
        amountReceived: amount,
      }
    );

    if (response.data.success) {
      setSuccessMessage(response.data.message);

      setPaymentSaleId(null);
      setAmountReceived("");

      // Refresh sales history
      const salesResponse = await api.get("/sales");
      setSales(salesResponse.data.data);
    }
  } catch (error) {
    alert(
      error.response?.data?.message ||
        "Failed to update payment"
    );
  }
};


  if (loading) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center">
        <p className="text-gray-600">
          Loading sales history...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-6">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

{/* Success Message */}
{successMessage && (
  <div className="mx-4 mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700 sm:mx-6">
    {successMessage}
  </div>
)}

      <div className="border-b border-gray-200 px-4 py-5 sm:px-6">
        <h2 className="text-lg font-bold text-gray-900">
          All Sales
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Recent sales appear first.
        </p>
      </div>
<div className="mt-4 flex flex-col gap-3 sm:flex-row">
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search by Sale ID..."
    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
  />

  <button
    type="button"
    onClick={() => setSearch("")}
    className="rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
  >
    Clear
  </button>
</div>
      {filteredSales.length === 0 ? (
        <div className="px-6 py-12 text-center">
        <h3 className="text-lg font-semibold text-gray-800">
  {search.trim()
    ? "No matching sales found"
    : "No sales found"}
</h3>

<p className="mt-2 text-sm text-gray-500">
  {search.trim()
    ? "Try searching with a different Sale ID."
    : "Your sales history will appear here after creating a sale."}
</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                  Sales ID
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                  Customer Name
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                  Products Bought
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                  Total Price
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                  Amount Paid
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                  Due
                </th>

                <th className="px-4 py-3 text-left text-xs font-semibold uppercase text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {filteredSales.map((sale) => (
                <tr key={sale._id}>
                  {/* Sales ID */}
                <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    {sale._id}
                    </td>

                  {/* Customer Name */}
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                    {sale.buyerName}
                  </td>

                  {/* Products Bought */}
                  <td className="px-4 py-4 text-sm text-gray-700">
                    <div className="space-y-1">
                      {sale.items.map((item, index) => (
                        <p key={index}>
                          {item.productNameSnapshot} ×{" "}
                          {item.quantity}
                        </p>
                      ))}
                    </div>
                  </td>

                  {/* Total Price */}
                  <td className="whitespace-nowrap px-4 py-4 text-sm font-medium text-gray-900">
                    ₹{sale.totalAmount.toFixed(2)}
                  </td>

                  {/* Amount Paid */}
                  <td className="whitespace-nowrap px-4 py-4 text-sm text-green-700">
                    ₹{sale.paidAmount.toFixed(2)}
                  </td>

                  {/* Due */}
                  <td className="whitespace-nowrap px-4 py-4 text-sm">
                    {sale.dueAmount > 0 ? (
                      <span className="font-medium text-red-600">
                        ₹{sale.dueAmount.toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-gray-500">
                        NA
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="whitespace-nowrap px-4 py-4">
                    <div className="flex flex-col items-start gap-2">
                

{sale.dueAmount > 0 && (
  <>
    {paymentSaleId === sale._id ? (
      <div className="flex flex-col gap-2">
        <input
          type="number"
          min="0.01"
          max={sale.dueAmount}
          step="0.01"
          value={amountReceived}
          onChange={(e) =>
            setAmountReceived(e.target.value)
          }
          placeholder={`Due: ₹${sale.dueAmount}`}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
        />

        <div className="flex gap-2">
          <button
            onClick={() => handleUpdatePayment(sale)}
            className="rounded-md bg-green-600 px-3 py-2 text-white"
          >
            Submit
          </button>

          <button
            onClick={() => {
              setPaymentSaleId(null);
              setAmountReceived("");
            }}
            className="rounded-md bg-gray-500 px-3 py-2 text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    ) : (
      <button
        onClick={() => {
          setPaymentSaleId(sale._id);
          setAmountReceived("");
        }}
        className="rounded-md bg-blue-600 px-3 py-2 text-white"
      >
        Update Payment
      </button>
    )}
  </>
)}


                    <button
                         type="button"
                         onClick={() => handleDownloadReceipt(sale)}
                         className="rounded-lg border border-gray-300 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100"
                          >
                          Download
                          </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default SalesHistoryTable;