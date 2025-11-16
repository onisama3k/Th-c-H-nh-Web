// ===== CHẶN GẮN TRÙNG SỰ KIỆN TOÀN CỤC =====
if (window.gioHangScriptLoaded) {
  console.warn("⚠️ giohang2.js đã chạy, bỏ qua lần tải lại.");
} else {
  window.gioHangScriptLoaded = true;

  // ====== THÊM SẢN PHẨM VÀO GIỎ ======
  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.name === product.name);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    showAddMessage(product.name);
  }

  // ====== HIỆN THÔNG BÁO NHỎ (toast, chỉ 1 lần mỗi click) ======
  let toastTimeout = null;
  function showAddMessage(name) {
    // Nếu đang có toast hiển thị → xóa luôn để không chồng
    const existingMsg = document.querySelector(".toast-add-msg");
    if (existingMsg) existingMsg.remove();
    if (toastTimeout) clearTimeout(toastTimeout);

    const msg = document.createElement("div");
    msg.className = "toast-add-msg";
    msg.textContent = `🛒 Đã thêm "${name}" vào giỏ hàng!`;
    Object.assign(msg.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      background: "#221FC6",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "8px",
      fontSize: "15px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
      zIndex: "9999",
      opacity: "1",
      transition: "opacity 0.4s ease"
    });
    document.body.appendChild(msg);

    toastTimeout = setTimeout(() => {
      msg.style.opacity = "0";
      setTimeout(() => msg.remove(), 400);
    }, 1200);
  }

  // ====== CẬP NHẬT SỐ LƯỢNG TRÊN ICON GIỎ ======
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartIcon = document.querySelector(".inner-left a[href='giohang.html'] p");
    if (cartIcon) cartIcon.innerText = `Giỏ hàng (${count})`;
  }

  // ====== LẤY DỮ LIỆU TỪ THẺ ITEM ======
  function extractProductInfo(itemEl) {
    const name = itemEl.querySelector("p")?.innerText.trim() || "Sản phẩm";
    const priceText = itemEl.querySelector("h4")?.innerText || "0";
    const price = parseInt(priceText.replace(/[^\d]/g, "")) || 0;
    const img = itemEl.querySelector("img")?.getAttribute("src") || "images/default.png";
    const unitText = itemEl.querySelector("span")?.innerText.replace("đơn vị tính", "").trim() || "";
    return { name, price, img, unit: unitText };
  }

  // ====== LẮNG NGHE CLICK DUY NHẤT TOÀN TRANG ======
  if (!window.addToCartEventAdded) {
    document.addEventListener("click", e => {
      const btn = e.target.closest(".btn-2, .btn-1"); // hỗ trợ cả .btn-2 và .btn-1
      if (!btn) return;

      const item = btn.closest(".item, .product");
      if (!item) return;

      const product = extractProductInfo(item);
      addToCart(product);
    });
    window.addToCartEventAdded = true;
  }

  // ====== CẬP NHẬT ICON GIỎ KHI LOAD ======
  window.addEventListener("DOMContentLoaded", updateCartCount);
}

