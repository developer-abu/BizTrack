import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import api from "../api/axios.js";
import { useNavigate } from "react-router-dom";
const LowStock = () => {
    const navigate = useNavigate();
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
    <div className="min-h-screen bg-[#f7f4ed] p-4 sm:p-6 lg:p-8">
      <Helmet>
        <title>Low Stock Products | BizTrack</title>
      </Helmet>
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
    {/* Page Header */}
{/* Page Header */}
<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

  {/* Heading */}
  <div>
    <h1 className="font-serif text-3xl font-extrabold text-[#202a27] sm:text-4xl">
      Low Stock Products
    </h1>

    <p className="mt-2 text-sm text-[#65716c]">
      Products that need restocking.
    </p>
  </div>

  {/* Back to Dashboard Button */}
  <button
    type="button"
    onClick={() => navigate("/dashboard")}
    className="w-full rounded-md bg-[#27624f] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4e3e] sm:w-auto"
  >
    Back to Dashboard
  </button>

</div>
{/* Success Message */}
{stockUpdateMessage && (
  <div className="mb-6 rounded-md border border-[#c9d9ce] bg-[#edf3ee] p-4">
    <p className="text-sm font-medium text-[#34715f]">
      {stockUpdateMessage}
    </p>
  </div>
)}
        {/* Loading */}
        {loading ? (
          <div className="surface-shadow rounded-lg border border-[#dedbd3] bg-white p-10 text-center text-[#65716c]">
            Loading low stock products...
          </div>
        ) : error ? (
          /* Error */
          <div className="rounded-lg border border-[#e7c4b7] bg-white p-10 text-center shadow-sm">
            <p className="text-[#a65c39]">{error}</p>

            <button
              onClick={fetchLowStockProducts}
              className="mt-4 rounded-md bg-[#27624f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1d4e3e]"
            >
              Retry
            </button>
          </div>
        ) : products.length === 0 ? (
          /* Empty State */
          <div className="rounded-lg border border-[#dedbd3] bg-white p-10 text-center shadow-sm">
            <h2 className="font-serif text-lg font-semibold text-[#202a27]">
              No Low Stock Products
            </h2>

            <p className="mt-2 text-sm text-[#65716c]">
              All your products have sufficient stock.
            </p>
          </div>
        ) : (
          /* Products Table */
          <div className="surface-shadow overflow-hidden rounded-lg border border-[#dedbd3] bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left">
                <thead className="bg-[#f4f6f1] text-sm text-[#65716c]">
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

                <tbody className="divide-y divide-[#eeeae2]">
                  {products.map((product) => (
                    <tr
                      key={product._id}
                      className="hover:bg-[#f4f6f1]"
                    >
                      <td className="px-6 py-4 font-medium text-[#34443d]">
                        {product.productName}
                      </td>

                      <td className="px-6 py-4 font-semibold text-[#a65c39]">
                        {product.stock} {product.quantityType}
                      </td>

                      <td className="px-6 py-4 text-[#65716c]">
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
                          className="rounded-md bg-[#27624f] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1d4e3e]"
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
          <div className="w-full max-w-md rounded-lg border border-[#dedbd3] bg-white p-6 shadow-2xl">

            <h2 className="mb-2 font-serif text-2xl font-extrabold text-[#202a27]">
              Add Stock
            </h2>

            <p className="mb-5 text-sm text-[#65716c]">
              {selectedProduct.productName}
            </p>

            {/* Current Stock */}
            <div className="mb-4 rounded-md border border-[#eeeae2] bg-[#fbfaf7] p-3">
              <p className="text-sm text-[#7b8780]">
                Current Stock
              </p>

              <p className="mt-1 font-semibold text-[#34443d]">
                {selectedProduct.stock}{" "}
                {selectedProduct.quantityType}
              </p>
            </div>

            {/* Add Stock Input */}
            <label
              htmlFor="newStock"
              className="mb-2 block text-sm font-semibold text-[#34443d]"
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
              className="w-full rounded-md border border-[#d8d8d0] px-4 py-3 outline-none focus:border-[#34715f] focus:ring-2 focus:ring-[#edf3ee] disabled:bg-[#f4f6f1]"
            />

            {/* Preview Total Stock */}
            {newStock !== "" &&
              Number.isFinite(Number(newStock)) &&
              Number(newStock) > 0 && (
                <div className="mt-3 rounded-md bg-[#edf3ee] p-3">
                  <p className="text-sm text-[#34715f]">
                    Updated Stock
                  </p>

                  <p className="mt-1 font-semibold text-[#27624f]">
                    {Number(selectedProduct.stock) +
                      Number(newStock)}{" "}
                    {selectedProduct.quantityType}
                  </p>
                </div>
              )}

            {/* Validation Error */}
            {stockError && (
              <p className="mt-2 text-sm text-[#a65c39]">
                {stockError}
              </p>
            )}

            {/* Modal Buttons */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                type="button"
                disabled={updating}
                onClick={handleCloseModal}
                className="rounded-md border border-[#c9cec6] px-4 py-2 text-sm font-semibold text-[#33443d] hover:bg-[#fbfaf7] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={updating}
                onClick={handleStockUpdate}
                className="rounded-md bg-[#27624f] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1d4e3e] disabled:cursor-not-allowed disabled:opacity-50"
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