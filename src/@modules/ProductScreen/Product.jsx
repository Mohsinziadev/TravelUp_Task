import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";
import SearchSec from "./components/SearchSec";
import ProductForm from "./components/ProductForm";
import DeleteConfirmModal from "./components/DeleteConfirmModal";
import ReactPaginate from "react-paginate";
import PaginationLoader from "./components/PaginationLoader";
import ProductSkeltonLoader from "./components/ProductSkeltonLoader";
import Notification from "../../@components/Notification";
import {
  getProducts,
  clearMessages,
  clearEditingProduct,
} from "../../@store/main/productSlice";
import useDebounce from "../../@customHooks/useDebounce";

const limit = 10;
const Product = () => {
  const {
    loading: productsLoading,
    products,
    metadata,
    editingProduct,
    error,
    success,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = metadata?.total ? Math.ceil(metadata?.total / limit) : 0;

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState("success");

  useEffect(() => {
    setPageNumber(0);
  }, [debouncedSearch, selectedCategory]);

  useEffect(() => {
    dispatch(getProducts(limit, pageNumber, selectedCategory, debouncedSearch));
  }, [dispatch, debouncedSearch, pageNumber, selectedCategory]);

  // Handle notifications
  useEffect(() => {
    if (success || error) {
      setNotificationType(error ? "error" : "success");
      setShowNotification(true);
    }
  }, [success, error]);

  // Handle editing product modal
  useEffect(() => {
    if (editingProduct) {
      setShowAddModal(true);
    }
  }, [editingProduct]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleCloseAddModal = () => {
    setShowAddModal(false);
    dispatch(clearEditingProduct());
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
    dispatch(clearMessages());
  };

  return (
    <div className="flex flex-col py-5">
      <div className="-mt-[5.5rem] z-10">
        <SearchSec
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>

      {/* Add Product Button */}
      <div className="mt-6 flex justify-end px-2">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-primary text-white text-sm px-4 py-3 rounded-lg hover:bg-[#0990bc] transition-colors duration-200 flex items-center space-x-2 shadow-lg"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>Add New Product</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-10 px-2">
        <div className="w-full">
          <div>
            {productsLoading ? (
              <div>
                <ProductSkeltonLoader />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products && products.length > 0 ? (
                  products.map((product) => {
                    return (
                      <div key={product.id || product._id} className="h-full">
                        <ProductCard data={product} />
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      No products found. Try adjusting your search or filters.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="mt-4">
            {productsLoading ? (
              <>
                <PaginationLoader />
              </>
            ) : (
              <div className="flex justify-center">
                <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  forcePage={pageNumber}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <ProductForm
        isOpen={showAddModal}
        onClose={handleCloseAddModal}
        editingProduct={editingProduct}
      />

      {/* Notification */}
      <Notification
        message={success || error}
        type={notificationType}
        isVisible={showNotification}
        onClose={handleCloseNotification}
      />
    </div>
  );
};

export default Product;
