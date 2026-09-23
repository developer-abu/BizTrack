import React, { useEffect, useState } from "react";
import api from "../../api/axios.js";

const ProductsTable = () => {

const [products, setProducts] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");

        const response = await api.get("/see-products");

        setProducts(response.data.data);
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message ||
            "Failed to fetch products"
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (isLoading) {
    return (
      <section className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm text-gray-500">
          Loading products...
        </p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className="rounded-xl border border-red-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-medium text-red-600">
          {errorMessage}
        </p>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
        <h2 className="text-lg font-semibold text-gray-900">
          All Products
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {products.length} products
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[1400px] text-left">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                Product
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                Buying Price
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                Selling Price
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                MRP
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                Discount
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                Stock
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                Quantity
              </th>

              {/* <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                Low Stock
              </th> */}

              <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                MFG Date
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                EXP Date
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {products.map((product) => {
              const isLowStock =
                product.stock <= product.lowStockThreshold;

              return (
                <tr
                  key={product._id}
                  className="transition-colors hover:bg-gray-50"
                >
                  <td className="px-5 py-4">
                    <p className="font-semibold text-gray-900">
                      {product.productName}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-700">
                    ₹{product.buyingPrice.toFixed(2)}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-gray-900">
                    ₹{product.sellingPrice.toFixed(2)}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-700">
                    ₹{product.mrp.toFixed(2)}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-700">
                    ₹{product.discount}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        isLowStock
                          ? "bg-red-50 text-red-600"
                          : "bg-green-50 text-green-600"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm capitalize text-gray-700">
                    {product.quantityType}
                  </td>

                  {/* <td className="px-5 py-4 text-sm text-gray-700">
                    {product.lowStockThreshold}
                  </td> */}

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {formatDate(product.manufacturingDate)}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {formatDate(product.expiryDate)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile / tablet cards */}
      <div className="divide-y divide-gray-200 lg:hidden">
        {products.map((product) => {
          const isLowStock =
            product.stock <= product.lowStockThreshold;

          return (
            <article key={product._id} className="p-4 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">
                    {product.productName}
                  </h3>

                  <p className="mt-1 text-sm capitalize text-gray-500">
                    {product.quantityType}
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                    isLowStock
                      ? "bg-red-50 text-red-600"
                      : "bg-green-50 text-green-600"
                  }`}
                >
                  {isLowStock ? "Low Stock" : "In Stock"}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-gray-500">
                    Buying Price
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    ₹{product.buyingPrice.toFixed(2)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Selling Price
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    ₹{product.sellingPrice.toFixed(2)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    MRP
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    ₹{product.mrp.toFixed(2)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Discount
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                   ₹{product.discount}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Current Stock
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {product.stock} {product.quantityType}
                  </p>
                </div>

                {/* <div>
                  <p className="text-xs text-gray-500">
                    Low Stock Limit
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {product.lowStockThreshold}
                  </p>
                </div> */}

                <div>
                  <p className="text-xs text-gray-500">
                    Manufacturing Date
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {formatDate(product.manufacturingDate)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-500">
                    Expiry Date
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {formatDate(product.expiryDate)}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Empty state */}
      {products.length === 0 && (
        <div className="px-6 py-16 text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            No products found
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Add your first product to start managing your inventory.
          </p>
        </div>
      )}
    </section>
  );


}
 
export default ProductsTable