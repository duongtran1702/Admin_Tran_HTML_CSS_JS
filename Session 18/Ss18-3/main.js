let username = prompt("Enter username");
if (username === "ADMIN") {
  let password = prompt("Enter password");
  if (password === "TheMaster") {
    alert("Welcome");
  } else if (password === "" || password === null) {
    alert("Cancelled");
  } else {
    alert("Wrong password");
  }
} else if (username === null || username === "") {
  alert("Cancelled");
} else {
  alert("I don't know you");
}
