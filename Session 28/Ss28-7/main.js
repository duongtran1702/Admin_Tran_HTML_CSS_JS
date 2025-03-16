let students = [
    { name: 'Trần Trí Dương', scores: { math: 9, english: 8, literature: 7 } },

    { name: 'Hà Bích Ngọc', scores: { math: 3, english: 2, literature: 5 } },

    { name: 'Bùi Thái Sơn', scores: { math: 9.5, english: 9, literature: 9 } },
];

function filterExellentstudent(studentList) {
    return studentList.filter((student) => {
        let s = student.scores;
        let avg = (s.math + s.english + s.literature) / 3;
        student.avg = avg.toFixed(2);
        return student.avg >= 8;
    });
}
const temp = filterExellentstudent(students);
for (const i in temp) {
    console.log(`${Number(i) + 1}. ${temp[i].name} (${temp[i].avg})`);
}
