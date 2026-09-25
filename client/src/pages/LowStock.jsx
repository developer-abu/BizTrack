import { useEffect, useState } from "react";
import api from "../api/axios.js";

const LowStock = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newStock, setNewStock] = useState("");
  const [updating, setUpdating] = useState(false);
  const [stockError, setStockError] = useState("");
  const [stockUpdateMessage, setStockUpdateMessage] = useState("");

  // Fetch low stock products
  const fetchLowStockProducts = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/less-stock");



      setProducts(response.data.data);
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Failed to fetch low stock products"
      );


    } finally {
      setLoading(false);
    }
  };

  // Add stock to existing product
  const handleStockUpdate = async () => {
    const confirmation = confirm("Are you confirm")
    if(!confirmation){
      setStockUpdateMessage("You have declined updating")
      setTimeout(() => {
        setStockUpdateMessage("")
      }, 2000);
      return
    }
    if (
      newStock === "" ||
      !Number.isFinite(Number(newStock)) ||
      Number(newStock) <= 0
    ) {
      setStockError(
        "Please enter a valid quantity greater than 0"
      );
      return;
    }

    try {
      setUpdating(true);
      setStockError("");

      const response = await api.patch(
        `/products/${selectedProduct._id}/stock`,
        {
          stock: Number(newStock),
        }
      );

     setStockUpdateMessage(response.data.message)
setTimeout(() => {
  setStockUpdateMessage("")
}, 2000);
      // Refresh low stock products
      await fetchLowStockProducts();

      // Close modal
      setSelectedProduct(null);
      setNewStock("");
      setStockError("");
    } catch (error) {
      setStockError(
        error.response?.data?.message ||
          "Failed to update stock"
      );

    } finally {
      setUpdating(false);
    }
  };

  // Close modal
  const handleCloseModal = () => {
    if (updating) return;

    setSelectedProduct(null);
    setNewStock("");
    setStockError("");
  };

  useEffect(() => {
    fetchLowStockProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Low Stock Products
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Products that need restocking.
          </p>
        </div>
{/* Success Message */}
{stockUpdateMessage && (
  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4">
    <p className="text-sm font-medium text-green-700">
      {stockUpdateMessage}
    </p>
  </div>
)}
        {/* Loading */}
        {loading ? (
          <div className="rounded-xl bg-white p-10 text-center text-gray-500 shadow-sm">
            Loading low stock products...
          </div>
        ) : error ? (
          /* Error */
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <p className="text-red-600">{error}</p>

            <button
              onClick={fetchLowStockProducts}
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        ) : products.length === 0 ? (
          /* Empty State */
          <div className="rounded-xl bg-white p-10 text-center shadow-sm">
            <h2 className="text-lg font-semibold text-gray-800">
              No Low Stock Products
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              All your products have sufficient stock.
            </p>
          </div>
        ) : (
          /* Products Table */
          <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left">
                <thead className="bg-gray-100 text-sm text-gray-600">
                  <tr>
                    <th className="px-6 py-4 font-semibold">
                      Product
                    </th>

                    <th className="px-6 py-4 font-semibold">
                      Current Stock
                    </th>

                    <th className="px-6 py-4 font-semibold">
                      Low Stock Limit
                    </th>

                    <th className="px-6 py-4 font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {products.map((product) => (
                    <tr
                      key={product._id}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-800">
                        {product.productName}
                      </td>

                      <td className="px-6 py-4 font-semibold text-red-600">
                        {product.stock} {product.quantityType}
                      </td>

                      <td className="px-6 py-4 text-gray-600">
                        {product.lowStockThreshold}{" "}
                        {product.quantityType}
                      </td>

                      <td className="px-6 py-4 text-center">
                        <button
                          onClick={() => {
                            setSelectedProduct(product);
                            setNewStock("");
                            setStockError("");
                          }}
                          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                          Add Stock
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Add Stock Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

            <h2 className="mb-2 text-xl font-semibold text-gray-900">
              Add Stock
            </h2>

            <p className="mb-5 text-sm text-gray-600">
              {selectedProduct.productName}
            </p>

            {/* Current Stock */}
            <div className="mb-4 rounded-lg bg-gray-50 p-3">
              <p className="text-sm text-gray-500">
                Current Stock
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                {selectedProduct.stock}{" "}
                {selectedProduct.quantityType}
              </p>
            </div>

            {/* Add Stock Input */}
            <label
              htmlFor="newStock"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Add Stock ({selectedProduct.quantityType})
            </label>

            <input
              id="newStock"
              type="number"
              min="0"
              step="any"
              value={newStock}
              onChange={(e) => setNewStock(e.target.value)}
              placeholder="Enter quantity to add"
              disabled={updating}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100"
            />

            {/* Preview Total Stock */}
            {newStock !== "" &&
              Number.isFinite(Number(newStock)) &&
              Number(newStock) > 0 && (
                <div className="mt-3 rounded-lg bg-green-50 p-3">
                  <p className="text-sm text-green-700">
                    Updated Stock
                  </p>

                  <p className="mt-1 font-semibold text-green-800">
                    {Number(selectedProduct.stock) +
                      Number(newStock)}{" "}
                    {selectedProduct.quantityType}
                  </p>
                </div>
              )}

            {/* Validation Error */}
            {stockError && (
              <p className="mt-2 text-sm text-red-600">
                {stockError}
              </p>
            )}

            {/* Modal Buttons */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                disabled={updating}
                onClick={handleCloseModal}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={updating}
                onClick={handleStockUpdate}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {updating ? "Updating..." : "Add Stock"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LowStock;