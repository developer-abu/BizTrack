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
      <section className="surface-shadow rounded-lg border border-[#dedbd3] bg-white p-8 text-center">
        <p className="text-sm text-[#65716c]">
          Loading products...
        </p>
      </section>
    );
  }

  if (errorMessage) {
    return (
      <section className="rounded-lg border border-[#e7c4b7] bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-medium text-[#a65c39]">
          {errorMessage}
        </p>
      </section>
    );
  }

  return (
    <section className="surface-shadow overflow-hidden rounded-lg border border-[#dedbd3] bg-white">
      {/* Header */}
      <div className="border-b border-[#eeeae2] px-4 py-4 sm:px-6">
        <h2 className="font-serif text-xl font-extrabold text-[#202a27]">
          All Products
        </h2>

        <p className="mt-1 text-sm text-[#65716c]">
          {products.length} products
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[1400px] text-left">
          <thead className="bg-[#f4f6f1]">
            <tr className="border-b border-[#e4e9e1]">
              <th className="px-5 py-4 text-xs font-semibold uppercase text-[#7b8780]">
                Product
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-[#7b8780]">
                Buying Price
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-[#7b8780]">
                Selling Price
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-[#7b8780]">
                MRP
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-[#7b8780]">
                Discount
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-[#7b8780]">
                Stock
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-[#7b8780]">
                Quantity
              </th>

              {/* <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                Low Stock
              </th> */}

              <th className="px-5 py-4 text-xs font-semibold uppercase text-[#7b8780]">
                MFG Date
              </th>

              <th className="px-5 py-4 text-xs font-semibold uppercase text-[#7b8780]">
                EXP Date
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#eeeae2]">
            {products.map((product) => {
              const isLowStock =
                product.stock <= product.lowStockThreshold;

              return (
                <tr
                  key={product._id}
                  className="transition-colors hover:bg-[#f4f6f1]"
                >
                  <td className="px-5 py-4">
                    <p className="font-semibold text-[#25342e]">
                      {product.productName}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-sm text-[#65716c]">
                    ₹{product.buyingPrice.toFixed(2)}
                  </td>

                  <td className="px-5 py-4 text-sm font-medium text-[#34443d]">
                    ₹{product.sellingPrice.toFixed(2)}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#65716c]">
                    ₹{product.mrp.toFixed(2)}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#65716c]">
                    ₹{product.discount}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                        isLowStock
                          ? "bg-[#f8eee5] text-[#a65c39]"
                          : "bg-[#edf3ee] text-[#34715f]"
                      }`}
                    >
                      {product.stock}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-sm capitalize text-[#65716c]">
                    {product.quantityType}
                  </td>

                  {/* <td className="px-5 py-4 text-sm text-gray-700">
                    {product.lowStockThreshold}
                  </td> */}

                  <td className="px-5 py-4 text-sm text-[#65716c]">
                    {formatDate(product.manufacturingDate)}
                  </td>

                  <td className="px-5 py-4 text-sm text-[#65716c]">
                    {formatDate(product.expiryDate)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile / tablet cards */}
      <div className="divide-y divide-[#eeeae2] lg:hidden">
        {products.map((product) => {
          const isLowStock =
            product.stock <= product.lowStockThreshold;

          return (
            <article key={product._id} className="p-4 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-[#25342e]">
                    {product.productName}
                  </h3>

                  <p className="mt-1 text-sm capitalize text-[#7b8780]">
                    {product.quantityType}
                  </p>
                </div>

                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                    isLowStock
                      ? "bg-[#f8eee5] text-[#a65c39]"
                      : "bg-[#edf3ee] text-[#34715f]"
                  }`}
                >
                  {isLowStock ? "Low Stock" : "In Stock"}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs text-[#7b8780]">
                    Buying Price
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#34443d]">
                    ₹{product.buyingPrice.toFixed(2)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#7b8780]">
                    Selling Price
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#34443d]">
                    ₹{product.sellingPrice.toFixed(2)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#7b8780]">
                    MRP
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#34443d]">
                    ₹{product.mrp.toFixed(2)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#7b8780]">
                    Discount
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#34443d]">
                   ₹{product.discount}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#7b8780]">
                    Current Stock
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#34443d]">
                    {product.stock} {product.quantityType}
                  </p>
                </div>

                {/* <div>
                  <p className="text-xs text-[#7b8780]">
                    Low Stock Limit
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#34443d]">
                    {product.lowStockThreshold}
                  </p>
                </div> */}

                <div>
                  <p className="text-xs text-[#7b8780]">
                    Manufacturing Date
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#34443d]">
                    {formatDate(product.manufacturingDate)}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-[#7b8780]">
                    Expiry Date
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#34443d]">
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
          <h3 className="font-serif text-lg font-semibold text-[#202a27]">
            No products found
          </h3>

          <p className="mt-2 text-sm text-[#65716c]">
            Add your first product to start managing your inventory.
          </p>
        </div>
      )}
    </section>
  );


}
 
export default ProductsTable