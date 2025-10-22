// ====== HÀM TÌM KIẾM ======
function searchProducts() {
  const keyword = document.getElementById("searchInput").value.trim();
  if (keyword) {
    window.location.href = `ketqua.html?keyword=${encodeURIComponent(keyword)}`;
  } else {
    alert("Vui lòng nhập từ khóa!");
  }
}

// ====== LẤY TỪ KHÓA TRONG URL ======
function getKeywordFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("keyword")?.toLowerCase() || "";
}

// ====== HIỂN THỊ KẾT QUẢ TÌM KIẾM ======
function showSearchResults() {
  const keyword = getKeywordFromURL();
  const container = document.getElementById("searchResults");

  if (!container) return;
  if (!keyword) {
    container.innerHTML = `<p style="padding-top:150px; font-size:18px;">Vui lòng nhập từ khóa tìm kiếm.</p>`;
    return;
  }

  // ✅ Lấy dữ liệu sản phẩm từ localStorage
  const products = JSON.parse(localStorage.getItem("products")) || [];

  if (products.length === 0) {
    container.innerHTML = `<p style="padding-top:150px; font-size:18px;">⚠️ Chưa có dữ liệu sản phẩm. Hãy vào trang sản phẩm trước khi tìm kiếm.</p>`;
    return;
  }

  // 🔍 Lọc sản phẩm theo từ khóa
  const matched = products.filter(p => p.name.toLowerCase().includes(keyword));

  if (matched.length === 0) {
    container.innerHTML = `<p style="padding-top:150px; font-size:18px;">Không tìm thấy sản phẩm nào cho từ khóa "<b>${keyword}</b>".</p>`;
  } else {
    container.innerHTML = matched.map(p => {
      // ✅ Làm sạch giá tiền để tránh NaN
      const cleanPrice = Number(String(p.price).replace(/[^\d]/g, ""));
      return `
        <div class="col-2 mb-4">
          <div class="item text-center" data-name="${p.name}">
            <img src="${p.img || p.image || 'images/default.png'}" alt="${p.name}" style="width:100%;height:auto;">
            <p>${p.name}</p>
            <h4>${cleanPrice.toLocaleString()} ₫ <span>${p.unit ? `(${p.unit})` : ''}</span></h4>
            <button class="btn-2"><p>Thêm</p></button>
          </div>
        </div>
      `;
    }).join("");
  }
}

// ====== HÀM THÊM VÀO GIỎ HÀNG ======
function addToCartFromItem(itemEl) {
  const name = itemEl.querySelector("p").innerText;
  const priceText = itemEl.querySelector("h4").innerText;
  const price = parseInt(priceText.replace(/\D/g, "")); // Xử lý để lấy đúng số
  const img = itemEl.querySelector("img").src;

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existing = cart.find(p => p.name === name);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, img, quantity: 1 });
  }

  // localStorage.setItem("cart", JSON.stringify(cart));
  // alert(`Đã thêm ${name} vào giỏ hàng!`);
}

// ====== BẮT SỰ KIỆN NHẤN "THÊM" ======
document.addEventListener("click", e => {
  const btn = e.target.closest(".btn-2");
  if (btn) {
    const itemEl = btn.closest(".item");
    if (itemEl) addToCartFromItem(itemEl);
  }
});

// ====== CHẠY TỰ ĐỘNG KHI LOAD TRANG ======
window.addEventListener("DOMContentLoaded", () => {
  showSearchResults();

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") {
        e.preventDefault();
        searchProducts();
      }
    });
  }
});
