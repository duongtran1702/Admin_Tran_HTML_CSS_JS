let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
  ];
  
  let cart = [];
  
  while (true) {
    let choice = prompt(
      `MENU:
  1. Xem danh sách sản phẩm
  2. Mua sản phẩm
  3. Xem giỏ hàng
  4. Thanh toán
  5. Thoát
  Nhập số lựa chọn:`
    );
  
    if (choice === "1") {
      let list = "Danh sách sản phẩm:\n";
      products.forEach(([name, quantity, price]) => {
        list += `${name} - Còn: ${quantity} - Giá: ${price}đ\n`;
      });
      alert(list);
    }
  
    else if (choice === "2") {
      let input = prompt("Nhập tên sản phẩm muốn mua:");
      let productName = input.trim().toLowerCase();
  
      let found = products.find((p) => p[0].toLowerCase() === productName);
  
      if (!found) {
        alert(" Sản phẩm không có trong cửa hàng!");
      } else if (found[1] === 0) {
        alert(" Sản phẩm đã hết hàng!");
      } else {
        found[1]--;
        let inCart = cart.find((c) => c[0].toLowerCase() === productName);
        if (inCart) {
          inCart[1]++;
        } else {
          cart.push([found[0], 1, found[2]]);
        }
        alert(` Đã thêm ${found[0]} vào giỏ hàng.`);
      }
    }
  
    else if (choice === "3") {
      if (cart.length === 0) {
        alert(" Giỏ hàng đang trống.");
      } else {
        let message = " Giỏ hàng của bạn:\n";
        cart.forEach(([name, quantity, price]) => {
          message += `${name} x ${quantity} = ${quantity * price}đ\n`;
        });
        alert(message);
      }
    }
  
    else if (choice === "4") {
      if (cart.length === 0) {
        alert("Bạn chưa mua gì cả.");
      } else {
        let bill = " HÓA ĐƠN:\n";
        let total = 0;
        cart.forEach(([name, quantity, price]) => {
          let amount = quantity * price;
          total += amount;
          bill += `${name} x ${quantity} = ${amount}đ\n`;
        });
        bill += ` Tổng cộng: ${total}đ\nCảm ơn bạn đã mua hàng!`;
        alert(bill);
        break;
      }
    }
  
    else if (choice === "5") {
      alert("Tạm biệt!");
      break;
    }
    else {
      alert(" Lựa chọn không hợp lệ. Vui lòng thử lại.");
    }
  }
  