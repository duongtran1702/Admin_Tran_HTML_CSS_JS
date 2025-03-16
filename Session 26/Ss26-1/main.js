let str = prompt('một mảng số nguyên gồm 10 phần tử');
function sang(str) {
    let a = str.split(' ').filter((temp) => temp.trim() !== '');
    if (a.length === 0) alert('Mảng không có phần tử nào');
    let b = a.map(Number).filter((temp) => !Number.isNaN(temp) && temp > 10);
    alert(`${b.join(' ')}`);
}
sang(str);
