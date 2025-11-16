// ====== THU THẬP SẢN PHẨM TRÊN TRANG ======
function collectProducts() {
  const items = document.querySelectorAll(".item, .product");
  const products = [];

  items.forEach(item => {
    const name = item.querySelector("p")?.innerText?.trim();
    const priceText = item.querySelector("h4")?.innerText || "";
    const price = parseInt(priceText.replace(/\D/g, ""));
    const img = item.querySelector("img")?.getAttribute("src");

    if (name && price && img) {
      products.push({ name, price, img });
    }
  });

  return products;
}

// ====== LƯU SẢN PHẨM VÀO LOCAL STORAGE ======
function saveProductsToLocalStorage(newProducts) {
  const oldProducts = JSON.parse(localStorage.getItem("products")) || [];

  // Gộp tránh trùng tên
  const merged = [
    ...oldProducts.filter(p => !newProducts.some(np => np.name === p.name)),
    ...newProducts
  ];

  localStorage.setItem("products", JSON.stringify(merged));
  console.log("✅ Đã lưu sản phẩm vào localStorage:", merged);
}

// ====== TỰ ĐỘNG CHẠY KHI LOAD TRANG ======
window.addEventListener("DOMContentLoaded", () => {
  const collected = collectProducts();
  saveProductsToLocalStorage(collected);
});
