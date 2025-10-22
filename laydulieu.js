function saveProductsToLocalStorage(newProducts) {
  // Lấy dữ liệu cũ (nếu có)
  const oldProducts = JSON.parse(localStorage.getItem("products")) || [];

  // Gộp dữ liệu mới, tránh trùng tên
  const merged = [
    ...oldProducts.filter(p => !newProducts.some(np => np.name === p.name)),
    ...newProducts
  ];

  // Lưu vào localStorage
  localStorage.setItem("products", JSON.stringify(merged));

  console.log("✅ Đã lưu sản phẩm vào localStorage:", merged);
}
