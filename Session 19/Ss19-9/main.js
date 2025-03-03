let result_1 = "javascript" + 5; // "javascript5".Khi sử dụng toán tử +, nếu một trong hai toán hạng là chuỗi (string), JavaScript sẽ chuyển toán hạng còn lại thành chuỗi và thực hiện phép nối chuỗi. Vì "javascript" là chuỗi, nên 5 được chuyển thành "5"
let result_2 = "javascipt" - 1; // NaN Toán tử - chỉ hoạt động với số (number). Khi trừ "javascript" - 1, JavaScript cố gắng chuyển "javascript" thành số, nhưng không thể vì nó không phải một chuỗi số hợp lệ.
let result_3 = "3" + 2; // "32"  Vì một toán hạng là chuỗi ("3"), JavaScript sẽ chuyển 2 thành "2" và thực hiện phép nối chuỗi
let result_4 = "5" - 4; // 1 Khi sử dụng toán tử -, JavaScript cố gắng chuyển "5" thành số (5), sau đó thực hiện phép trừ 5 - 4 = 1
let result_5 = isNaN("123"); // false isNaN() kiểm tra xem giá trị có phải là NaN không. Chuỗi "123" có thể chuyển thành số hợp lệ (123)
let result_6 = isNaN("hello"); // true  Chuỗi "hello" không thể chuyển thành số hợp lệ, nên khi kiểm tra bằng isNaN()
let result_7 = Number.isNaN("123"); // false Number.isNaN() chỉ trả về true nếu giá trị thực sự là NaN. Chuỗi "123" không phải NaN
let result_8 = Number.isNaN(NaN); // true NaN thực sự là NaN, nên Number.isNaN(NaN) trả về true

