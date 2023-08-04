import React, { useState } from "react";

const AddProductForm = ({ onProductAdded, onClose, listProducts, existingProduct }) => {
  const [imageFile, setImageFile] = useState(existingProduct ? existingProduct.image : null);
  const [name, setName] = useState(existingProduct ? existingProduct.name : "");
  const [priceBuy, setPriceBuy] = useState(existingProduct ? existingProduct.priceBuy : "");
  const [priceSell, setPriceSell] = useState(existingProduct ? existingProduct.priceSell : "");
  const [stock, setStock] = useState(existingProduct ? existingProduct.stock : "");
  const [nameError, setNameError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const allowedFormats = ["image/jpeg", "image/png"];

    if (file && allowedFormats.includes(file.type) && file.size <= 100 * 1024) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImageFile(reader.result);
      };

      reader.readAsDataURL(file);
    } else {
      setImageFile(null);
      alert("Maaf, maksimal gambar 100KB dengan format JPEG atau PNG");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isDuplicateName = existingProduct ? false : listProducts.some((product) => product.name.toLowerCase() === name.toLowerCase());

    if (isDuplicateName) {
      setNameError("Nama produk yang anda masukkan sudah tersedia.");
    } else {
      setNameError("");
      const newProduct = {
        id: existingProduct ? existingProduct.id : listProducts.length + 1,
        image: imageFile ? imageFile : "",
        name,
        priceBuy,
        priceSell,
        stock,
      };

      onProductAdded(newProduct);
      onClose();
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">{existingProduct ? "Edit Product" : "Add New Product"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 text-sm font-medium">
            Gambar (JPG or PNG, max 100KB)
          </label>
          <input type="file" id="image" accept=".jpg,.jpeg,.png" onChange={handleImageChange} className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-red-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Nama
          </label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-red-300" />
          {!nameError ? null : <p className="text-red-500">{nameError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="buyPrice" className="block mb-2 text-sm font-medium">
            Harga Beli
          </label>
          <input type="number" id="buyPrice" value={priceBuy} onChange={(e) => setPriceBuy(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-red-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="sellPrice" className="block mb-2 text-sm font-medium">
            Harga Jual
          </label>
          <input type="number" id="sellPrice" value={priceSell} onChange={(e) => setPriceSell(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-red-300" />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block mb-2 text-sm font-medium">
            Stok
          </label>
          <input type="number" id="stock" value={stock} onChange={(e) => setStock(e.target.value)} className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-red-300" />
        </div>
        <div className="flex justify-end">
          <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors">
            {existingProduct ? "Updated" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
