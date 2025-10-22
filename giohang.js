// ===== HIỂN THỊ GIỎ HÀNG =====
function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const list = document.getElementById("cart-list");
  const totalEl = document.getElementById("cart-total");
  list.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    list.innerHTML = "<p>🛒 Giỏ hàng của bạn đang trống.</p>";
    totalEl.textContent = "0 ₫";
    return;
  }

  cart.forEach((item, index) => {
    // ✅ Ép giá về dạng số
    const priceNum = typeof item.price === "number"
      ? item.price
      : parseFloat(String(item.price).replace(/[^\d]/g, "")) || 0;

    const itemTotal = priceNum * (item.quantity || 1);
    total += itemTotal;

    list.innerHTML += `
      <div class="row align-items-center py-3 border-bottom">
        <div class="col-6 d-flex align-items-center">
          <img src="${item.img}" alt="${item.name}" style="width:80px;height:auto;margin-right:15px;">
          <div>
            <p class="mb-1 font-weight-bold">${item.name}</p>
            <span class="text-danger font-weight-bold">${priceNum.toLocaleString()} ₫</span>
            <div class="mt-2">
              <a href="#" class="text-dark" onclick="removeItem(${index})">
                <i class="fa-solid fa-xmark"></i> Xóa
              </a>
            </div>
          </div>
        </div>
        <div class="col-2 text-center text-danger font-weight-bold">${priceNum.toLocaleString()} ₫</div>
        <div class="col-2 text-center">
          <select class="form-control w-50 m-auto" onchange="updateQuantity(${index}, this.value)">
            ${[1, 2, 3, 4, 5].map(n => `<option ${n === item.quantity ? 'selected' : ''}>${n}</option>`).join("")}
          </select>
        </div>
        <div class="col-2 text-center text-danger font-weight-bold">${itemTotal.toLocaleString()} ₫</div>
      </div>
    `;
  });

  totalEl.textContent = total.toLocaleString() + " ₫";
}

// ===== XOÁ SẢN PHẨM =====
function removeItem(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ===== CẬP NHẬT SỐ LƯỢNG =====
function updateQuantity(index, quantity) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity = Number(quantity);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

// ====== THÊM SẢN PHẨM VÀO GIỎ ======
// ====== THÊM SẢN PHẨM VÀO GIỎ ======
document.addEventListener("click", (e) => {
  // Dùng event delegation để bắt cả các nút thêm được sinh ra sau này
  if (e.target.closest(".btn-2")) {
    const btn = e.target.closest(".btn-2");
    const item = btn.closest(".item");
    if (!item) return;

    const name = item.querySelector("p").innerText.trim();
    const img = item.querySelector("img").src;
    const priceText = item.querySelector("h4").innerText.split(" ")[0];
    const price = parseFloat(priceText.replace(/[^\d]/g, "")) || 0;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((p) => p.name === name);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ name, price, img, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }
});


  renderCart(); // load giỏ hàng khi trang mở


// ====== CẬP NHẬT TỰ ĐỘNG ======
window.addEventListener("storage", renderCart);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) renderCart();
});
