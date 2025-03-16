const company = {
    name: 'RikkeiSoft',
    location: 'Hà Nội',
    employees: [
        { name: 'Nguyễn Văn Luận', position: 'Developer' },
        { name: 'Nguyễn Văn Hoàng', position: 'Tester' },
        { name: 'Hoàng Nam Cao', position: 'Manager' },
    ],
};
console.log(`Ten cong ty : ${company.name}`);
company.employees.forEach((empoyee,index) => {
    console.log(`${index+1}. ${empoyee.name}`);
});
