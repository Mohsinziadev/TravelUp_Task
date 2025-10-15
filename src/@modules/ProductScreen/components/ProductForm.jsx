import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  updateProduct,
  clearMessages,
} from "../../../@store/main/productSlice";

const ProductForm = ({ isOpen, onClose, editingProduct = null }) => {
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.product);

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    rating: "",
    image: "",
    images: [],
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "Luxury",
    "Adventure",
    "Cultural",
    "Budget",
    "Beach",
    "Mountain",
    "Hotel",
  ];

  useEffect(() => {
    if (editingProduct) {
      setFormData({
        name: editingProduct.name || "",
        title: editingProduct.title || "",
        description: editingProduct.description || "",
        price: editingProduct.price || "",
        category: editingProduct.category || "",
        brand: editingProduct.brand || "",
        rating: editingProduct.rating || "",
        image: editingProduct.image || "",
        images: editingProduct.images || [],
      });
    } else {
      setFormData({
        name: "",
        title: "",
        description: "",
        price: "",
        category: "",
        brand: "",
        rating: "",
        image: "",
        images: [],
      });
    }
    setErrors({});
    dispatch(clearMessages());
  }, [editingProduct, isOpen, dispatch]);

  useEffect(() => {
    if (success && isOpen) {
      setTimeout(() => {
        onClose();
        dispatch(clearMessages());
      }, 1500);
    }
  }, [success, isOpen, onClose, dispatch]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Product name is required";
    }

    if (
      !formData.price ||
      isNaN(formData.price) ||
      parseFloat(formData.price) <= 0
    ) {
      newErrors.price = "Valid price is required";
    }

    if (!formData.category) {
      newErrors.category = "Category is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (
      formData.rating &&
      (isNaN(formData.rating) ||
        parseFloat(formData.rating) < 1 ||
        parseFloat(formData.rating) > 5)
    ) {
      newErrors.rating = "Rating must be between 1 and 5";
    }

    if (!formData.image.trim()) {
      newErrors.image = "Image URL is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleImagesChange = (e) => {
    const imagesString = e.target.value;
    const imagesArray = imagesString
      .split(",")
      .map((url) => url.trim())
      .filter((url) => url);
    setFormData((prev) => ({
      ...prev,
      images: imagesArray,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      rating: formData.rating ? parseFloat(formData.rating) : 4.0,
      images: formData.images.length > 0 ? formData.images : [formData.image],
    };

    if (editingProduct) {
      dispatch(updateProduct({ id: editingProduct.id, productData }));
    } else {
      dispatch(addProduct(productData));
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      title: "",
      description: "",
      price: "",
      category: "",
      brand: "",
      rating: "",
      image: "",
      images: [],
    });
    setErrors({});
    dispatch(clearMessages());
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingProduct ? "Edit Product" : "Add New Product"}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              {success}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter product name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product title"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter product description"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price *
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                step="0.01"
                min="0"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.price ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="0.00"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">{errors.price}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.category ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
                onChange={handleInputChange}
                step="0.1"
                min="1"
                max="5"
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.rating ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="4.0"
              />
              {errors.rating && (
                <p className="text-red-500 text-sm mt-1">{errors.rating}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter brand name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Main Image URL *
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.image ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="https://example.com/image.jpg"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">{errors.image}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Images (comma-separated URLs)
            </label>
            <input
              type="text"
              value={formData.images.join(", ")}
              onChange={handleImagesChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
            />
          </div>

          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading
                ? "Saving..."
                : editingProduct
                ? "Update Product"
                : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
