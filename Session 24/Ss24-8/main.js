let str = "";
let option;

do {
    option = Number(prompt(`
1. Nhập chuỗi ký tự
2. Hiển thị chuỗi ký tự
3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện
4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi
5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi
6. Chuyển đổi chuỗi ký tự thành dạng snake_case
7. Thoát chương trình
`));

    if (option === 1) {
        str = prompt("Nhập chuỗi ký tự:");
    }

    else if (option === 2) {
        if (str === "") {
            alert("Chưa có chuỗi nào được nhập!");
        } else {
            alert(`Chuỗi hiện tại: ${str}`);
        }
    }

    else if (option === 3) {
        if (str === "") {
            alert("Chưa có chuỗi nào được nhập!");
        } else {
            let words = str.toLowerCase().split(/\s+/);
            let count = {};
            for (let word of words) {
                count[word] = (count[word] || 0) + 1;
            }

            let result = "";
            for (let word in count) {
                if (count[word] > 1) {
                    result += `"${word}" xuất hiện ${count[word]} lần\n`;
                }
            }

            alert(result === "" ? "Không có từ trùng lặp." : result);
        }
    }

    else if (option === 4) {
        if (str === "") {
            alert("Chưa có chuỗi nào được nhập!");
        } else {
            let words = str.trim().split(/\s+/);
            let minLen = words[0].length;
            let maxLen = words[0].length;
            let minWords = [words[0]];
            let maxWords = [words[0]];

            for (let i = 1; i < words.length; i++) {
                let len = words[i].length;

                if (len < minLen) {
                    minLen = len;
                    minWords = [words[i]];
                } else if (len === minLen && !minWords.includes(words[i])) {
                    minWords.push(words[i]);
                }

                if (len > maxLen) {
                    maxLen = len;
                    maxWords = [words[i]];
                } else if (len === maxLen && !maxWords.includes(words[i])) {
                    maxWords.push(words[i]);
                }
            }

            alert(
                `Từ dài nhất (${maxLen} ký tự): ${maxWords.join(", ")}\n` +
                `Từ ngắn nhất (${minLen} ký tự): ${minWords.join(", ")}`
            );
        }
    }

    else if (option === 5) {
        if (str === "") {
            alert("Chưa có chuỗi nào được nhập!");
        } else {
            let count = {};
            for (let char of str.replace(/\s+/g, "")) {
                count[char] = (count[char] || 0) + 1;
            }

            let max = Math.max(...Object.values(count));
            let result = "";

            for (let char in count) {
                if (count[char] === max) {
                    result += `"${char}" (${max} lần)\n`;
                }
            }

            alert(`Ký tự xuất hiện nhiều nhất:\n${result}`);
        }
    }

    else if (option === 6) {
        if (str === "") {
            alert("Chưa có chuỗi nào được nhập!");
        } else {
            let snakeCase = str
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "_");
            alert(`Chuỗi dạng snake_case: ${snakeCase}`);
        }
    }

    else if (option === 7) {
        alert("Đã thoát chương trình.");
    }

    else {
        alert("Lựa chọn không hợp lệ!");
    }

} while (option !== 7);
