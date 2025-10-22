// ===== DANH SÁCH SẢN PHẨM THEO TRANG =====
// ⚠️ Mỗi trang chỉ cần thay nội dung mảng này theo sản phẩm của chính trang đó
const pageProducts = [
  {
    name: "Sản phẩm 1",
    price: 120000,
    unit: "hộp",
    img: "images/sp1.jpg"
  },
  {
    name: "Sản phẩm 2",
    price: 89000,
    unit: "chai",
    img: "images/sp2.jpg"
  },
  // ... thêm sản phẩm khác của trang này
];

// ===== LƯU SẢN PHẨM VÀO localStorage (KHÔNG GHI ĐÈ) =====
function saveProductsToStorage(newProducts) {
  const stored = JSON.parse(localStorage.getItem("products")) || [];
  const combined = [...stored];

  // ✅ Tránh trùng sản phẩm theo name
  newProducts.forEach(p => {
    const exists = combined.find(item => item.name === p.name);
    if (!exists) combined.push(p);
  });

  localStorage.setItem("products", JSON.stringify(combined));
  console.log("✅ Đã cập nhật sản phẩm:", combined);
}

// ===== CHẠY KHI LOAD TRANG =====
window.addEventListener("DOMContentLoaded", () => {
  saveProductsToStorage(pageProducts);
});
