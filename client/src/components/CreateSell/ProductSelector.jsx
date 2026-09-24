import React, { useEffect, useState } from "react";
import api from "../../api/axios.js";

const ProductSelector = ({
  selectedProducts,
  setSelectedProducts,
}) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/see-products");

        setProducts(response.data.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.productName
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleProductSelect = (product) => {
    const alreadySelected = selectedProducts.some(
      (item) => item._id === product._id
    );

    if (alreadySelected) {
      return;
    }

    setSelectedProducts((previousProducts) => [
      ...previousProducts,
      {
        ...product,
        saleQuantity: 1,
      },
    ]);
  };

  const handleRemoveProduct = (productId) => {
    setSelectedProducts((previousProducts) =>
      previousProducts.filter(
        (product) => product._id !== productId
      )
    );
  };

  return (
    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">
          Select Products
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Search and add multiple products to this sale.
        </p>
      </div>

      {/* Search */}
      <div className="mt-5">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search product..."
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-900"
        />
      </div>

      {/* Product List */}
      <div className="mt-4 max-h-64 overflow-y-auto rounded-lg border border-gray-200">
        {isLoading ? (
          <p className="p-4 text-sm text-gray-500">
            Loading products...
          </p>
        ) : filteredProducts.length === 0 ? (
          <p className="p-4 text-sm text-gray-500">
            No products found.
          </p>
        ) : (
          filteredProducts.map((product) => {
            const isSelected = selectedProducts.some(
              (item) => item._id === product._id
            );

            return (
              <button
                type="button"
                key={product._id}
                disabled={isSelected}
                onClick={() => handleProductSelect(product)}
                className={`flex w-full items-center justify-between border-b border-gray-100 px-4 py-3 text-left last:border-b-0 ${
                  isSelected
                    ? "cursor-not-allowed bg-gray-100 opacity-60"
                    : "hover:bg-gray-50"
                }`}
              >
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {product.productName}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Stock: {product.stock}{" "}
                    {product.quantityType}
                  </p>
                </div>

                <p className="text-sm font-semibold text-gray-900">
                  ₹{product.sellingPrice.toFixed(2)}
                </p>
              </button>
            );
          })
        )}
      </div>

      {/* Selected Products */}
      {selectedProducts.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-gray-900">
            Selected Products
          </h3>

          <div className="mt-3 space-y-3">
            {selectedProducts.map((product) => (
              <div
                key={product._id}
                className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-semibold text-gray-900">
                    {product.productName}
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    ₹{product.sellingPrice.toFixed(2)} /{" "}
                    {product.quantityType}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    handleRemoveProduct(product._id)
                  }
                  className="text-left text-sm font-medium text-red-600 hover:text-red-700 sm:text-right"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductSelector;