for (let i = 0; i < 6; i++) {
    let hex = (Math.random() *1e10).toString(16);
    console.log("%c hello world", `color:#${hex.slice(0,6)};font-size:20px`);
}

