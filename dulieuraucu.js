const products = [
  // Rau sạch
  { name: "Rau dền 500g", image: "./assets/images/raudien.png", price: "18.500đ", unit: "kg" },
  { name: "Giá đỗ WinEco 300g", image: "./assets/images/giado.png", price: "10.000đ", unit: "kg" },
  { name: "Thì là 50g", image: "./assets/images/thiala.png", price: "8.900đ", unit: "kg" },
  { name: "Cải sậy kg", image: "./assets/images/raucai.png", price: "30.000đ", unit: "kg" },
  { name: "Cải ngọt kg", image: "./assets/images/caingot.png", price: "25.000đ", unit: "kg" },
  { name: "Dọc mùng", image: "./assets/images/docmung.png", price: "20.000đ", unit: "kg" },
  { name: "Đậu đũa kg", image: "./assets/images/dau.png", price: "23.000đ", unit: "kg" },
  { name: "Rau đay kg", image: "./assets/images/den.png", price: "25.000đ", unit: "kg" },
  { name: "Bắp cải trái tim", image: "./assets/images/cai.png", price: "35.000đ", unit: "kg" },
  { name: "Rau bồ ngót", image: "./assets/images/ngot.png", price: "30.500đ", unit: "kg" },
  { name: "Rau mồng tơi kg", image: "./assets/images/toi.png", price: "39.900đ", unit: "kg" },
  { name: "Rau muống kg", image: "./assets/images/mong.png", price: "20.000đ", unit: "kg" },

  // Củ - quả
  { name: "Củ sả WinEco 100g", image: "./assets/images/cu1.png", price: "3.600đ", unit: "kg" },
  { name: "Hành Lý Sơn gói 500g", image: "./assets/images/cu2.png", price: "43.600đ", unit: "kg" },
  { name: "Củ gừng 100g", image: "./assets/images/cu3.png", price: "6.500đ", unit: "kg" },
  { name: "Cà rốt 1kg", image: "./assets/images/cu4.png", price: "45.500đ", unit: "kg" },
  { name: "Cà rốt baby 200g", image: "./assets/images/cu5.png", price: "22.500đ", unit: "kg" },
  { name: "Củ đậu", image: "./assets/images/cu12.png", price: "23.500đ", unit: "kg" },
  { name: "Khoai tây 500g", image: "./assets/images/cu6.png", price: "21.500đ", unit: "kg" },
  { name: "Khoai lang mật 200g", image: "./assets/images/cu7.png", price: "42.500đ", unit: "kg" },
  { name: "Cà tím dài", image: "./assets/images/cu8.png", price: "26.900đ", unit: "kg" },
  { name: "Ớt chuông đỏ", image: "./assets/images/cu9.png", price: "52.500đ", unit: "kg" },
  { name: "Dưa chuột baby 500g", image: "./assets/images/cu10.png", price: "26.500đ", unit: "kg" },
  { name: "Chanh không hạt 500g", image: "./assets/images/cu11.png", price: "19.900đ", unit: "kg" },

  // Trái cây
  { name: "Dưa hấu ruột vàng", image: "./assets/images/trai1.png", price: "49.660đ", unit: "kg" },
  { name: "Dưa lê trắng", image: "./assets/images/trai2.png", price: "19.900đ", unit: "kg" },
  { name: "Xoài cát chu", image: "./assets/images/trai3.png", price: "55.900đ", unit: "kg" },
  { name: "Táo Envy New túi 1Kg", image: "./assets/images/trai4.png", price: "199.000đ", unit: "kg" },
  { name: "Bưởi hồng miền Tây", image: "./assets/images/trai5.png", price: "39.900đ", unit: "kg" },
  { name: "Bưởi đường lá cam", image: "./assets/images/trai6.png", price: "49.900đ", unit: "kg" },
  { name: "Bưởi hồng da xanh", image: "./assets/images/trai7.png", price: "99.900đ", unit: "kg" },
  { name: "Chuối dole", image: "./assets/images/trai8.png", price: "59.900đ", unit: "kg" },
  { name: "Chuối vàng", image: "./assets/images/trai9.png", price: "34.000đ", unit: "kg" },
  { name: "Kiwi Newzealand", image: "./assets/images/trai10.png", price: "119.900đ", unit: "kg" },
  { name: "Nho đen không hạt Mỹ", image: "./assets/images/trai11.png", price: "259.900đ", unit: "kg" },
  { name: "Thanh long ruột trắng", image: "./assets/images/trai12.png", price: "39.900đ", unit: "kg" },


  // --- Danh sách Mì ---
  { name: "Mì sempio vị hải sản", price: 18500, img: "./assets/images/mi-sempio-vi-hai-san-rong-bien-103g.jpg", unit: "gói" },
  { name: "Mì Kokomi", price: 10000, img: "./assets/images/mi-kokomi-90-tom-chua-cay-goi-90g.jpg", unit: "gói" },
  { name: "Mì trộn phô mai", price: 8900, img: "./assets/images/mi-tron-pho-mai-mini-ottogi-goi-80g.jpg", unit: "gói" },
  { name: "Mì xào 3 Miền", price: 30000, img: "./assets/images/mi-xao-3-mien-gold-hanh-phi-tuong-toi-goi-75g.jpg", unit: "gói" },
  { name: "Mì Oppa tôm chua cay", price: 25000, img: "./assets/images/mi-oppa-tom-chua-cay-ottogi-goi-65g.jpg", unit: "gói" },
  { name: "Mì 3 Miền gà sợi", price: 20000, img: "./assets/images/mi-3-mien-ga-soi-pho-goi-65g.jpg", unit: "gói" },
  { name: "Bún cá cay", price: 23000, img: "./assets/images/bun-ca-cay-hang-nga-goi-70g_202509160947334525.jpg", unit: "gói" },
  { name: "Phở bò Vifon 90g", price: 25000, img: "./assets/images/pho-bo-vifon-goi-90g-co-goi-thit-that_202508211335079753.jpg", unit: "gói" },
  { name: "Lốc 5  Cung Đình", price: 39900, img: "./assets/images/pho-ga-cung-dinh-ha-noi-goi-68g.jpg", unit: "gói" },
  { name: "Phở bò Đệ Nhất", price: 20000, img: "./assets/images/pho-de-nhat-bo-65g.jpg", unit: "gói" },

  // --- Danh sách Bánh kẹo & Snack ---
  { name: "Snack hình cua", price: 31600, img: "./assets/images/thumb-327778-1_202411261345113148.jpg", unit: "gói" },
  { name: "Snackgói phở bò", price: 35000, img: "./assets/images/loc-5-goi-pho-bo-tai-lan-de-nhat-goi-68g_202503261319238121.jpg", unit: "gói" },
  { name: "Phở ăn liền Long Triều", price: 30500, img: "./assets/images/pho-an-lien-long-trieu-vifon-vi-bo-goi-75g-202405171350042467.jpg", unit: "gói" },
  { name: "Phở gà vị sườn nướng Poca 60g", price: 43600, img: "./assets/images/thumb-327775-1_202411261345027489.jpg", unit: "gói" },
  { name: "Lay's Stax 42g", price: 6500, img: "./assets/images/snack-khoai-tay-vi-tu-nhien-lays-stax-lon-42g.jpg", unit: "gói" },
  { name: "Cheddar Lay's 53g", price: 45500, img: "./assets/images/snack-khoai-tay-vi-pho-mai-cheddar-lays-wavy-goi-54g.jpg", unit: "gói" },
  { name: "Snack vị phô mai Poca 58g", price: 22500, img: "./assets/images/snack-hinh-mu-phap-su-vi-pho-mai-poca-goi-58g.jpg", unit: "gói" },
  { name: "Koikeya Polinky 54g", price: 23500, img: "./assets/images/snack-bap-koikeya-polinky-goi-54g.jpg", unit: "gói" },
  { name: "Snack bí đỏ", price: 21500, img: "./assets/images/thumb-79708_202411261112092491.jpg", unit: "gói" },
  { name: "Snack phồng mực Oishi", price: 42500, img: "./assets/images/thumb-79710_202411261112142495.jpg", unit: "gói" },
  { name: "Snack tôm cay Oishi", price: 6000, img: "./assets/images/thumb-79795_202411261113336566.jpg", unit: "gói" },
  { name: "Snack sườn Poca", price: 12000, img: "./assets/images/snack-poca-khoai-tay-suon-nuong-52g.jpg", unit: "gói" }
];

  // ✅ Lưu vào localStorage
  localStorage.setItem("products", JSON.stringify(products));
