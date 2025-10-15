import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";
import SearchSec from "./components/SearchSec";
import ReactPaginate from "react-paginate";
import PaginationLoader from "./components/PaginationLoader";
import ProductSkeltonLoader from "./components/ProductSkeltonLoader";
import { getProducts } from "../../@store/main/productSlice";
import useDebounce from "../../@customHooks/useDebounce";

const limit = 10;
const Product = () => {
  const {
    loading: productsLoading,
    products,
    metadata,
  } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = metadata?.total ? Math.ceil(metadata?.total / limit) : 0;

  useEffect(() => {
    setPageNumber(0);
  }, [debouncedSearch, selectedCategory]);

  useEffect(() => {
    dispatch(getProducts(limit, pageNumber, selectedCategory, debouncedSearch));
  }, [dispatch, debouncedSearch, pageNumber, selectedCategory]);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
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
      <div className="flex flex-col md:flex-row gap-4 mt-10">
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
    </div>
  );
};

export default Product;
