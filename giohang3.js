// --- Hàm thêm sản phẩm vào giỏ ---


// --- Cập nhật hiển thị số lượng giỏ hàng ---
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartIcon = document.querySelector(".inner-left a[href='giohang.html'] p");
  if (cartIcon) cartIcon.innerText = `Giỏ hàng (${count})`;
}

// --- Áp dụng cho cả .item và .product ---
document.addEventListener("DOMContentLoaded", () => {
  // Bắt cả 2 loại nút
  const buttons = document.querySelectorAll(".item .btn-2, .product .btn-1");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const productEl = btn.closest(".item") || btn.closest(".product");
      if (!productEl) return;

      const name = productEl.querySelector("p").innerText.trim();
      const priceText = productEl.querySelector("h4").innerText;
      const price = parseInt(priceText.replace(/\D/g, ""));
      const img = productEl.querySelector("img").getAttribute("src");

      const product = { name, price, img };
      addToCart(product);
    });
  });

  updateCartCount();
});
