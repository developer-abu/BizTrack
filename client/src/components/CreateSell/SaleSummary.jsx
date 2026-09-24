import React from "react";

const SaleSummary = ({
selectedProducts,
  setSelectedProducts,
  givenAmount,
  setGivenAmount,
}) => {
  const totalAmount = selectedProducts.reduce(
    (total, product) =>
      total + product.sellingPrice * product.saleQuantity,
    0
  );

  const paidAmount = Number(givenAmount || 0);

  const dueAmount = Math.max(totalAmount - paidAmount, 0);

  const changeAmount = Math.max(paidAmount - totalAmount, 0);

  const handleQuantityChange = (productId, value) => {
    const quantity = Number(value);

    setSelectedProducts((previousProducts) =>
      previousProducts.map((product) =>
        product._id === productId
          ? {
              ...product,
              saleQuantity: Math.min(
                Math.max(quantity, 1),
                product.stock
              ),
            }
          : product
      )
    );
  };

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      {/* Section heading */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Sale Summary
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Review products and payment details before creating the sale.
        </p>
      </div>

      {selectedProducts.length === 0 ? (
        <div className="mt-6 rounded-lg bg-gray-50 px-4 py-8 text-center">
          <p className="text-sm text-gray-500">
            No products selected.
          </p>
        </div>
      ) : (
        <>
          {/* Selected products */}
          <div className="mt-6 space-y-3">
            {selectedProducts.map((product) => {
              const subtotal =
                product.sellingPrice * product.saleQuantity;

              return (
                <div
                  key={product._id}
                  className="rounded-lg border border-gray-200 p-4"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    {/* Product information */}
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-gray-900">
                        {product.productName}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        ₹{product.sellingPrice.toFixed(2)} /{" "}
                        {product.quantityType}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Available stock: {product.stock}{" "}
                        {product.quantityType}
                      </p>
                    </div>

                    {/* Quantity */}
                    <div className="w-full sm:w-28">
                      <label className="text-xs font-medium text-gray-500">
                        Quantity
                      </label>

                      <input
                        type="number"
                        min="1"
                        max={product.stock}
                        value={product.saleQuantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            product._id,
                            e.target.value
                          )
                        }
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-gray-900"
                      />
                    </div>

                    {/* Subtotal */}
                    <div className="sm:min-w-28 sm:text-right">
                      <p className="text-xs text-gray-500">
                        Subtotal
                      </p>

                      <p className="mt-1 text-base font-semibold text-gray-900">
                        ₹{subtotal.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Amount summary */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <div className="space-y-3">
              {/* Total */}
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  Total Amount
                </p>

                <p className="text-lg font-bold text-gray-900">
                  ₹{totalAmount.toFixed(2)}
                </p>
              </div>

              {/* Given amount */}
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <label
                  htmlFor="givenAmount"
                  className="text-sm font-medium text-gray-700"
                >
                  Amount Given
                </label>

                <div className="w-full sm:w-48">
                  <input
                    id="givenAmount"
                    type="number"
                    min="0"
                    step="0.01"
                    value={givenAmount}
                    onChange={(e) =>
                      setGivenAmount(e.target.value)
                    }
                    placeholder="Enter amount"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900"
                  />
                </div>
              </div>

              {/* Paid */}
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  Paid Amount
                </p>

                <p className="text-sm font-semibold text-green-600">
                  ₹{Math.min(paidAmount, totalAmount).toFixed(2)}
                </p>
              </div>

              {/* Due */}
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  Due Amount
                </p>

                <p
                  className={`text-sm font-semibold ${
                    dueAmount > 0
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  ₹{dueAmount.toFixed(2)}
                </p>
              </div>

              {/* Change */}
              {changeAmount > 0 && (
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm text-gray-500">
                    Change to Return
                  </p>

                  <p className="text-sm font-semibold text-blue-600">
                    ₹{changeAmount.toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Final status */}
          <div className="mt-6 rounded-lg bg-gray-50 p-4">
            {dueAmount === 0 && changeAmount === 0 ? (
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-gray-700">
                  Payment Status
                </p>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                  Fully Paid
                </span>
              </div>
            ) : dueAmount > 0 ? (
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-gray-700">
                  Payment Status
                </p>

                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600">
                  Due
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-gray-700">
                  Payment Status
                </p>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  Overpaid
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default SaleSummary;